import { useEffect, useState } from "react";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import DataTableCell from "./DataTableCell";

const DataTable = ({
  data,
  columns,
  height,
  width = false,
  fixedColumns = false,
  fixedRow = false,
  headless = false,
  groupable = false,
  resizable = false,
  notResiableColumns = false,
  notresizeableRows = false,
  cellPopup = false,
  rowActions = false,
  hasCheckboxes = false,
  sortable = false,
  nonSortableColumns = false,
  valueChangeable = false,
  checked = false,
  stickyHeader = false,
}) => {
  const [colOrder, setColOrder] = useState([]);
  const tableStyles = {};

  if (height) {
    tableStyles.maxHeight = `${height}px`;
  }

  useEffect(() => {
    if (columns && Array.isArray(columns)) {
      const cols = [];
      for (let col = 0; col < columns.length; col++) {
        if (!columns[col].order) {
          cols.push(columns[col].column);
        }
      }
      setColOrder(cols);
    }
  }, []);

  return (
    <div className="duckTableContainer">
      <div id="duckDataTable" className="duckTable" style={tableStyles}>
        {!headless && <DataTableHeader colOrder={colOrder} stickyHeader={stickyHeader} />}
        <div className="duckTableBody">
          {data &&
            Array.isArray(data) &&
            data.map((row, rowIndex) => (
              <DataTableRow>
                {colOrder.map((col, colIndex) => (
                  <DataTableCell colIndex={colIndex} rowIndex={rowIndex} />
                ))}
              </DataTableRow>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
