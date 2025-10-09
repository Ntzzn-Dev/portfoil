import React, { useState, useMemo } from 'react';
import ExpandDiv from './ExpandDiv';

function ProjectsHolder({ children }) {
  const [pesquisa, setPesquisa] = useState("");

  const filtrados = useMemo(() =>
    React.Children.toArray(children).filter(child => {
      if (!React.isValidElement(child)) return false;
      if (pesquisa === "") return false;
      const tec = child.props.tec?.toString().toLowerCase() || "";
      const filtro = pesquisa.toLowerCase();
      return tec.includes(filtro);
    }),
    [children, pesquisa]);

  const resto = useMemo(() =>
    React.Children.toArray(children).filter(child => {
      if (!React.isValidElement(child)) return false;
      if (pesquisa === "") return true;
      const tec = child.props.tec?.toString().toLowerCase() || "";
      const filtro = pesquisa.toLowerCase();
      return !tec.includes(filtro);
    }),
    [children, pesquisa]);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-full overflow-x-hidden">
      <div className='m-auto bg-[#121217] p-[20px] rounded-2xl'>
        <div className="relative w-64">
          <input
            list="tecnologys"
            placeholder="Selecione um filtro"
            className="w-full px-4 py-2 rounded-2xl border border-black-300 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-gray-400
                     transition-all duration-200 bg-[#242424] text-gray-400"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <datalist id="tecnologys">
            <option value="HTML" />
            <option value="JAVASCRIPT" />
            <option value="CSS" />
            <option value="REACT" />
            <option value="TAILWIND" />
            <option value="PYTHON" />
            <option value="DART" />
            <option value="FLUTTER" />
            <option value="PHP" />
            <option value="C++" />
          </datalist>
        </div>

        <ExpandDiv title={"Pesquisa"}>
          {filtrados}
        </ExpandDiv>
        <ExpandDiv title={"Resto"} startActive={true}>
          {resto}
        </ExpandDiv>
      </div>
    </div>
  );
}

export default ProjectsHolder;
