export class Snake {
    constructor(view) {
        this.view = view;

        this.schlange = [
            { x: 105, y: 105 },
            { x: 105, y: 95 },
            { x: 105, y: 85 },
            { x: 105, y: 75 },
            { x: 105, y: 65 }
        ];

        this.direction = 'NACH_UNTEN';
    }

    weiter() {
        // Koerper bewegen
        for (let i = this.schlange.length - 1; i >= 1; i--) {
            this.schlange[i].x = this.schlange[i - 1].x;
            this.schlange[i].y = this.schlange[i - 1].y;
        }

        // Kopf bewegen
        const kopf = this.schlange[0];
        switch (this.direction) {
            case 'NACH_UNTEN':
                kopf.y += 10;
                if (kopf.y >= 400) {
                    kopf.y = 5;
                }
                break;
            case 'NACH_OBEN':
                kopf.y -= 10;
                if (kopf.y <= 0) {
                    kopf.y = 395;
                }
                break;
            case 'NACH_LINKS':
                kopf.x -= 10;
                if (kopf.x <= 0) {
                    kopf.x = 195;
                }
                break;
            case 'NACH_RECHTS':
                kopf.x += 10;
                if (kopf.x >= 200) {
                    kopf.x = 5;
                }
                break;
        }


    }

    verlaengern() {
        const kopf = this.schlange[0];
        this.schlange.push({ x: kopf.x, y: kopf.y });
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
        this.schlange.forEach(element => {
            this.view.zeichneKreis(element.x, element.y, 'black');
        });
    }
}