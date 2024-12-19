import React from 'react';
import { Piece } from '../types/game';

interface SquareProps {
  position: number;
  pieces: Piece[];
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ pieces, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`w-10 h-10 border border-gray-200 rounded-sm flex items-center justify-center
        ${pieces.length > 0 ? 'cursor-pointer' : ''}`}
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`w-6 h-6 rounded-full border-2 border-gray-700
            ${piece.color === 'red' ? 'bg-red-500' : ''}
            ${piece.color === 'green' ? 'bg-green-500' : ''}
            ${piece.color === 'yellow' ? 'bg-yellow-500' : ''}
            ${piece.color === 'blue' ? 'bg-blue-500' : ''}`}
        />
      ))}
    </div>
  );
};

export default Square;