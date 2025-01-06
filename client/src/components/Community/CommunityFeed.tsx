import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import PostCard from './PostCard';

const CommunityFeed = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      },
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80',
      description: 'Found this amazing hidden viewpoint during today\'s wander! 🌅',
      likes: 124,
      comments: 18,
      time: '2 hours ago'
    },
    {
      id: 2,
      user: {
        name: 'Mike Rivers',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      },
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80',
      description: 'Street art discovery in the heart of the city 🎨',
      likes: 89,
      comments: 12,
      time: '4 hours ago'
    }
  ];

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CommunityFeed;