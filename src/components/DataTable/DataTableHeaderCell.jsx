import { useState } from "react";
import {
  StyledDataTableHeaderCell,
  StyledDataTableHeaderHandle,
} from "./styles";
import Resizable from "./Resizeable";

function DataTableHeaderCell({
  value,
  colProvided,
  colWidth,
  hoveredOver,
  height,
  colWidths,
  setColWidths,
}) {
  const [hovered, setHovered] = useState(false);
  if (!colProvided) {
    return (
      <Resizable
        initialWidth={colWidth}
        height={height}
        colWidths={colWidths}
        setColWidths={setColWidths}
        column={value}
      >
        <StyledDataTableHeaderCell
          className="duckTableHeaderCell"
          style={{
            width: colWidth - 1,
          }}
        >
          {value}
        </StyledDataTableHeaderCell>
      </Resizable>
    );
  }
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
