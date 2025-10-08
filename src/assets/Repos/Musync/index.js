import img0 from './main_tab.jpg';
import img1 from './main_tab_more_opt.jpg';
import img2 from './config_page.jpg';
import img3 from './download_page.jpg';
import img4 from './playlists_tab.jpg';
import img5 from './add_playlist.jpg';
import img6 from './notify_bar.jpg';

const desc = "Um aplicativo mobile com capacidade de organizar musicas locais, reproduzi-las, baixar e transferir as musicas entre plataformas.";
const imgs=[img0, img1, img2, img3, img4, img5, img6];
const lastUpdate=new Date("2025-09-14");
const languages= ["DART", "KOTLIN", "FLUTTER"];

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#24393d";
const color2 = "#03002d";
const gradientecard = `linear-gradient(120deg, #212222 60%, ${color1} 80%, ${color2} 100%)`;
const colorbtn = "#87cfdb";
const colorfontbtn = "#343336";

export default {colorbtn, colorfontbtn, imgs, desc, dias, languages,gradientecard}