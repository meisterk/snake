import { View } from './view.js';
import { Snake } from './snake.js';
import { Timer } from './timer.js';
import { Apfel } from './apfel.js';

export class Presenter {
    constructor() {
        this.view = new View(this);

        this.snake = new Snake(this.view);
        this.snake.zeichnen();

        this.apfel = new Apfel(this.view);
        this.apfel.zeichnen();

        this.timer = new Timer(this, 500);
        this.timer.start();
    }

    timerAction() {
        // Neu berechnen
        this.snake.weiter();
        if (this.snakeFrisstApfel()) {
            this.apfel.neuPositionieren();
        }

        // Neu zeichnen
        this.view.loescheAlles();
        this.apfel.zeichnen();
        this.snake.zeichnen();
    }

    snakeFrisstApfel() {
        if (this.snake.x === this.apfel.x &&
            this.snake.y === this.apfel.y) {
            return true;
        } else {
            return false;
        }
    }

    nachOben() {
        this.view.displayText('nach Oben');
        this.snake.nachOben();
    }

    nachRechts() {
        this.view.displayText('nach Rechts');
        this.snake.nachRechts();
    }

    nachUnten() {
        this.view.displayText('nach Unten');
        this.snake.nachUnten();
    }

    nachLinks() {
        this.view.displayText('nach Links');
        this.snake.nachLinks();
    }
}