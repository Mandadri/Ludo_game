export class UIManager {
    constructor() {
        this.playerNameElement = document.getElementById('playerName');
        this.diceElement = document.getElementById('dice');
    }

    updatePlayerDisplay(player) {
        this.playerNameElement.textContent = player.name;
        this.playerNameElement.style.color = player.color;
    }

    updateDiceDisplay(value) {
        this.diceElement.textContent = value;
    }

    showMessage(message) {
        // Implement message display logic
    }
}