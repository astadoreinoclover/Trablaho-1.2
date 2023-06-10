export class Ataque {
    private _nome: string ;
    private _dano: number ;

    constructor(nome:string,dano:number) {
        this._dano = dano;
        this._nome = nome;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get dano(): number {
        return this._dano;
    }

    set dano(dano: number) {
        this._dano = dano;
    }
}