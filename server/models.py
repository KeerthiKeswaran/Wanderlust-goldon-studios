from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
import os
load_dotenv()
groq_api_key = os.getenv('GROQ_API_KEY')

def init_activity_model():
    activity_model = ChatGroq(
        temperature=0.2,
        groq_api_key=groq_api_key,
        model_name="gemma2-9b-it"
    )
    prompt_template = PromptTemplate.from_template(
        """
            You're an activity generator. You need to generate an activity in JSON format with the user location: ${location}.
            Generate an activity suggestion in JSON format. The activity should fall into one of these categories: Food, Culture, or Adventure. Provide the following fields:
            - id : index of the activity
            - title : Activity description
            - distance : estimated distance for the destination
            - Category: "Food" (or "Culture" or "Adventure")
            - Difficulty (Easy, Medium, Hard)
            - Time estimate
            - Location: ${location}
            
            Generate atleast 3 activities on each request. Generate a combination of easy, medium, hard difficulty levels.

            Example response:
            {{
             "id": number,
             "title": "Try vada pav at Churchgate station",
             "distance": string,
            "category": "Food",
            "difficulty": "Medium",
            "duration": "30 minutes",
            "location": "Churchgate, Mumbai"
            }}
            
        Generate only the json response.
        """
    )

    model = prompt_template | activity_model

    return model


def init_quest_model():
    quest_model = ChatGroq(
        temperature=0.2,
        groq_api_key=groq_api_key,
        model_name="gemma2-9b-it"
    )
    prompt_template = PromptTemplate.from_template(
        """
        You're a quest generator. You need to generate a quest in JSON format with the user location: ${location}.
        Create a multi-step quest in JSON format. Include:
        - Quest name
        - Total time
        - Difficulty
        - Location: ${location}
        - Steps (each step should have a step number, description, and location)
        
        Example response:
        {{
            "quest_name": "Evening Explorer",
            "total_time": "3 hours",
            "difficulty": "Medium",
            "steps": [
            {{
                "step_number": 1,
                "description": "Coffee at Starbucks Churchgate",
                "location": "Starbucks Churchgate"
            }},
            ...
            ]
        }}

        Generate only the json response.
        """
    )

    model = prompt_template | quest_model

    return model
