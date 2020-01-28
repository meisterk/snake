import { View } from './view.js';
export class Presenter {
    constructor() {
        this.view = new View(this);
    }

    nachOben() {
        this.view.displayText('nach Oben');
        this.view.zeichneKreis(50, 50);
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