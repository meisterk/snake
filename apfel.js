export class Apfel {
    constructor(view) {
        this.view = view;
    }

    zeichnen() {
        this.view.zeichneKreis(this.x, this.y, 'red');
    }
}