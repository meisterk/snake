import { View } from './view.js';
export class Presenter {
    constructor() {
        this.view = new View(this);
    }

    nachOben() {
        console.log('nach Oben');
    }

    nachRechts() {
        console.log('nach Rechts');
    }

    nachUnten() {
        console.log('nach Unten');
    }

    nachLinks() {
        console.log('nach Links');
    }
}