import { useState } from 'react'
import './App.css'
import * as pfpinfo from './assets/pfp';
import * as snkinfo from './assets/snk';
import Project from './Projects'
import GitHubRepos from './Git';

function App() {
  return (
    <>
      <h1 className='pfp-name'> Ntzzn-Dev [Jhonatan] </h1>
      <GitHubRepos username={"Ntzzn-Dev"}></GitHubRepos>
      <div className='projects'>
        <Project name={"Snake Game JS"} repo={"SnakeGameJs"}></Project>
        <Project name={"Corte de Imagem de Perfil"} repo={"Pfp-cut"}></Project>
        <Project name={"Musync"} repo={"Musync"}></Project>
      </div>
    </>
  )
}

export default App
