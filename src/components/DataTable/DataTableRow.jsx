import { StyledDatatableRow } from "./styles";

const DataTableRow = ({ children }) => {
  return <StyledDatatableRow className="duckTableRow">{children}</StyledDatatableRow>;
};

export default DataTableRow;
