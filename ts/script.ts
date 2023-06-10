import { Monstro } from "./monstro.js";
import { Protagonista } from "./protagonista.js";

const telaInicial = document.querySelector(".inicial") as HTMLDivElement;

const portal = document.querySelector('.fundo') as HTMLDivElement;

const start = document.querySelector('.btn-init') as HTMLButtonElement;

start.addEventListener('click', function () {
    telaInicial.classList.add('d-none');
    portal.classList.remove('d-none');
});

const protagonista = new Protagonista();

const nomeProtagonista = document.querySelector('.nome') as HTMLDivElement;
nomeProtagonista.textContent = protagonista.perfil.nome;

const fotoProta = document.querySelector('.fotoProta')  as HTMLImageElement;
fotoProta.src = `./img/${protagonista.perfil.foto}`;

const nivelProtagonista = document.querySelector('.nivel') as HTMLTableCellElement;
nivelProtagonista.textContent = `${protagonista.jogo.nivel}`;

const xpProtagonista = document.querySelector('.xp') as HTMLTableCellElement;
xpProtagonista.textContent = `${protagonista.jogo.xp}`;

const hpProtagonista = document.querySelector('.hp') as HTMLTableCellElement;
hpProtagonista.textContent = `${protagonista.jogo.hp}`;

const forcaProtagonista = document.querySelector('.forca') as HTMLTableCellElement;
forcaProtagonista.textContent = `${protagonista.jogo.forca}`;

const danoProtagonista = document.querySelector('.dano') as HTMLTableCellElement;
danoProtagonista.textContent = `${protagonista.jogo.dano}`;

const manaProtagonista = document.querySelector('.mana') as HTMLTableCellElement;
manaProtagonista.textContent = `${protagonista.jogo.mana}`;


const monstro1 = new Monstro("Goblin", 70, 10, 10, 'goblin.png');
const monstro2 = new Monstro("Orc", 100, 30, 20, 'orc.png');
const monstro3 = new Monstro("Dragão", 200, 50, 30, 'dragao.png');
const monstros = [monstro1, monstro2, monstro3];
let monstroEscolhido:Monstro;

const nomeMonstro = document.querySelector('.nomeM')  as HTMLDivElement;
const fotoMonstro = document.querySelector('.fotoM')  as HTMLImageElement;
const nivelMonstro = document.querySelector('.nivelM')  as HTMLTableCellElement;
const hpMonstro = document.querySelector('.hpM')  as HTMLTableCellElement;
const forcaMonstro = document.querySelector('.forcaM')  as HTMLTableCellElement;
const danoMonstro = document.querySelector('.danoM')  as HTMLTableCellElement;
const manaMonstro = document.querySelector('.manaM')  as HTMLTableCellElement;

window.onload = function() {
    let indiceSorteado = Math.floor(Math.random() * monstros.length);
    monstroEscolhido = monstros[indiceSorteado];
    
    nomeMonstro.textContent = monstroEscolhido.perfil.nome;
    
    fotoMonstro.src = `./img/${monstroEscolhido.perfil.foto}`;

    nivelMonstro.textContent = `${monstroEscolhido.jogo.nivel}`;
    
    hpMonstro.textContent = `${monstroEscolhido.jogo.hp}`;

    forcaMonstro.textContent = `${monstroEscolhido.jogo.forca}`;

    danoMonstro.textContent = `${monstroEscolhido.jogo.dano}`;
    
    manaMonstro.textContent = `${monstroEscolhido.jogo.mana}`;
};


let ataque:number = 0;

const btnAtq1 = document.querySelector('.btn-info') as HTMLButtonElement;

btnAtq1.addEventListener('click',function(){
    if(ataque === 0) {
        protagonista.atacar(monstroEscolhido);
        atualizarEstatisticasNaTela();
        ataque = 1;
        if(monstroEscolhido.isALive() === true) {
            setTimeout(() => {
                if (monstroEscolhido) {
                    monstroEscolhido.atacar(protagonista);
                    atualizarEstatisticasNaTela();
                    ataque = 0;
                }
            }, 3000);
            
        } else {
            const xpGanho = monstroEscolhido.jogo.nivel;
            protagonista.ganharXP(xpGanho);
            atualizarEstatisticasNaTela();
            ataque = 0;
        }
    } else {
        alert('Aguarde sua vez.')
    }
});

const btnAtq2 = document.querySelector('.btn-secondary') as HTMLButtonElement;

