import { Jogo } from "./jogo.js";
import { Perfil } from "./perfil.js";

export class Monstro {
    private _perfil:Perfil = new Perfil();
    private _jogo:Jogo = new Jogo();

    constructor(nome: string, hp: number, mana: number, prioridade:number, foto:string) {
        this._perfil.nome = nome;
        this._jogo.mana = mana;
        this._jogo.nivel = Math.floor(Math.random() * 9)+1;
        this._jogo.forca = (this._jogo.nivel * prioridade)/5;
        this._perfil.foto = foto;
        this._jogo.dano = this._jogo.forca + (this._jogo.forca * (this._jogo.mana/1000));
        this._jogo.hp = hp + (hp*this._jogo.nivel/100);
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