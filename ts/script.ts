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
window.onload = function() {
    let indiceSorteado = Math.floor(Math.random() * monstros.length);
    monstroEscolhido = monstros[indiceSorteado];
    const nomeMonstro = document.querySelector('.nomeM')  as HTMLDivElement;
    nomeMonstro.textContent = monstroEscolhido.perfil.nome;

    const fotoMonstro = document.querySelector('.fotoM')  as HTMLImageElement;
    fotoMonstro.src = `./img/${monstroEscolhido.perfil.foto}`;
};

