import { MapPin } from 'lucide-react';

interface WanderButtonProps {
  onClick: () => Promise<void>; // Define the onClick prop type
}

const WanderButton = ({ onClick }: WanderButtonProps) => {
  return (
    <button
      className="flex flex-col items-center"
      onClick={onClick} // Attach the onClick handler
    >
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-full shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
        <MapPin className="w-10 h-10 text-white" />
      </div>
      <span className="block text-center mt-4 font-medium text-lg">
        Generate a Wander
      </span>
    </button>
  );
};

export default WanderButton;
