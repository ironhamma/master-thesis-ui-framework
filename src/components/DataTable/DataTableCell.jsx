import { StyledDataTableCell } from "./styles";

const DataTableCell = ({ value, height, width }) => {
  return (
    <StyledDataTableCell className="duckTableCell" style={{ width, height }}>
      {value}
    </StyledDataTableCell>
  );
};

export default DataTableCell;
