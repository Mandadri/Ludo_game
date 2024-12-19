import React, { useState, useCallback } from 'react';
import { GameState, PlayerColor, Piece } from './types/game';
import Board from './components/Board';
import Dice from './components/Dice';

const INITIAL_STATE: GameState = {
  players: [
    {
      color: 'red',
      name: 'Player 1',
      pieces: Array.from({ length: 4 }, (_, i) => ({
        id: i,
        color: 'red',
        position: -1,
        isHome: true,
        isFinished: false,
      })),
    },
    {
      color: 'green',
      name: 'Player 2',
      pieces: Array.from({ length: 4 }, (_, i) => ({
        id: i + 4,
        color: 'green',
        position: -1,
        isHome: true,
        isFinished: false,
      })),
    },
    {
      color: 'yellow',
      name: 'Player 3',
      pieces: Array.from({ length: 4 }, (_, i) => ({
        id: i + 8,
        color: 'yellow',
        position: -1,
        isHome: true,
        isFinished: false,
      })),
    },
    {
      color: 'blue',
      name: 'Player 4',
      pieces: Array.from({ length: 4 }, (_, i) => ({
        id: i + 12,
        color: 'blue',
        position: -1,
        isHome: true,
        isFinished: false,
      })),
    },
  ],
  currentPlayer: 0,
  diceValue: null,
  hasRolled: false,
  winner: null,
};

function App() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  const rollDice = useCallback(() => {
    const value = Math.floor(Math.random() * 6) + 1;
    setGameState(prev => ({
      ...prev,
      diceValue: value,
      hasRolled: true,
    }));
  }, []);

  const handleSquareClick = useCallback((position: number) => {
    if (!gameState.hasRolled || gameState.diceValue === null) return;

    setGameState(prev => {
      // Game logic for moving pieces would go here
      const nextPlayer = (prev.currentPlayer + 1) % prev.players.length;
      return {
        ...prev,
        currentPlayer: nextPlayer,
        hasRolled: false,
        diceValue: null,
      };
    });
  }, [gameState.hasRolled, gameState.diceValue]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Ludo Game</h1>
      
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Current Player: {gameState.players[gameState.currentPlayer].name}
            </h2>
            <Dice
              value={gameState.diceValue}
              onRoll={rollDice}
              disabled={gameState.hasRolled}
            />
          </div>
        </div>

        <Board
          gameState={gameState}
          onSquareClick={handleSquareClick}
        />
      </div>
    </div>
  );
}

export default App;