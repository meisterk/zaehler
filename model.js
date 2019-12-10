export class Model {
    constructor() {
        this._zahl = 0;
    }

    hochzaehlen() {
        this._zahl++;
    }

    vervielfachen(faktor) {
        this._zahl = this._zahl * faktor;
    }

    reset() {
        this._zahl = 0;
    }

    getZahl() {
        return this._zahl;
    }
}