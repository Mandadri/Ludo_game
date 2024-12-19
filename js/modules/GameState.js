export class GameState {
    constructor() {
        this.players = [
            { color: 'red', name: 'Player 1' },
            { color: 'green', name: 'Player 2' },
            { color: 'yellow', name: 'Player 3' },
            { color: 'blue', name: 'Player 4' }
        ];
        this.currentPlayerIndex = 0;
        this.diceValue = null;
        this.selectedPiece = null;
        this.canReleasePiece = false;
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    setDiceValue(value) {
        this.diceValue = value;
    }

    nextTurn() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        this.diceValue = null;
        this.selectedPiece = null;
        this.canReleasePiece = false;
    }

    isValidMove(position) {
        // Implement move validation logic
        return true;
    }

    hasValidMoves() {
        // Implement valid moves check
        return true;
    }

    getSelectedPiece() {
        return this.selectedPiece;
    }

    updatePiecePosition(piece, position) {
        piece.position = position;
    }
}