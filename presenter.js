import { View } from './view.js';
import { Snake } from './snake.js';
import { Timer } from './timer.js';

export class Presenter {
    constructor() {
        this.view = new View(this);
        this.snake = new Snake(this.view);
        this.snake.zeichnen();
        this.timer = new Timer(this, 500);
    }

    timerAction() {
        console.log('TimerAction');
    }

    nachOben() {
        this.view.displayText('nach Oben');
        this.timer.start();
    }

    nachRechts() {
        this.view.displayText('nach Rechts');
    }

    nachUnten() {
        this.view.displayText('nach Unten');
        this.timer.stop();
    }

    nachLinks() {
        this.view.displayText('nach Links');
    }
}