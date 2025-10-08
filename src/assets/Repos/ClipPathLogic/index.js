import img0 from './standard.png';
import img1 from './topAC.png';
import img2 from './bottomTopLeftABD.png';
import img3 from './differentRadius.png';

const desc = "Projeto para gerar divs estilizadas com bordas arredondadas e entalhes personalizados, utilizando clip-path com curvas Bézier cúbicas. O código em JavaScript constrói dinamicamente o path em SVG para criar formas únicas nas laterais, topo ou base da div, permitindo efeitos visuais diferenciados sem depender de imagens externas.";
const page = "git";
const imgs=[img0, img1, img2, img3];
const lastUpdate=new Date("2025-09-30");
const languages= ["HTML", "CSS", "JS"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#4f4d19";
const color2 = "#69460d";
const gradientecard = `linear-gradient(120deg, #212222 60%, ${color1} 80%, ${color2} 100%)`;
const colorbtn = "#ede70a";
const colorfontbtn = "#000000";

export default { colorfontbtn, colorbtn, gradientecard, page, imgs, desc, dias, languages}