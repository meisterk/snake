export class Timer {
    constructor(presenter, interval) {
        this.presenter = presenter;
        this.interval = interval;
        this.id = -1;
    }

    start() {
        if (this.id === -1) {
            this.id = setInterval(() => {
                this.presenter.timerAction();
            }, this.interval);
        }
    }

    stop() {
        clearInterval(this.id);
        this.id = -1;
    }
}