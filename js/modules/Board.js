export class Board {
    constructor() {
        this.squares = [];
        this.pieces = [];
        this.clickCallback = null;
    }

    createBoard() {
        const track = document.getElementById('track');
        
        // Create squares for the main track
        for (let i = 0; i < 52; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.dataset.position = i;
            square.addEventListener('click', () => this.handleSquareClick(i));
            track.appendChild(square);
            this.squares.push(square);
        }

        this.createHomeBases();
    }

    createHomeBases() {
        const colors = ['red', 'green', 'yellow', 'blue'];
        colors.forEach((color, playerIndex) => {
            for (let i = 0; i < 4; i++) {
                const piece = this.createPiece(color, i, playerIndex);
                this.pieces.push(piece);
            }
        });
    }

    createPiece(color, index, playerIndex) {
        const piece = document.createElement('div');
        piece.className = 'piece';
        piece.dataset.color = color;
        piece.dataset.index = index;
        
        const homeBase = document.querySelector(`.${color}-base`);
        homeBase.appendChild(piece);

        piece.addEventListener('click', () => this.handlePieceClick(piece));
        
        return {
            element: piece,
            color: color,
            position: -1,
            isHome: true
        };
    }

    movePiece(piece, position) {
        const square = this.squares[position];
        if (!square) return;

        piece.isHome = false;
        piece.position = position;
        
        const rect = square.getBoundingClientRect();
        piece.element.style.left = `${rect.left}px`;
        piece.element.style.top = `${rect.top}px`;
    }

    handleSquareClick(position) {
        if (this.clickCallback) {
            this.clickCallback(position);
        }
    }

    handlePieceClick(piece) {
        // Implement piece selection logic
    }

    onSquareClick(callback) {
        this.clickCallback = callback;
    }
}