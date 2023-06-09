import { Jogo } from "./jogo.js";
import { Perfil } from "./perfil.js";

export class Protagonista {
    private _perfil:Perfil = new Perfil();
    private _jogo:Jogo = new Jogo();

    constructor() {
        this._perfil.nome = 'Sung Jin Woo';
        this._perfil.foto = 'player1.png';
        this._jogo.nivel = 1;
        this._jogo.hp = 100;
        this._jogo.mana = 100;
        this._jogo.xp = 0;
        this._jogo.forca = 20;
        this._jogo.dano = Math.floor(this._jogo.forca + (this._jogo.forca * this._jogo.nivel / 100));
    }

    get perfil():Perfil {
        return this._perfil;
    }

    set perfil(perfil:Perfil) {
        this._perfil = perfil;
    }

    get jogo():Jogo {
        return this._jogo;
    }

    set jogo(jogo:Jogo) {
        this._jogo = jogo;
    }
}