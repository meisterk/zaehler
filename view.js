export class View {
    constructor(presenter) {
        this._getIDsFromHTML();
        this._delegateEventsToPresenter(presenter);
    }

    setOutput(text) {
        this._pAusgabe.innerText = text;
    }

    getInputFaktor() {
        return this._inputFaktor.value;
    }

    _getIDsFromHTML() {
        this._buttonHochzaehlen = document.getElementById('hochzaehlen');
        this._buttonReset = document.getElementById('reset');
        this._pAusgabe = document.getElementById('ausgabe');
        this._inputFaktor = document.getElementById('faktor');
        this._buttonVervielfachen = document.getElementById('vervielfachen');
    }

    _delegateEventsToPresenter(presenter) {
        this._buttonHochzaehlen.addEventListener('click', function () {
            presenter.buttonHochzaehlenClick();
        });
        this._buttonReset.addEventListener('click', function () {
            presenter.buttonResetClick();
        });
        this._buttonVervielfachen.addEventListener('click', function () {
            presenter.buttonVervielfachenClick();
        });
    }
}