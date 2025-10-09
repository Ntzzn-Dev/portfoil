import { useState, useRef } from "react";

function Knob({ value = 0, onChange, size = 32 }) {
  const [angle, setAngle] = useState(value);
  const knobRef = useRef(null);
  const isDragging = useRef(false);

  const startDrag = () => (isDragging.current = true);
  const stopDrag = () => (isDragging.current = false);

  const handlePointerMove = (e) => {
  if (!isDragging.current) return;

  let clientX, clientY;

  if (e.touches) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  const rect = knobRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = clientX - centerX;
  const dy = clientY - centerY;

  let newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
  newAngle += 90;
  if (newAngle < 0) newAngle += 360;

  setAngle(newAngle);
  if (onChange) onChange(angleFormat(newAngle));
};


  function angleFormat(angle) {
    angle = angle % 360;

    let percent;

    if (angle <= 180) {
      percent = (angle / 180) * 50;
    } else {
      percent = -50 + ((angle - 180) / 180) * 50;
    }

    return percent;
  }


  return (
    <div
      ref={knobRef}
      onMouseMove={handlePointerMove}
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      
      onTouchMove={handlePointerMove}
      onTouchStart={startDrag}
      onTouchEnd={stopDrag}
      style={{
        transform: `rotate(${angle}deg)`,
        transition: isDragging.current ? "none" : "transform 0.1s ease-out",
        width: `${size}rem`,
        height: `${size}rem`,
      }}
      className="rounded-full bg-gray-700 border-4 border-gray-500 flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    >
      <div className="absolute w-1 bg-blue-400 top-2 left-1/2 -translate-x-1/2 rounded-full" 
      style={{
        width: `${size / 32}rem`,
        height: `${size / 6}rem`,
      }}/>
    </div>
  );
}

export default Knob;
