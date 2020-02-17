export class Snake {
    constructor(view) {
        this.view = view;

        this.x = 105;
        this.y = 105;
        this.direction = 'NACH_UNTEN';
    }

    weiter() {
        switch (this.direction) {
            case 'NACH_UNTEN':
                this.y += 10;
                if (this.y >= 400) {
                    this.y = 5;
                }
                break;
            case 'NACH_OBEN':
                this.y -= 10;
                if (this.y <= 0) {
                    this.y = 395;
                }
                break;
            case 'NACH_LINKS':
                this.x -= 10;
                if (this.x <= 0) {
                    this.x = 195;
                }
                break;
            case 'NACH_RECHTS':
                this.x += 10;
                if (this.x >= 200) {
                    this.x = 5;
                }
                break;
        }
    }

    nachOben() {
        if (this.direction !== 'NACH_UNTEN') {
            this.direction = 'NACH_OBEN';
        }
    }

    nachUnten() {
        if (this.direction !== 'NACH_OBEN') {
            this.direction = 'NACH_UNTEN';
        }
    }

    nachLinks() {
        if (this.direction !== 'NACH_RECHTS') {
            this.direction = 'NACH_LINKS';
        }
    }

    nachRechts() {
        if (this.direction !== 'NACH_LINKS') {
            this.direction = 'NACH_RECHTS';
        }
    }

    zeichnen() {
        this.view.zeichneKreis(this.x, this.y, 'black');
    }
}