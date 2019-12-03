import { Model } from "./model.js";
import { View } from "./view.js";

export class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View(this);
    }

    buttonHochzaehlenClick() {
        console.log("hochzaehlen");
    }

    buttonResetClick() {
        console.log("reset");
    }
}