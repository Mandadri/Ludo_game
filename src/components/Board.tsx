import React from 'react';
import { PlayerColor, GameState } from '../types/game';
import Square from './Square';
import HomeBase from './HomeBase';

interface BoardProps {
  gameState: GameState;
  onSquareClick: (position: number) => void;
}

const Board: React.FC<BoardProps> = ({ gameState, onSquareClick }) => {
  const renderTrack = () => {
    const track = [];
    for (let i = 0; i < 52; i++) {
      const pieces = gameState.players.flatMap(player => 
        player.pieces.filter(piece => piece.position === i && !piece.isFinished)
      );
      
      track.push(
        <Square
          key={i}
          position={i}
          pieces={pieces}
          onClick={() => onSquareClick(i)}
        />
      );
    }
    return track;
  };

  return (
    <div className="relative w-[600px] h-[600px] bg-white rounded-lg shadow-xl">
      <div className="absolute inset-0 grid grid-cols-15 grid-rows-15 gap-0.5 p-4">
        {/* Home bases */}
        <HomeBase color="red" position="top-left" />
        <HomeBase color="green" position="top-right" />
        <HomeBase color="yellow" position="bottom-left" />
        <HomeBase color="blue" position="bottom-right" />
        
        {/* Game track */}
        <div className="absolute inset-0 flex flex-wrap">
          {renderTrack()}
        </div>
      </div>
    </div>
  );
};

export default Board;