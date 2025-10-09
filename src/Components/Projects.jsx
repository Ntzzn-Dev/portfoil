import { useState, useEffect } from 'react';
import './projects.css';
import pfpCut from '../assets/Repos/Pfp-cut';
import snakeJS from '../assets/Repos/SnakeGameJs';
import portfoil from '../assets/Repos/Portfoil';
import imgStandard from '../assets/Repos/Img-Standardzation';
import musync from '../assets/Repos/Musync';
import clipPath from '../assets/Repos/ClipPathLogic';
import organizerPHP from '../assets/Repos/OrgazinerPHP';
import brailleKbd from '../assets/Repos/BrailleKeyboardRemake';
import organyz from '../assets/Repos/Organyz';
import tabeladaverdade from '../assets/Repos/TabelaDaVerdade';

const projects = {
  'Pfp-cut': pfpCut,
  'SnakeGameJs': snakeJS,
  'portfoil': portfoil,
  'img-standardzation': imgStandard,
  'Musync': musync,
  'ClipPathLogic': clipPath,
  'OrganizerPHP': organizerPHP,
  'BrailleKeyboardRemaster': brailleKbd,
  'Organyz': organyz,
  'TabelaDaVerdade': tabeladaverdade
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
  const [cardColor, setCardColor] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [buttonFontColor, setButtonFontColor] = useState("");
  const [linkDownload, setLinkDownload] = useState("");

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        setCurrentImg((prev) => (prev + 1) % images.length);
      } else {
        setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
      }
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };


  const toggleActive = (e) => {
    if (e.target.tagName == "A") {
      return;
    }
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
      setCardColor(projects[repo].gradientecard);
      setButtonColor(projects[repo].colorbtn);
      setButtonFontColor(projects[repo].colorfontbtn);
      setLinkDownload(projects[repo].linkDownload);
    }
  }, [repo]);
  useEffect(() => {
    if (images.length > 0) {
      checkImagesOrientation(images).then(setIsMostlyVertical);
    }
  }, [images]);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (languages.length > 0 && typeof onAddTec === "function") {
      onAddTec(languages);
    }
  }, [languages]);

  const DownloadIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">        
        <title>Baixar release</title>
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill={buttonFontColor ? buttonFontColor : "#ffffff"}></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z" fill={buttonFontColor ? buttonFontColor : "#ffffff"}></path>
      </g>
    </svg>
  );

  const CodeIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={20}>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>Código no Github</title>
        <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke={buttonFontColor ? buttonFontColor : "#ffffff"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>
  );
  const PageIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>Página Online</title>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.982 19.61c.454-.7.909-1.6 1.236-2.755.755.29 1.273.636 1.591.909a8.182 8.182 0 0 1-2.864 1.845h.037v.001zm-8.8-1.855c.336-.273.845-.61 1.6-.91.336 1.164.773 2.064 1.236 2.764A8.2 8.2 0 0 1 6.2 17.755h-.018zm10.636-6.664c-.028-.81-.11-1.619-.245-2.418 1-.364 1.727-.8 2.236-1.2a8.136 8.136 0 0 1 1.282 3.618h-3.273zm-8.973-4.2a5.936 5.936 0 0 1-1.481-.8 8.2 8.2 0 0 1 2.654-1.7c-.427.636-.845 1.454-1.182 2.5h.01-.001zm7.137-2.5a8.145 8.145 0 0 1 2.654 1.7 6.01 6.01 0 0 1-1.481.8 9.58 9.58 0 0 0-1.182-2.5h.009zM14.8 9.118c.09.6.182 1.246.2 1.973H9c.027-.727.09-1.382.182-1.973 1.855.334 3.754.334 5.609 0h.009zM12 7.545c-.91 0-1.71-.072-2.39-.181.726-2.237 1.854-3.137 2.39-3.455.518.318 1.655 1.227 2.382 3.455A15.04 15.04 0 0 1 12 7.545zm-6.818-.072a8.03 8.03 0 0 0 2.245 1.2 18.368 18.368 0 0 0-.245 2.418h-3.31a8.13 8.13 0 0 1 1.319-3.618h-.01.001zm-1.3 5.436h3.3c.036.782.09 1.5.2 2.155a7.682 7.682 0 0 0-2.31 1.272 8.11 8.11 0 0 1-1.2-3.427h.01zM12 14.364c-1.09 0-2.027.09-2.845.236A16.91 16.91 0 0 1 9 12.91h6c-.027.608-.073 1.18-.145 1.69A15.388 15.388 0 0 0 12 14.355v.009zm0 5.727c-.545-.327-1.745-1.3-2.473-3.727A14.095 14.095 0 0 1 12 16.182c.955 0 1.773.063 2.482.182-.727 2.454-1.927 3.4-2.473 3.727H12zm6.927-3.764a7.634 7.634 0 0 0-2.309-1.272 17.95 17.95 0 0 0 .2-2.146h3.31a8.11 8.11 0 0 1-1.2 3.418h-.001zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill={buttonFontColor ? buttonFontColor : "#ffffff"}></path>
      </g>
    </svg>
  );

  return (
    <div
      style={{ background: cardColor }}
      className={`proj ${isMostlyVertical ? 'vertical' : 'horizontal'} ${active ? 'active' : ''}`}
      onClick={toggleActive}>
      <div className={`carousel ${isMostlyVertical ? 'vertical' : 'horizontal'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
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
          {linkDownload && active && (<a style={{ background: buttonColor, color: buttonFontColor }} href={
            linkDownload
          } target="_blank" >  {isMobile && (DownloadIcon) || ("Download")} </a>
          )}
          <a style={{ background: buttonColor, color: buttonFontColor }} href={`https://github.com/${username}/${repo}`} target="_blank"> {isMobile && (CodeIcon) || ("Code")}</a>
          {page && (<a style={{ background: buttonColor, color: buttonFontColor }} href={
            page !== "git"
              ? page
              : `https://${username}.github.io/${repo}/`
          } target="_blank" > {isMobile && (PageIcon) || ("Page")} </a>
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