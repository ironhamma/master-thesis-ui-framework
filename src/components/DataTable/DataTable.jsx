import { useCallback, useEffect, useRef, useState } from "react";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import DataTableCell from "./DataTableCell";

const LOAD_OFFSET = 5;

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

  const [visibleData, setVisibleData] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [horizontal, setHorizontal] = useState({ start: 0, end: pageWidth });
  const [vertical, setVertical] = useState({ start: 0, end: pageHeight });

  useEffect(() => {
    const startIndex = Math.floor(scrollTop / rowHeight);

    // take care around the edges
    const sIndex =
      startIndex > data.length - pageHeight
        ? data.length - pageHeight
        : startIndex;
    const endIndex = Math.min(
      startIndex + pageHeight + LOAD_OFFSET,
      data.length
    );
    setVertical((e) => ({ start: sIndex, end: endIndex }));
  }, [scrollTop, data, pageHeight]);

  useEffect(() => {
    const startIndex = Math.floor(scrollLeft / colWidth);

    // take care around the edges
    const sIndex =
      startIndex > data[0].length - pageWidth
        ? data.length - pageWidth
        : startIndex;
    const endIndex = Math.min(
      startIndex + pageWidth + LOAD_OFFSET,
      data[0].length
    );
    setHorizontal({ start: sIndex, end: endIndex });
  }, [scrollLeft, data, pageWidth]);

  useEffect(() => {
    const shown = [...data]
      .slice(vertical.start, vertical.end)
      .map((row) => row.slice(horizontal.start, horizontal.end));

    setVisibleData(shown);
  }, [vertical, horizontal, data]);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
    setScrollLeft(e.target.scrollLeft);
  };

  if (height) {
    tableStyles.maxHeight = `${height}px`;
    tableStyles.maxWidth = `${width}px`;
  }

  return (
    <div className="duckTableContainer">
      <div
        id="duckDataTable"
        className="duckTable"
        style={tableStyles}
        onScroll={handleScroll}
      >
        {!headless && (
          <DataTableHeader colOrder={colOrder} stickyHeader={stickyHeader} />
        )}
        <div
          className="duckTableBody"
          style={{
            height: `${data.length * rowHeight}px`,
            width: `${data[0].length * colWidth}px`,
            transform: `translate(${scrollLeft}px, ${scrollTop}px)`,
          }}
        >
          {visibleData &&
            Array.isArray(data) &&
            visibleData.map((row, rowIndex) => (
              <DataTableRow key={rowIndex}>
                {row.map((col, colIndex) => (
                  <DataTableCell
                    value={col.value}
                    key={col.id}
                    width={colWidth}
                    height={rowHeight}
                  />
                ))}
              </DataTableRow>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
