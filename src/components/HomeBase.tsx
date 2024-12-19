import React from 'react';
import { PlayerColor } from '../types/game';

interface HomeBaseProps {
  color: PlayerColor;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const HomeBase: React.FC<HomeBaseProps> = ({ color, position }) => {
  const baseColors = {
    red: 'bg-red-100 border-red-500',
    green: 'bg-green-100 border-green-500',
    yellow: 'bg-yellow-100 border-yellow-500',
    blue: 'bg-blue-100 border-blue-500',
  };

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  return (
    <div className={`absolute w-40 h-40 border-4 rounded-lg ${baseColors[color]} ${positionClasses[position]}`}>
      <div className="grid grid-cols-2 gap-4 p-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-12 h-12 rounded-full border-2 ${color}-piece`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBase;