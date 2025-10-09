import React, { useRef, useState } from 'react';
import './ExpandDiv.css';

function ExpandDiv({ title, startActive = false, children }) {
  const [expand, setExpand] = useState(startActive);
  const containerRef = useRef(null);

  const PageIcon = (
    <svg fill="#ffffff" viewBox="-6.5 0 32 32" version="1.1" className='p-3 w-11' xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>Expandir</title>
        <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
      </g>
    </svg>
  );

  const toggleExpand = (e) => {
    if (containerRef.current) {
      const childElements = Array.from(containerRef.current.children);
      for (let child of childElements) {
        if (child.contains(e.target)) {
          return;
        }
      }
    }
    
    if (!expand) {
      setExpand(!expand);
      const height = containerRef.current.scrollHeight;
      containerRef.current.style.height = height + 'px';
      setTimeout(() => containerRef.current.style.height = 'auto', 300);
    } else {
      const height = containerRef.current.scrollHeight;
      containerRef.current.style.height = height + 'px';
      requestAnimationFrame(() => {
        containerRef.current.style.height = '0';
        setExpand(!expand);
      });
    }
  }

  const isEmpty = !children || React.Children.count(children) === 0;

  return (
    !isEmpty ?
    <div className="bg-[#16161c] rounded-2xl" onClick={toggleExpand}>
      <section className='flex justify-between'>
        <h2 className='p-3 font-bold font-2 text-xl'>{title}</h2>
        {PageIcon}
      </section>
      <section
        ref={containerRef} className={`grade flex flex-wrap justify-center gap-6 pt-2 exp ${expand ? 'open' : 'closed'}`}>
        {children}
      </section>
    </div>
    : null
  );
}

export default ExpandDiv;