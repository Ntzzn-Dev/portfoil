import React, { useState, useMemo } from 'react';
import ExpandDiv from './ExpandDiv';
import CardShuffle from './CardShuffle';

function ProjectsHolder({ children }) {
  const [pesquisa, setPesquisa] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

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
    <div className="flex flex-col items-center gap-4 w-full max-w-full overflow-hidden">
      <div className={`m-auto flex items-center flex-col bg-[#121217] p-[20px] rounded-2xl ${!checked ? 'w-full h-[100vh]' : ''}`}>
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

        <input type='checkbox'
          checked={checked}
          onChange={handleChange}
        ></input>

        {checked && (
          <>
            <ExpandDiv title="Pesquisa">
              {filtrados}
            </ExpandDiv>
            <ExpandDiv title="Resto" startActive={true}>
              {resto}
            </ExpandDiv>
          </>
        ) || (
            <CardShuffle>
  {Array(5).fill(0).flatMap(() => resto)}
            </CardShuffle>
          )}
      </div>
    </div>
  );
}

export default ProjectsHolder;
