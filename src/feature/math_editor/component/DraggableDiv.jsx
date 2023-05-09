import React, { useState, useEffect, useRef } from "react";

const DraggableDiv = (props) => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging) return;

      setLeft(left + e.clientX - startX);
      setTop(top + e.clientY - startY);

      setStartX(e.clientX);
      setStartY(e.clientY);
      e.preventDefault();
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, left, startX, startY, top]);

  const onMouseDown = (e) => {
    if(!ref.current) return;
    if(e.clientY - ref.current.getBoundingClientRect().top > 40) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  return (
    <div
      style={{ position: "absolute", left: left, top: top }}
      onMouseDown={onMouseDown}
      ref={ref}
    >
        {props.children}
    </div>
  );
};

export default DraggableDiv;