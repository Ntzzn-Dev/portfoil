import img0 from './start.png';
import img1 from './size25.png';
import img2 from './size75.png';
import img3 from './gameover.png';

const desc = "Este é o clássico Jogo da Cobra, desenvolvido para ser jogado diretamente no navegador. O objetivo do jogo é controlar a cobra, coletando alimentos e evitando colisões com as paredes ou com o próprio corpo. A cada pedaço de comida consumido, a cobra cresce, tornando o desafio cada vez mais complexo.";
const imgs= [img0, img1, img2, img3];
const page="git";
const linkDownload="https://github.com/Ntzzn-Dev/SnakeGameJs/releases/download/2.2.0/JSnakeGame.Setup.2.2.0.exe";
const lastUpdate=new Date("2025-10-02");
const languages= ["HTML", "CSS", "JS"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
const dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

const color1 = "#ede70a";
const color2 = "#4f4d19";
const color3 = "#69460d";
const gradientecard = `linear-gradient(120deg, ${color1} 4%, #212222 28%, #212222 60%, ${color2} 80%, ${color3} 100%)`;
const colorbtn = "#ede70a";
const colorfontbtn = "#000000";


export default { colorbtn, colorfontbtn, linkDownload, gradientecard, page, imgs, desc, dias, languages}