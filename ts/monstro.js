import { Jogo } from "./jogo.js";
import { Perfil } from "./perfil.js";
export class Monstro {
    constructor(nome, hp, mana, prioridade, foto) {
        this._perfil = new Perfil();
        this._jogo = new Jogo();
        this._perfil.nome = nome;
        this._jogo.mana = mana;
        this._jogo.nivel = Math.floor(Math.random() * 9) + 1;
        this._jogo.forca = Math.floor((this._jogo.nivel * prioridade) / 3);
        this._perfil.foto = foto;
        this._jogo.dano = Math.floor(this._jogo.forca + (this._jogo.forca * (this._jogo.mana / 1000)));
        this._jogo.hp = Math.floor(hp + (hp * this._jogo.nivel / 100));
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
    receberDano(dano) {
        this._jogo.hp -= dano;
        this._jogo.mana += Math.floor(Math.random() * this._jogo.nivel);
        console.log(`${this._perfil.nome} recebeu ${dano} de dano!`);
        const fotoM = document.querySelector('.fotoM');
        fotoM.classList.add('shake');
        setTimeout(() => {
            fotoM.classList.remove('shake');
        }, 1500);
        if (this._jogo.hp <= 0) {
            console.log(`${this._perfil.nome} foi derrotado!`);
        }
    }
    atacar(protagonista) {
        console.log(`${this._perfil.nome} atacou ${protagonista.perfil.nome}!`);
        const dano = this._jogo.dano;
        this._jogo.mana -= 5;
        protagonista.receberDano(dano);
    }
    isALive() {
        return (this._jogo.hp > 0);
    }
}
