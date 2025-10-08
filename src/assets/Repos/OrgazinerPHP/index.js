import img0 from './../../php.png';

const desc = "Um projeto simples de gerenciamento de tarefas desenvolvido em PHP, MySQL e Bootstrap, que permite adicionar, editar, excluir e acompanhar o estado das tarefas de forma prática e visual.";
const imgs=[img0];
const lastUpdate=new Date("2025-08-28");
const languages= ["PHP"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#301c3f";
const color2 = "#191851 ";
const gradientecard = `linear-gradient(120deg, #212222 60%, ${color1} 80%, ${color2} 100%)`;
const colorbtn = "#8b0aed";
const colorfontbtn = "#ffffff";

export default {colorbtn, colorfontbtn, gradientecard, imgs, desc, dias, languages}