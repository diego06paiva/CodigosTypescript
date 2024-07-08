"use strict";
class Banco {
    constructor() {
        this.cofreqtd = 1000;
    }
    debitarcofre(quantidade) {
        if (this.cofreqtd >= quantidade) {
            this.cofreqtd -= quantidade;
            return this.cofreqtd;
        }
        else {
            return `Não temos esse valor`;
        }
    }
}
