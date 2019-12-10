export class View {
    constructor(presenter) {
        this._getIDsFromHTML();
        this._delegateEventsToPresenter(presenter);
    }

    setOutput(text) {
        this._pAusgabe.innerText = text;
    }

    _getIDsFromHTML() {
        this._buttonHochzaehlen = document.getElementById('hochzaehlen');
        this._buttonReset = document.getElementById('reset');
        this._pAusgabe = document.getElementById('ausgabe');
    }

    _delegateEventsToPresenter(presenter) {
        this._buttonHochzaehlen.addEventListener('click', function () {
            presenter.buttonHochzaehlenClick();
        });
        this._buttonReset.addEventListener('click', function () {
            presenter.buttonResetClick();
        });
    }
}