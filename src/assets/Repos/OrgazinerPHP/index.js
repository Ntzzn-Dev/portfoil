import img0 from './../../php.png';

const desc = "Um projeto simples de gerenciamento de tarefas desenvolvido em PHP, MySQL e Bootstrap, que permite adicionar, editar, excluir e acompanhar o estado das tarefas de forma prática e visual.";
const imgs=[img0];
const lastUpdate=new Date("2025-08-28");
const languages= ["PHP"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

export default {imgs, desc, dias, languages}