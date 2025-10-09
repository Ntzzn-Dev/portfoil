import img0 from './../../cpp.png';

const desc = "Um remake do projeto em python. Esse é feito em C++ com mais features. Transforma seu teclado convencional em um teclado em braille. Possui os prefixos para letras maiusculas e numerais.";
const imgs=[img0];
const lastUpdate=new Date("2025-04-25");
const languages= ["C++"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#19334f";
const color2 = "#120d69";
const gradientecard = `linear-gradient(120deg, #212222 60%, ${color1} 80%, ${color2} 100%)`;
const colorbtn = "#1b0aed";
const colorfontbtn = "#ffffff";

export default {gradientecard, colorbtn, colorfontbtn, imgs, desc, dias, languages}