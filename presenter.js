import { Model } from "./model.js";
import { View } from "./view.js";

export class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View(this);
    }

    buttonHochzaehlenClick() {
        this.model.hochzaehlen();
        this._updateNumber();
    }

    buttonResetClick() {
        this.model.reset();
        this._updateNumber();
    }

    _updateNumber() {
        const count = this.model.getZahl();
        this.view.setOutput('Zahl: ' + count);
    }
}