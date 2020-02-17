export class Apfel {
    constructor(view) {
        this.view = view;
        this.x = Math.random() * 200;
        this.y = Math.random() * 400;
    }

    zeichnen() {
        this.view.zeichneKreis(this.x, this.y, 'red');
    }
}