import { StyledDataTableCell } from "./styles";

function DataTableCell({ value, height, width, background }) {
  return (
    <StyledDataTableCell
      className="duckTableCell"
      style={{ width, height, backgroundColor: background }}
    >
      {value}
    </StyledDataTableCell>
  );
}

export default DataTableCell;
