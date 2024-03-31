import { useState } from "react";
import { StyledResizeable } from "./styles";

function Resizable({
  children,
  initialWidth,
  height,
  colWidths,
  setColWidths,
  column,
}) {
  const [width, setWidth] = useState(initialWidth);
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setInitialX(e.clientX);
  };

  const handleMouseUp = () => {
    setColWidths({ ...colWidths, [column]: width });
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = width + e.clientX - initialX;
      if (newWidth < initialWidth) {
        return;
      }
      setWidth(newWidth);
      setColWidths({ ...colWidths, [column]: newWidth });
      setInitialX(e.clientX);
    }
  };

  return (
    <StyledResizeable
      style={{ width: `${width}px`, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: "20px",
          height: "100%",
          position: "absolute",
          right: 0,
          bottom: 0,
          backgroundColor: "lightblue",
          cursor: "col-resize",
          zIndex: 1,
          opacity: hovered ? 1 : 0,
          transition: ".3s all",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setIsResizing(false);
        }}
      />
      {children}
    </StyledResizeable>
  );
}

export default Resizable;
