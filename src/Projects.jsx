import { useState, useEffect } from 'react';
import './projects.css';
import pfpCut from './assets/Repos/Pfp-cut';
import snakeJS from './assets/Repos/SnakeGameJs';
import portfoil from './assets/Repos/Portfoil';
import imgStandard from './assets/Repos/Img-Standardzation';
import musync from './assets/Repos/Musync';
import clipPath from './assets/Repos/ClipPathLogic';
import organizerPHP from './assets/Repos/OrgazinerPHP';
import brailleKbd from './assets/Repos/BrailleKeyboardRemake';
import organyz from './assets/Repos/Organyz';
import tabeladaverdade from './assets/Repos/TabelaDaVerdade';

const projects = {
  'Pfp-cut': pfpCut,
  'SnakeGameJs': snakeJS,
  'portfoil': portfoil,
  'img-standardzation' : imgStandard,
  'Musync' : musync,
  'ClipPathLogic' : clipPath,
  'OrganizerPHP' : organizerPHP, 
  'BrailleKeyboardRemaster' : brailleKbd,
  'Organyz' : organyz,
  'TabelaDaVerdade' : tabeladaverdade
};

function Project({ name, repo }) {
  const [active, setActive] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [isMostlyVertical, setIsMostlyVertical] = useState(false);

  const username = "Ntzzn-Dev";

  const [lastUpd, setLastUpd] = useState(null);
  const [desc, setDesc] = useState("");
  const [languages, setLanguages] = useState([]);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState([]);

  const toggleActive = () => {
    setActive(!active);
    setCurrentImg((_) => 0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };


  useEffect(() => {
    if (projects[repo]) {
      setImages(projects[repo].imgs);
      setPage(projects[repo].page);
      setDesc(projects[repo].desc);
      setLanguages(projects[repo].languages);
      setLastUpd(projects[repo].dias);
    }
  }, [repo]);
  useEffect(() => {
    if (images.length > 0) {
      checkImagesOrientation(images).then(setIsMostlyVertical);
    }
  }, [images]);

  return (
    <div
      className={`proj ${isMostlyVertical ? 'vertical' : 'horizontal'} ${active ? 'active' : ''}`}
      onClick={toggleActive}>
      <div className={`carousel ${isMostlyVertical ? 'vertical' : 'horizontal'}`}>
        {active && (
          <button className="prev" onClick={prevImage}>&lt;</button>
        )}
        <img src={images[currentImg]} alt={`${name} ${currentImg}`} />
        {active && (
          <button className="next" onClick={nextImage}>&gt;</button>
        )}
      </div>
      <div className={`specs ${isMostlyVertical ? 'vertical' : 'horizontal'}`}>
        <section className='info'>
          <h2>{name}</h2>
          <p className='desc'>{desc}</p>
          {languages.length > 0 && <p className='langs'>Tecnologias: {languages.join(", ")}</p>}
          <p className='date'>{lastUpd !== undefined && lastUpd !== null ? `Ultima atualização a ${lastUpd} dias` : "Carregando..."}</p>
        </section>
        <section className='link'>
        
          <a href={`https://github.com/${username}/${repo}`} target="_blank">Code</a>
          {page && (<a href={
                page !== "git"
                  ? page
                  : `https://${username}.github.io/${repo}/`
              }target="_blank" > Page </a>
          )}

        </section>
      </div>
    </div>
  )
}

function checkImagesOrientation(imageUrls) {
  let verticalCount = 0;

  return Promise.all(
    imageUrls.map(
      url =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            if (img.height > img.width) verticalCount++;
            resolve();
          };
          img.onerror = resolve;
        })
    )
  ).then(() => verticalCount > imageUrls.length / 2);
}


export default Project