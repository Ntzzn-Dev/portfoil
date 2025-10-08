import img0 from './../../js.png';

const desc = "Meu portfólio pessoal, para mostrar meus projetos do GitHub, e também servindo como aprendizado para o uso do React e integração com algumas APIs. Um cartão de entrada da minha mente.";
const imgs= [img0];
const page="git";
const lastUpdate=new Date("2025-10-07");
const languages= ["HTML", "CSS", "JS",];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

export default { page, imgs, desc, dias, languages}