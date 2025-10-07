import img0 from './../../flutter.png';

const desc = "Um aplicativo para android que te permite fazer anotações e marcações importantes, com facilidade de exclusão pós finalização.";
const imgs=[img0];
const lastUpdate=new Date("2025-06-20");
const languages= ["DART", "KOTLIN", "FLUTTER"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

export default {imgs, desc, dias, languages}