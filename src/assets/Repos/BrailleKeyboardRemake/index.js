import img0 from './../../cpp.png';

const desc = "Um remake do projeto em python. Esse é feito em C++ com mais features. Transforma seu teclado convencional em um teclado em braille. Possui os prefixos para letras maiusculas e numerais.";
const imgs=[img0];
const lastUpdate=new Date("2025-04-25");
const languages= ["C++"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const fontTitle= "#030012";
const fontDesc = "#1e1c17";
const fontLang = "#1e1f23";
const fontDate= "#303037";
const fonts = {fontTitle, fontDesc, fontLang, fontDate};

export default {fonts, imgs, desc, dias, languages}