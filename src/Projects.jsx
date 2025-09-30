import { useState } from 'react';
import './projects.css'

function Project({ name, desc, nameInGit, images, withPage = true }) {
  const [active, setActive] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

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

  return (
    <div 
      className={`proj ${active ? 'active' : ''}`} 
      onClick={toggleActive}>
      <div className="carousel">
        {active && (
          <button className="prev" onClick={prevImage}>&lt;</button>
        )}
        <img src={images[currentImg]} alt={`${name} ${currentImg}`} />
        {active && (
          <button className="next" onClick={nextImage}>&gt;</button>
        )}
      </div>
      <div className='specs'>
        <section className='info'>
          <h2>{name}</h2>
          <p>{desc}</p>
        </section>
        <section className='link'>
          <a href={`https://github.com/Ntzzn-Dev/${nameInGit}`} target="_blank">Code</a>
          {withPage &&(<a href={`https://Ntzzn-Dev.github.io/${nameInGit}/`} target="_blank">Page</a>)}
        </section>
      </div> 
    </div>
  )
}

export default Project