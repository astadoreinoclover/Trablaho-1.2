import { Jogo } from "./jogo.js";
import { Perfil } from "./perfil.js";
import { Ataque } from "./ataque.js";
export class Protagonista {
    constructor() {
        this._perfil = new Perfil();
        this._jogo = new Jogo();
        this._finish = new Ataque('Corte Rapido', 30);
        this._finish2 = new Ataque('Erga-se', 50);
        this._finish3 = new Ataque('Area do Monarca', 90);
        this._perfil.nome = 'Sung Jin Woo';
        this._perfil.foto = 'player1.png';
        this._jogo.nivel = 1;
        this._jogo.hp = 100;
        this._jogo.mana = 100;
        this._jogo.xp = 0;
        this._jogo.forca = Math.floor(20 + this._jogo.nivel);
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
    atacar(monstro) {
        console.log(`${this._perfil.nome} atacou ${monstro.perfil.nome}!`);
        this._jogo.hp += this._jogo.nivel;
        const dano = this._jogo.dano;
        monstro.receberDano(dano);
    }
    receberDano(dano) {
        this._jogo.hp -= dano;
        this._jogo.mana += Math.floor(Math.random() * 50);
        console.log(`${this._perfil.nome} recebeu ${dano} de dano!`);
        const fotoProta = document.querySelector('.fotoProta');
        fotoProta.classList.add('shake');
        setTimeout(() => {
            fotoProta.classList.remove('shake');
        }, 1500);
        if (this._jogo.hp <= 0) {
            console.log(`${this._perfil.nome} foi derrotado!`);
        }
        if (this._jogo.mana >= 100) {
            this._jogo.mana = 100;
        }
    }
    ganharXP(xp) {
        this._jogo.xp += xp;
        console.log(`${this._perfil.nome} ganhou ${xp} de XP!`);
        const xpNecessario = this.getXPNecessarioParaProximoNivel();
        if (this._jogo.xp >= xpNecessario) {
            this.subirDeNivel();
        }
    }
    getXPNecessarioParaProximoNivel() {
        return this._jogo.nivel * 10;
    }
    subirDeNivel() {
        this._jogo.nivel++;
        this._jogo.hp += 50;
        console.log(`${this._perfil.nome} subiu para o nível ${this._jogo.nivel}!`);
        if (this._jogo.nivel >= 2) {
            this._perfil.foto = 'player2.png';
        }
        else if (this._jogo.nivel >= 3) {
            this._perfil.foto = 'playere3.png';
        }
    }
    isALive() {
        return (this._jogo.hp > 0);
    }
    usarFinisher1(monstro) {
        if (this._jogo.mana >= 3) {
            console.log(`${this._perfil.nome} usou ${this._finish.nome}!`);
            const dano = this._finish.dano;
            monstro.receberDano(dano);
            this._jogo.mana -= 30;
        }
    }
    usarFinisher2(monstro) {
        if (this._jogo.mana >= 60) {
            console.log(`${this._perfil.nome} usou ${this._finish2.nome}!`);
            const dano = this._finish2.dano;
            monstro.receberDano(dano);
            this._jogo.mana -= 60;
        }
    }
    usarFinisher3(monstro) {
        if (this._jogo.mana >= 90) {
            console.log(`${this._perfil.nome} usou ${this._finish3.nome}!`);
            const dano = this._finish3.dano;
            monstro.receberDano(dano);
            this._jogo.mana -= 90;
        }
    }
}
