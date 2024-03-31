import { useState } from "react";
import DataTableCell from "./DataTableCell";
import { StyledDataTableGroupToggle, StyledDatatableRow } from "./styles";

const DataTableRow = ({rowData, horizontal, colWidth, rowHeight}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (rowData.groupHead) {
    
    return (
      <>
        <StyledDatatableRow className="duckTableRow">
          <StyledDataTableGroupToggle onClick={() => setIsOpen(!isOpen)}></StyledDataTableGroupToggle>
          {rowData.groupHead.slice(horizontal.start, horizontal.end).map((col, colIndex) => (
            <DataTableCell
            value={col.value}
            key={col.id}
            width={colWidth}
            height={rowHeight}
            />
            ))}
        </StyledDatatableRow>
        {isOpen && rowData.children.map((row, rowIndex) => (
          <StyledDatatableRow className="duckTableRow">
            {
              row.slice(horizontal.start, horizontal.end).map((col, colIndex) => (
                  <DataTableCell
                    value={col.value}
                    key={col.id}
                    width={colWidth}
                    height={rowHeight}
                    background="#eee"
                    />
                ))
            }
          </StyledDatatableRow>
        ))}
      </>
    );
  }
  return (
    <StyledDatatableRow className="duckTableRow">{}
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
};

/* const DataTableRow = ({ children }) => {
  return <StyledDatatableRow className="duckTableRow">{children}</StyledDatatableRow>;
}; */

export default DataTableRow;
