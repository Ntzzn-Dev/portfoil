import img0 from './../../python.png';

const desc = "Um projeto que recebe a URL de uma imagem, remove o fundo com IA, deixa a imagem quadrada adicionando pixels transparentes, corta a imagem tirando pixels transparentes desnecessário para que apenas o conteúdo caiba, adiciona margens definidas manualmente e disponibiliza para download.";
const imgs=[img0];
const page="https://huggingface.co/spaces/Ntzzn/img-standardzation";
const lastUpdate=new Date("2025-09-14");
const languages= ["PYTHON"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#173439";
const color2 = "#bfba0e";
const gradientecard = `linear-gradient(120deg, #212222 60%, ${color1} 80%, ${color2} 100%)`;
const colorbtn = "#0f464f";
const colorfontbtn = "#ffffff";

export default { colorbtn, colorfontbtn, gradientecard, page, imgs, desc, dias, languages}