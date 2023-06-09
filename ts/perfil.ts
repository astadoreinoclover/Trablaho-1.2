export class Perfil {
    private _nome: string = '';
    private _foto:string = '';

    get nome():string {
        return this._nome;
    }

    set nome(nome:string) {
        this._nome = nome;
    }

    get foto():string {
        return this._foto;
    }

    set foto(foto:string) {
        this._foto = foto;
    }
}