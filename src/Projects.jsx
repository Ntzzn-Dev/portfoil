import { useState, useEffect } from 'react';
import './projects.css';

function Project({ name, repo }) {
  const [active, setActive] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [isMostlyVertical, setIsMostlyVertical] = useState(false);

  const username = "Ntzzn-Dev";

  const [withPage, setWithPage] = useState(false);
  const [lastUpd, setLastUpd] = useState(null);
  const [desc, setDesc] = useState("");
  const [languages, setLanguages] = useState([]);
  const [images, setImages] = useState([]);

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
    checkImagesOrientation(images).then(setIsMostlyVertical);
  }, [images]);
  useEffect(() => {
    const repoUrl = `https://api.github.com/repos/${username}/${repo}`;
    const langUrl = `https://api.github.com/repos/${username}/${repo}/languages`;
    const imgsUrl = `https://api.github.com/repos/${username}/${repo}/contents/assets`

    Promise.all([fetch(repoUrl), fetch(langUrl), fetch(imgsUrl)])
      .then(async ([repoRes, langRes, imgRes]) => {
        const repoData = await repoRes.json();
        const langData = await langRes.json();
        const imgsData = await imgRes.json(); 

        setWithPage(repoData.has_pages);
        setLastUpd(repoData.pushed_at || repoData.updated_at);
        setDesc(repoData.description || "Sem descrição");
        setLanguages(Object.keys(langData));

        const imgs = imgsData
          .filter(item => item.type === "file" && /\.(png|jpe?g|gif|webp)$/i.test(item.name))
          .map(item => item.download_url);
        setImages(imgs);
      })
      .catch(err => console.error(err));
  }, [username, repo]);

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
          <p className='desc'>{desc}</p>
          {languages.length > 0 && <p className='langs'>Linguagens: {languages.join(", ")}</p>}
          <p className='date'>{lastUpd ? `Ultima atualização em: ${formatDate(lastUpd)}` : "Carregando..."}</p>
        </section>
        <section className='link'>
          <a href={`https://github.com/${username}/${repo}`} target="_blank">Code</a>
          {withPage && (<a href={`https://${username}.github.io/${repo}/`} target="_blank">Page</a>)}
        </section>
      </div>
    </div>
  )
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const shortYear = String(year).slice(-2);

  if (year === now.getFullYear()) {
    return `${day}/${month}`;
  } else {
    return `${day}/${month}/${shortYear}`;
  }
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