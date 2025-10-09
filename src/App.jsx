import './App.css'
import Project from './Components/Projects'
import ProjectsHolder from './Components/ProjectsHolder'

function App() {
  return (
    <>
      <h1 className='pfp-name'> Ntzzn-Dev [Jhonatan] </h1>
      <ProjectsHolder>
        <Project name={"Snake Game JS"} repo={"SnakeGameJs"} tec={["HTML", "JS", "JAVASCRIPT", "CSS"]}/>
        <Project name={"Corte de Imagem de Perfil"} repo={"Pfp-cut"} tec={["HTML", "JS", "JAVASCRIPT", "CSS"]}/>
        <Project name={"Portfólio"} repo={"portfoil"} tec={["HTML", "JS", "JAVASCRIPT", "CSS", "REACT", "TAILWIND"]}/>
        <Project name={"Padronização de imagens"} repo={"img-standardzation"} tec={["PYTHON"]}/>
        <Project name={"Musync"} repo={"Musync"} tec={["DART", "FLUTTER"]}/>
        <Project name={"Clip de DIV personalizavel"} repo={"ClipPathLogic"} tec={["HTML", "JS", "JAVASCRIPT", "CSS"]}/>
        <Project name={"Organizador"} repo={"OrganizerPHP"} tec={["PHP"]}/>
        <Project name={"Braille Keyboard Adapter"} repo={"BrailleKeyboardRemaster"} tec={["C++", "CPP"]}/>
        <Project name={"Organyz"} repo={"Organyz"} tec={["DART", "FLUTTER"]}/>
        <Project name={"Tabela da Verdade"} repo={"TabelaDaVerdade"} tec={["HTML", "JS", "JAVASCRIPT", "CSS"]}/>
      </ProjectsHolder>
    </>
  )
}

export default App
