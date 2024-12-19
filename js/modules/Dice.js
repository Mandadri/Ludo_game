export class Dice {
    constructor() {
        this.element = document.getElementById('dice');
        this.button = document.getElementById('rollButton');
        this.rollCallback = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.button.addEventListener('click', () => this.roll());
    }

    roll() {
        if (this.button.disabled) return;

        this.button.disabled = true;
        this.element.classList.add('rolling');

        setTimeout(() => {
            const value = Math.floor(Math.random() * 6) + 1;
            this.element.textContent = value;
            this.element.classList.remove('rolling');

            if (this.rollCallback) {
                this.rollCallback(value);
            }
        }, 600);
    }

    enable() {
        this.button.disabled = false;
    }

    disable() {
        this.button.disabled = true;
    }

    onRoll(callback) {
        this.rollCallback = callback;
    }
}