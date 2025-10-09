import img0 from './../../js.png';

const desc = "Um projeto de autodesafio, criado após ter uma pequena aula de matematica discreta.\n Possui 6 tipos de operações: ~ (negação) ∧ (e) ∨ (ou) ➝ (implicância) ⟷ (equivalencia) ⊕ (ou exclusivo).\n Quando usado variaveis gera uma tabela com todas as possibilidades. \n ex: a∨b gera 4 linhas com todas as combinações de a e b entre verdadeiro ou falso. \n Se usado números, gera uma linha só na tabela, resolvendo as equações. \n ex: 1+2=3 gera um true. \n números e variáveis em letras não podem coexistir na mesma sentença";
const imgs=[img0];
const lastUpdate=new Date("2025-04-15");
const languages= ["HTML", "CSS", "JS"];
const page = "git";

const hoje = new Date();
const diffMs = Math.abs(lastUpdate - hoje);
let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))-1;

const color1 = "#ede70a";
const color2 = "#4f4d19";
const color3 = "#69460d";
const gradientecard = `linear-gradient(120deg, ${color1} 4%, #212222 28%, #212222 60%, ${color2} 80%, ${color3} 100%)`;
const colorbtn = "#ede70a";
const colorfontbtn = "#000000";

export default { colorfontbtn, colorbtn, gradientecard, page, imgs, desc, dias, languages}