import img0 from './index.png';
import img1 from './PfpCutImg.png';
import img2 from './PfpOtherImg.png';

const desc = "Este projeto é uma aplicação web simples que permite ao usuário carregar imagens do computador, realizar o corte personalizado em um canvas e exportar a foto resultante em formato PNG.";
const imgs= [img0, img1, img2];
const page="git";
const lastUpdate=new Date("2025-10-03");
const languages= ["HTML", "CSS", "JS"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
const dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24)) - 1;

const color1 = "#ede70a";
const color2 = "#4f4d19";
const color3 = "#69460d";
const gradientecard = `linear-gradient(120deg, ${color1} 4%, #212222 28%, #212222 60%, ${color2} 80%, ${color3} 100%)`;
const colorbtn = "#ede70a";
const colorfontbtn = "#000000";

export default { colorbtn, colorfontbtn, gradientecard, page, imgs, desc, dias, languages}