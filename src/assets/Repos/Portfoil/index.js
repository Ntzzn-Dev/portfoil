import img0 from './../../js.png';

const desc = "Meu portfólio pessoal, para mostrar meus projetos do GitHub, e também servindo como aprendizado para o uso do React e integração com algumas APIs. Um cartão de entrada da minha mente.";
const imgs= [img0];
const page="git";
const lastUpdate=new Date("2025-10-07");
const languages= ["HTML", "CSS", "JS",];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#ff2727";
const color2 = "#5c3312";
const color3 = "#690d0d";
const gradientecard = `linear-gradient(120deg, ${color1} 4%, #212222 28%, #212222 60%, ${color2} 80%, ${color3} 100%)`;
const colorbtn = "#ed0a0a";
const colorfontbtn = "#000000";

export default {gradientecard, colorbtn, colorfontbtn, page, imgs, desc, dias, languages}