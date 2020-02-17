import { View } from './view.js';
import { Snake } from './snake.js';

export class Presenter {
    constructor() {
        this.view = new View(this);
        this.snake = new Snake(this.view);
        this.snake.zeichnen();
    }

    nachOben() {
        this.view.displayText('nach Oben');
    }

    nachRechts() {
        this.view.displayText('nach Rechts');
    }

    nachUnten() {
        this.view.displayText('nach Unten');
    }

    nachLinks() {
        this.view.displayText('nach Links');
    }
}