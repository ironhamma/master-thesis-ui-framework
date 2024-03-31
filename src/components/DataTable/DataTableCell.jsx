import { StyledDataTableCell } from "./styles";

const DataTableCell = ({ value, height, width, background }) => {
  return (
    <StyledDataTableCell className="duckTableCell" style={{ width, height, backgroundColor: background }}>
      {value}
    </StyledDataTableCell>
  );
};

export default DataTableCell;
