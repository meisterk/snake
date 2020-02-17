import { View } from './view.js';
import { Snake } from './snake.js';
import { Timer } from './timer.js';

export class Presenter {
    constructor() {
        this.view = new View(this);
        this.snake = new Snake(this.view);
        this.snake.zeichnen();
        this.timer = new Timer(this, 500);
        this.timer.start();
    }

    timerAction() {
        this.snake.weiter();
        this.view.loescheAlles();
        this.snake.zeichnen();
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