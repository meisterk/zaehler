export class Model {
    constructor() {
        this._zahl = 0;
    }

    hochzaehlen() {
        this._zahl++;
    }

    reset() {
        this._zahl = 0;
    }

    getZahl() {
        return this._zahl;
    }
}