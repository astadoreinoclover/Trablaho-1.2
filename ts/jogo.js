export class Jogo {
    constructor() {
        this._hp = 0;
        this._mana = 0;
        this._xp = 0;
        this._nivel = 0;
        this._forca = 0;
        this._dano = 0;
    }
    get nivel() {
        return this._nivel;
    }
    set nivel(nivel) {
        this._nivel = nivel;
    }
    get dano() {
        return this._dano;
    }
    set dano(dano) {
        this._dano = dano;
    }
    get hp() {
        return this._hp;
    }
    set hp(hp) {
        this._hp = hp;
    }
    get forca() {
        return this._forca;
    }
    set forca(forca) {
        this._forca = forca;
    }
    get mana() {
        return this._mana;
    }
    set mana(mana) {
        this._mana = mana;
    }
    get xp() {
        return this._xp;
    }
    set xp(xp) {
        this._xp = xp;
    }
}
