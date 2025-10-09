import { useEffect, useState } from "react";
import RotaryKnob from "./RadialBtn";

function CardShuffle({ children }) {
  const [numCards, setNumCards] = useState(0);
  const [active, setActive] = useState([]);
  const [percentTransl, setPercentTransl] = useState(0);
  const [percentRotate, setPercentRotate] = useState(0);

  useEffect(() => {
    setNumCards(children.length);
    setActive(Array(children.length).fill(false));
  }, [children]);


  const toggleActive = (index) => {
    setActive((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  function setRoll(percent){
    setPercentTransl(percent * 180);
    setPercentRotate(percent * 6);
  }

  return (
    <>
      <div className="relative">
        {children.map((item, index) => {
          const cont = Math.trunc(-numCards / 2) + index;
          const rotation = cont * 3;
          const translateX = (cont + 0.5) * 90;

          return (
            <div
              key={index}
              className={`origin-bottom absolute grid w-[18rem] h-[20rem] md:w-90 md:h-100 origin-bottom-center absolute left-1/2 scale-[0.70] md:scale-[0.90] -translate-x-1/2 bg-gray-800 rounded-lg hover:-translate-y-4 hover:scale-[1] transition-all duration-300 ease-in-out`}
              style={{
                transform: `rotate(${rotation + percentRotate}deg) translateX(${translateX + percentTransl}px)`,
              }}
              onClick={() => toggleActive(index)}
            >
              {item}
            </div>
          );
        })}
        <section style={{top: "400px", position: "relative"} }>
        <RotaryKnob value={0} onChange={setRoll} size={80}/>
        </section>
      </div>
    </>
  );
}

export default CardShuffle;
