export class Apfel {
    constructor(view) {
        this.view = view;
        this.neuPositionieren();
    }

    neuPositionieren() {
        this.x = Math.floor(Math.random() * 20) * 10 + 5;
        this.y = Math.floor(Math.random() * 40) * 10 + 5;
    }

    zeichnen() {
        this.view.zeichneKreis(this.x, this.y, 'red');
    }
}