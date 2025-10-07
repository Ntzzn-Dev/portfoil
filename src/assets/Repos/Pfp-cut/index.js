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

export default {page, imgs, desc, dias, languages}