btnAtq2.addEventListener('click',function(){
    if(ataque === 0) {
        protagonista.usarFinisher1(monstroEscolhido);
        atualizarEstatisticasNaTela();
        ataque = 1;
        if(monstroEscolhido.isALive() === true) {
            setTimeout(() => {
                if (monstroEscolhido) {
                    monstroEscolhido.atacar(protagonista);
                    atualizarEstatisticasNaTela();
                    ataque = 0;
                }
            }, 3000);
            
        } else {
            const xpGanho = monstroEscolhido.jogo.nivel;
            protagonista.ganharXP(xpGanho);
            atualizarEstatisticasNaTela();
            ataque = 0;
        }
    } else {
        alert('Aguarde sua vez.')
    }
});

const btnAtq3 = document.querySelector('.btn-danger') as HTMLButtonElement;

btnAtq3.addEventListener('click',function(){
    if(ataque === 0) {
        protagonista.usarFinisher2(monstroEscolhido);
        atualizarEstatisticasNaTela();
        ataque = 1;
        if(monstroEscolhido.isALive() === true) {
            setTimeout(() => {
                if (monstroEscolhido) {
                    monstroEscolhido.atacar(protagonista);
                    atualizarEstatisticasNaTela();
                    ataque = 0;
                }
            }, 3000);
            
        } else {
            const xpGanho = monstroEscolhido.jogo.nivel;
            protagonista.ganharXP(xpGanho);
            atualizarEstatisticasNaTela();
            ataque = 0;
        }
    } else {
        alert('Aguarde sua vez.')
    }
});

const btnAtq4 = document.querySelector('.btn-dark') as HTMLButtonElement;

btnAtq4.addEventListener('click',function(){
    if(ataque === 0) {
        protagonista.usarFinisher3(monstroEscolhido);
        atualizarEstatisticasNaTela();
        ataque = 1;
        if(monstroEscolhido.isALive() === true) {
            setTimeout(() => {
                if (monstroEscolhido) {
                    monstroEscolhido.atacar(protagonista);
                    atualizarEstatisticasNaTela();
                    ataque = 0;
                }
            }, 3000);
            
        } else {
            const xpGanho = monstroEscolhido.jogo.nivel;
            protagonista.ganharXP(xpGanho);
            atualizarEstatisticasNaTela();
            ataque = 0;
        }
    } else {
        alert('Aguarde sua vez.')
    }
});


function atualizarEstatisticasNaTela() {
    nivelProtagonista.textContent = `${protagonista.jogo.nivel}`;
    hpProtagonista.textContent = `${protagonista.jogo.hp.toFixed(0)}`;
    forcaProtagonista.textContent =`${protagonista.jogo.forca.toFixed(0)}`
    manaProtagonista.textContent = `${protagonista.jogo.mana.toFixed(0)}`;
    xpProtagonista.textContent = `${protagonista.jogo.xp.toFixed(0)}`;
    fotoProta.src = `./img/${protagonista.perfil.foto}`;
  
    fotoMonstro.src = `./img/${monstroEscolhido.perfil.foto}`;
    forcaMonstro.textContent = `${monstroEscolhido.jogo.forca.toFixed(0)}`
    nomeMonstro.textContent = monstroEscolhido.perfil.nome;
    nivelMonstro.textContent = `${monstroEscolhido.jogo.nivel}`;
    hpMonstro.textContent = `${monstroEscolhido.jogo.hp.toFixed(0)}`;
    manaMonstro.textContent = `${monstroEscolhido.jogo.mana.toFixed(0)}`;
    danoMonstro.textContent = `${monstroEscolhido.jogo.dano.toFixed(0)}`

    if(protagonista.isALive() === false) {
        const jogo = document.querySelector('.game-over') as HTMLDivElement;
        jogo.classList.remove('d-none');
    }

    if(monstroEscolhido.isALive() === false) {
        let indiceSorteado = Math.floor(Math.random() * monstros.length);
        monstroEscolhido = monstros[indiceSorteado];
        
        nomeMonstro.textContent = monstroEscolhido.perfil.nome;
        
        fotoMonstro.src = `./img/${monstroEscolhido.perfil.foto}`;

        nivelMonstro.textContent = `${monstroEscolhido.jogo.nivel}`;
        
        hpMonstro.textContent = `${monstroEscolhido.jogo.hp}`;

        forcaMonstro.textContent = `${monstroEscolhido.jogo.forca}`;

        danoMonstro.textContent = `${monstroEscolhido.jogo.dano}`;
        
        manaMonstro.textContent = `${monstroEscolhido.jogo.mana}`;
    }
}

const reiniciar = document.querySelector('.btn-over') as HTMLButtonElement;

reiniciar.addEventListener('click',function() {
    location.reload();
});