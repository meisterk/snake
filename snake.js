export class Snake {
    constructor(view) {
        this.view = view;

        this.x = 100;
        this.y = 100;
        this.direction = 'NACH_UNTEN';
    }

    weiter() {
        switch (this.direction) {
            case 'NACH_UNTEN':
                this.y += 10;
                break;
            case 'NACH_OBEN':
                this.y -= 10;
                break;
            case 'NACH_LINKS':
                this.x -= 10;
                break;
            case 'NACH_RECHTS':
                this.x += 10;
                break;
        }
    }

    nachOben() {
        this.direction = 'NACH_OBEN';
    }

    nachUnten() {
        this.direction = 'NACH_UNTEN';
    }

    nachLinks() {
        this.direction = 'NACH_LINKS';
    }

    nachRechts() {
        this.direction = 'NACH_RECHTS';
    }

    zeichnen() {
        this.view.zeichneKreis(this.x, this.y);
    }
}