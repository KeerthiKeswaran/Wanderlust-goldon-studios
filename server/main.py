from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from models import init_quest_model , init_activity_model
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class Location(BaseModel):
    location : str

async def init_models():
    activity_model = init_activity_model()
    quest_model =  init_quest_model()
    print("Initialized Models!!")
    return activity_model, quest_model

@app.on_event("startup")
async def startup():
    global activity_model , quest_model
    activity_model , quest_model = await init_models()


def json_parser(response):
  response = response.replace("```json", "").replace("```", "").strip()
  json_data = {}
  try:
      json_data = json.loads(response)
  except json.JSONDecodeError as e:
      print(f"Error parsing JSON: {e}")
  return json_data

    
@app.post("/get_adventure_quest")
async def semantic_search(request : Location):
    location = request.location
    
    adventure = activity_model.invoke({"location": str(location)})
    quest = quest_model.invoke({"location": str(location)})
    adventure_json = json_parser(adventure.content)
    quest_json =  json_parser(quest.content)
    return {"adventures" : adventure_json,  "quests" : quest_json}
    
@app.get("/status")
async def status():
    return {"status" : "active"}
    
    

