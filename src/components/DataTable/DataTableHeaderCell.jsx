import { useState } from "react";
import {
  StyledDataTableHeaderCell,
  StyledDataTableHeaderHandle,
} from "./styles";

function DataTableHeaderCell({ value, colProvided, colWidth, hoveredOver }) {
  const [hovered, setHovered] = useState(false);
  return (
    <StyledDataTableHeaderCell
      ref={colProvided.innerRef}
      {...colProvided.draggableProps}
      className="duckTableHeaderCell"
      style={{
        ...colProvided.draggableProps.style,
        width: colWidth,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && !hoveredOver && (
        <StyledDataTableHeaderHandle {...colProvided.dragHandleProps} />
      )}
      {value}
    </StyledDataTableHeaderCell>
  );
}

export default DataTableHeaderCell;
