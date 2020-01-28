export class View {
    constructor(presenter) {
        // Mausklicks auf Buttons
        const buttonOben = document.getElementById('buttonOben');
        buttonOben.addEventListener('click', () => {
            presenter.nachOben();
        });

        const buttonLinks = document.getElementById('buttonLinks');
        buttonLinks.addEventListener('click', () => {
            presenter.nachLinks();
        });

        const buttonRechts = document.getElementById('buttonRechts');
        buttonRechts.addEventListener('click', () => {
            presenter.nachRechts();
        });

        const buttonUnten = document.getElementById('buttonUnten');
        buttonUnten.addEventListener('click', () => {
            presenter.nachUnten();
        });

        // Tastatur: Pfeiltasten und WASD
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 38: // ↑
                case 87: // W
                    presenter.nachOben();
                    break;
                case 37: // ←
                case 65: // A
                    presenter.nachLinks();
                    break;
                case 39: // →
                case 68: // D
                    presenter.nachRechts();
                    break;
                case 40: // ↓
                case 83: // S
                    presenter.nachUnten();
                    break;
            }
        });
    }
}