export class View {
    constructor(presenter) {

        this.buttonHochzaehlen = document.getElementById('hochzaehlen');
        this.buttonReset = document.getElementById('reset');
        this.pAusgabe = document.getElementById('ausgabe');

        this.buttonHochzaehlen.addEventListener('click', function () {
            presenter.buttonHochzaehlenClick();
        });
        this.buttonReset.addEventListener('click', function () {
            presenter.buttonResetClick();
        });
    }
}