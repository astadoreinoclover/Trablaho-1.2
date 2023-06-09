export class Perfil {
    constructor() {
        this._nome = '';
        this._foto = '';
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get foto() {
        return this._foto;
    }
    set foto(foto) {
        this._foto = foto;
    }
}
