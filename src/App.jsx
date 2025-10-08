import './App.css'
import Project from './Projects'

function App() {
  return (
    <>
      <h1 className='pfp-name'> Ntzzn-Dev [Jhonatan] </h1>
      <div className='projects'>
        <Project name={"Snake Game JS"} repo={"SnakeGameJs"}/>
        <Project name={"Corte de Imagem de Perfil"} repo={"Pfp-cut"}/>
        <Project name={"Portfólio"} repo={"portfoil"}/>
        <Project name={"Padronização de imagens"} repo={"img-standardzation"}/>
        <Project name={"Musync"} repo={"Musync"}/>
        <Project name={"Clip de DIV personalizavel"} repo={"ClipPathLogic"}/>
        <Project name={"Organizador"} repo={"OrganizerPHP"}/>
        <Project name={"Braille Keyboard Adapter"} repo={"BrailleKeyboardRemaster"}/>
        <Project name={"Organyz"} repo={"Organyz"}/>
        <Project name={"Tabela da Verdade"} repo={"TabelaDaVerdade"}/>
      </div>
    </>
  )
}

export default App
