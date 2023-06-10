export class Ataque {
    constructor(nome, dano) {
        this._dano = dano;
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get dano() {
        return this._dano;
    }
    set dano(dano) {
        this._dano = dano;
    }
}
