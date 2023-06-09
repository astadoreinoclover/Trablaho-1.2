export class Jogo {
    private _hp: number = 0;
    private _mana: number = 0;
    private _xp: number = 0;
    private _nivel: number = 0;
    private _forca: number = 0;
    private _dano:number = 0;

    get nivel():number {
        return this._nivel;
    }

    set nivel(nivel:number) {
        this._nivel = nivel;
    }

    get dano():number {
        return this._dano;
    }

    set dano(dano:number) {
        this._dano = dano;
    }

    get hp():number {
        return this._hp;
    }

    set hp(hp:number) {
        this._hp = hp;
    }

    get forca(): number {
        return this._forca;
    }

    set forca(forca: number) {
        this._forca = forca;
    }

    get mana(): number {
        return this._mana;
    }

    set mana(mana: number) {
        this._mana = mana;
    }

    get xp(): number {
        return this._xp;
    }

    set xp(xp: number) {
        this._xp = xp;
    }
}