import { useState } from 'react'
import './App.css'
import * as pfpinfo from './assets/pfp';
import * as snkinfo from './assets/snk';
import Project from './Projects'

function App() {
  return (
    <>
      <h1 className='pfp-name'> Ntzzn-Dev [Jhonatan] </h1>
      <div className='projects'>
        <Project name={"Snake Game JS"} desc={snkinfo.desc} nameInGit={"SnakeGameJs"} images={snkinfo.imgs}></Project>
        <Project name={"Corte de Imagem de Perfil"} desc={pfpinfo.desc} nameInGit={"Pfp-cut"} images={pfpinfo.imgs}></Project>
      </div>
    </>
  )
}

export default App
