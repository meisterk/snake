export class Timer {
    constructor(interval) {
        this.interval = interval;
    }

    start() {
        setInterval(function () {
            console.log('Timer meldet sich');
        }, this.interval);
    }

    stop() {

    }
}