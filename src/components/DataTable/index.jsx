import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import DataTableCell from "./DataTableCell";
import { StyledDataTable, StyledDataTableBody, StyledDataTableContainer } from "./styles";

const LOAD_OFFSET = 5;
const OVERSCAN_COUNT = 2;

const DataTable = ({
  data,
  columns,
  height,
  rowHeight,
  colWidth,
  width = 1800,
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
  const pageHeight = Math.floor(height / rowHeight);
  const pageWidth = Math.floor(width / colWidth);
  const [colOrder, setColOrder] = useState([]);
  const tableStyles = {};

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [vertical, setVertical] = useState({ start: 0, end: pageHeight });
  const [horizontal, setHorizontal] = useState({ start: 0, end: pageWidth });
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const base = Math.floor(scrollTop / rowHeight);
    const startIndex = base - OVERSCAN_COUNT > 0 ? base - OVERSCAN_COUNT : base;
    const endIndex = base + pageHeight + OVERSCAN_COUNT;
    setVertical({ start: startIndex, end: endIndex });
  }, [scrollTop, rowHeight]);

  useEffect(() => {
    const base = Math.floor(scrollLeft / colWidth);
    const startIndex = base - OVERSCAN_COUNT > 0 ? base - OVERSCAN_COUNT : base;
    const endIndex = base + pageWidth + OVERSCAN_COUNT;
    setHorizontal({ start: startIndex, end: endIndex });
  }, [scrollLeft, colWidth]);

  useEffect(() => {
    setVisibleData(
      data
        .slice(vertical.start, vertical.end)
    );
  }, [vertical, horizontal]);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
    setScrollLeft(e.target.scrollLeft);
  };

  if (height) {
    tableStyles.height = `${height}px`;
    tableStyles.width = `${width}px`;
  }

  useEffect(() => {
    if (data && data[0] && !groupable) {
      setColOrder(data[0].map((e) => e.column));
    }
    if (data && data[0] && groupable) {
      setColOrder(data[0].groupHead.map((e) => e.column));
    }
  }, [data, groupable]);

  const innerWidth =
    visibleData &&
    visibleData[0] &&
    (visibleData[0].length + OVERSCAN_COUNT) * colWidth;

  const innerHeight = (visibleData.length + OVERSCAN_COUNT) * rowHeight;

  return (
    <StyledDataTableContainer>
      <StyledDataTable
        id="duckDataTable"
        style={tableStyles}
        onScroll={handleScroll}
      >
        {!headless && (
          <DataTableHeader
            colOrder={colOrder}
            stickyHeader={stickyHeader}
            rowHeight={rowHeight}
            colWidth={colWidth}
            width={innerWidth}
          />
        )}
        <StyledDataTableBody
          style={{
            height: `${innerHeight}px`,
            width: `${innerWidth}px`,
            transform: `translate(${horizontal.start * colWidth}px, ${
              vertical.start * rowHeight
            }px)`,
          }}
        >
          {visibleData &&
            Array.isArray(visibleData) &&
            visibleData.map((row, rowIndex) => (
              <DataTableRow key={rowIndex} rowData={row} horizontal={horizontal} colWidth={colWidth} rowHeight={rowHeight}>
                {/* {row.map((col, colIndex) => (
                  <DataTableCell
                    value={col.value}
                    key={col.id}
                    width={colWidth}
                    height={rowHeight}
                  />
                ))} */}
              </DataTableRow>
            ))}
        </StyledDataTableBody>
      </StyledDataTable>
    </StyledDataTableContainer>
  );
};

DataTable.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
  rowHeight: PropTypes.number,
  colWidth: PropTypes.number,
  width: PropTypes.number,
  headless: PropTypes.bool,
  stickyHeader: PropTypes.bool
}

DataTable.defaultProps = {
  data: [],
  height: 700,
  rowHeight: 100,
  colWidth: 100,
  width: 1800,
  headless: false,
  stickyHeader: false
}


export default DataTable;
