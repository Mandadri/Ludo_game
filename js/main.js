import { GameState } from './modules/GameState.js';
import { Board } from './modules/Board.js';
import { Dice } from './modules/Dice.js';
import { UIManager } from './modules/UIManager.js';

class Game {
    constructor() {
        this.gameState = new GameState();
        this.board = new Board();
        this.dice = new Dice();
        this.ui = new UIManager();
        
        this.init();
    }

    init() {
        this.board.createBoard();
        this.setupEventListeners();
        this.ui.updatePlayerDisplay(this.gameState.getCurrentPlayer());
    }

    setupEventListeners() {
        this.dice.onRoll((value) => {
            this.gameState.setDiceValue(value);
            this.handleDiceRoll(value);
        });

        this.board.onSquareClick((position) => {
            this.handleSquareClick(position);
        });
    }

    handleDiceRoll(value) {
        const currentPlayer = this.gameState.getCurrentPlayer();
        this.ui.updateDiceDisplay(value);
        
        if (value === 6) {
            this.gameState.setCanReleasePiece(true);
        }
        
        if (!this.gameState.hasValidMoves()) {
            this.nextTurn();
        }
    }

    handleSquareClick(position) {
        if (!this.gameState.isValidMove(position)) return;

        const currentPlayer = this.gameState.getCurrentPlayer();
        const piece = this.gameState.getSelectedPiece();

        if (piece) {
            this.board.movePiece(piece, position);
            this.gameState.updatePiecePosition(piece, position);
            this.nextTurn();
        }
    }

    nextTurn() {
        this.gameState.nextTurn();
        this.ui.updatePlayerDisplay(this.gameState.getCurrentPlayer());
        this.dice.enable();
    }
}

// Start the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Game();
});