export type PlayerColor = 'red' | 'green' | 'yellow' | 'blue';

export interface Piece {
  id: number;
  color: PlayerColor;
  position: number;
  isHome: boolean;
  isFinished: boolean;
}

export interface Player {
  color: PlayerColor;
  pieces: Piece[];
  name: string;
}

export interface GameState {
  players: Player[];
  currentPlayer: number;
  diceValue: number | null;
  hasRolled: boolean;
  winner: PlayerColor | null;
}