import { Jogo } from "./jogo.js";
import { Perfil } from "./perfil.js";
export class Monstro {
    constructor(nome, hp, mana, prioridade, foto) {
        this._perfil = new Perfil();
        this._jogo = new Jogo();
        this._perfil.nome = nome;
        this._jogo.mana = mana;
        this._jogo.nivel = Math.floor(Math.random() * 9) + 1;
        this._jogo.forca = (this._jogo.nivel * prioridade) / 5;
        this._perfil.foto = foto;
        this._jogo.dano = this._jogo.forca + (this._jogo.forca * (this._jogo.mana / 1000));
        this._jogo.hp = hp + (hp * this._jogo.nivel / 100);
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
