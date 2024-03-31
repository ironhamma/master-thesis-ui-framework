import { useState, React } from "react";
import DataTableCell from "./DataTableCell";
import {
  StyledDataTableGroupToggle,
  StyledDataTableRowHandle,
  StyledDatatableRow,
} from "./styles";

function DataTableRow({
  rowData,
  horizontal,
  colWidth,
  rowHeight,
  dragHandleProps,
  draggedOver,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  if (rowData.groupHead) {
    return (
      <>
        <StyledDatatableRow className="duckTableRow">
          <StyledDataTableGroupToggle onClick={() => setIsOpen(!isOpen)} />
          {rowData.groupHead
            .slice(horizontal.start, horizontal.end)
            .map((col, colIndex) => (
              <DataTableCell
                value={col.value}
                key={col.id}
                width={colWidth}
                height={rowHeight}
              />
            ))}
        </StyledDatatableRow>
        {isOpen &&
          rowData.children.map((row, rowIndex) => (
            <StyledDatatableRow className="duckTableRow">
              {row
                .slice(horizontal.start, horizontal.end)
                .map((col, colIndex) => (
                  <DataTableCell
                    value={col.value}
                    key={col.id}
                    width={colWidth}
                    height={rowHeight}
                    background="#eee"
                  />
                ))}
            </StyledDatatableRow>
          ))}
      </>
    );
  }
  return (
    <StyledDatatableRow
      className="duckTableRow"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      style={{
        transform: `translateX(${hovered && !draggedOver ? "30px" : "0"})`,
      }}
    >
      {hovered && !draggedOver && (
        <StyledDataTableRowHandle {...dragHandleProps} />
      )}
      {rowData.slice(horizontal.start, horizontal.end).map((col, colIndex) => (
        <DataTableCell
          value={col.value}
          key={col.id}
          width={colWidth}
          height={rowHeight}
        />
      ))}
    </StyledDatatableRow>
  );
}

export default DataTableRow;
