import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface PostCardProps {
  post: {
    user: {
      name: string;
      avatar: string;
    };
    image: string;
    description: string;
    likes: number;
    comments: number;
    time: string;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden">
      <div className="p-4 flex items-center space-x-3">
        <img
          src={post.user.avatar}
          alt={post.user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-medium">{post.user.name}</h3>
          <p className="text-sm text-slate-400">{post.time}</p>
        </div>
      </div>
      
      <img
        src={post.image}
        alt="Post"
        className="w-full aspect-video object-cover"
      />
      
      <div className="p-4">
        <p className="mb-4">{post.description}</p>
        
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-slate-400 hover:text-orange-400 transition-colors">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-slate-400 hover:text-orange-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-2 text-slate-400 hover:text-orange-400 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;