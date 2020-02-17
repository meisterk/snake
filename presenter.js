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

        this.score = 0;

        this.timer = new Timer(this, 500);
        this.timer.start();
    }

    timerAction() {
        // Neu berechnen
        this.snake.weiter();
        if (this.snakeFrisstApfel()) {
            this.score++;
            this.apfel.neuPositionieren();
        }

        // Neu zeichnen
        this.view.loescheAlles();
        this.apfel.zeichnen();
        this.snake.zeichnen();
        this.view.displayText('Score: ' + this.score);
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
        this.snake.nachOben();
    }

    nachRechts() {
        this.snake.nachRechts();
    }

    nachUnten() {
        this.snake.nachUnten();
    }

    nachLinks() {
        this.snake.nachLinks();
    }
}