import { Jogo } from "./jogo.js";
import { Perfil } from "./perfil.js";
export class Protagonista {
    constructor() {
        this._perfil = new Perfil();
        this._jogo = new Jogo();
        this._perfil.nome = 'Sung Jin Woo';
        this._perfil.foto = 'player1.png';
        this._jogo.nivel = 1;
        this._jogo.hp = 100;
        this._jogo.mana = 100;
        this._jogo.xp = 0;
        this._jogo.forca = 20;
        this._jogo.dano = Math.floor(this._jogo.forca + (this._jogo.forca * this._jogo.nivel / 100));
    }
    get perfil() {
        return this._perfil;
    }
    set perfil(perfil) {
        this._perfil = perfil;
    }
    get jogo() {
        return this._jogo;
    }
    set jogo(jogo) {
        this._jogo = jogo;
    }
}
