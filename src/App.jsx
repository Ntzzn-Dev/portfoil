import './App.css'
import Project from './Projects'

function App() {
  return (
    <>
      <h1 className='pfp-name'> Ntzzn-Dev [Jhonatan] </h1>
      <div className='projects'>
        <Project name={"Snake Game JS"} repo={"SnakeGameJs"}></Project>
        <Project name={"Corte de Imagem de Perfil"} repo={"Pfp-cut"}></Project>
        <Project name={"Portfólio"} repo={"portfoil"}></Project>
        <Project name={"Padronização de imagens"} repo={"img-standardzation"}></Project>
        <Project name={"Musync"} repo={"Musync"}></Project>
        <Project name={"Clip de DIV personalizavel"} repo={"ClipPathLogic"}></Project>
        <Project name={"Organizador"} repo={"OrganizerPHP"}></Project>
        <Project name={"Braille Keyboard Adapter"} repo={"BrailleKeyboardRemaster"}></Project>
        <Project name={"Organyz"} repo={"Organyz"}></Project>
        <Project name={"Tabela da Verdade"} repo={"TabelaDaVerdade"}></Project>
      </div>
    </>
  )
}

export default App
