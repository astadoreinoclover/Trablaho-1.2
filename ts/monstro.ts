import { Jogo } from "./jogo.js";
import { Perfil } from "./perfil.js";
import { Protagonista } from "./protagonista";

export class Monstro {
    private _perfil:Perfil = new Perfil();
    private _jogo:Jogo = new Jogo();

    constructor(nome: string, hp: number, mana: number, prioridade:number, foto:string) {
        this._perfil.nome = nome;
        this._jogo.mana = mana;
        this._jogo.nivel = Math.floor(Math.random() * 9)+1;
        this._jogo.forca = Math.floor((this._jogo.nivel * prioridade)/3);
        this._perfil.foto = foto;
        this._jogo.dano = Math.floor(this._jogo.forca + (this._jogo.forca * (this._jogo.mana/1000)));
        this._jogo.hp = Math.floor(hp + (hp*this._jogo.nivel/100));
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

    receberDano(dano: number) {
        this._jogo.hp -= dano;
        this._jogo.mana += Math.floor(Math.random() * this._jogo.nivel);
        console.log(`${this._perfil.nome} recebeu ${dano} de dano!`);

        const fotoM = document.querySelector('.fotoM') as HTMLImageElement;
        fotoM.classList.add('shake');

        setTimeout(() => {
            fotoM.classList.remove('shake');
        }, 1500);
        if (this._jogo.hp <= 0) {
            console.log(`${this._perfil.nome} foi derrotado!`);
        }
    }

    atacar(protagonista: Protagonista) {
        console.log(`${this._perfil.nome} atacou ${protagonista.perfil.nome}!`);
        const dano = this._jogo.dano;
        this._jogo.mana -= 5;
        protagonista.receberDano(dano);
    }

    isALive():boolean {
        return (this._jogo.hp > 0) 
    }
}