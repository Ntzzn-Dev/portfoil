import img0 from './../../flutter.png';

const desc = "Um aplicativo para android que te permite fazer anotações e marcações importantes, com facilidade de exclusão pós finalização.";
const imgs=[img0];
const lastUpdate=new Date("2025-06-20");
const languages= ["DART", "KOTLIN", "FLUTTER"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#87cfdb";
const color2 = "#24393d";
const color3 = "#03002d";
const gradientecard = `linear-gradient(120deg, ${color1} 4%, #212222 28%, #212222 60%, ${color2} 80%, ${color3} 100%)`;
const colorbtn = "#87cfdb";
const colorfontbtn = "#343336";

export default { colorbtn, colorfontbtn, gradientecard, imgs, desc, dias, languages}