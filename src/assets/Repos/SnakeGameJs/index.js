import img0 from './start.png';
import img1 from './size25.png';
import img2 from './size75.png';
import img3 from './gameover.png';

const desc = "Este é o clássico Jogo da Cobra, desenvolvido para ser jogado diretamente no navegador. O objetivo do jogo é controlar a cobra, coletando alimentos e evitando colisões com as paredes ou com o próprio corpo. A cada pedaço de comida consumido, a cobra cresce, tornando o desafio cada vez mais complexo.";
const imgs= [img0, img1, img2, img3];
const page="git";
const lastUpdate=new Date("2025-10-02");
const languages= ["HTML", "CSS", "JS"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
const dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

export default {page, imgs, desc, dias, languages}