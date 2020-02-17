export class Snake {
    constructor(view) {
        this.x = 100;
        this.y = 100;
        this.view = view;
    }

    zeichnen() {
        this.view.zeichneKreis(this.x, this.y);
    }
}