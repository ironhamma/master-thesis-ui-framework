import { useEffect, useState, React } from "react";
import PropTypes from "prop-types";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "@hello-pangea/dnd";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";
import {
  StyledDataTable,
  StyledDataTableBody,
  StyledDataTableContainer,
} from "./styles";
import generateUniqueID from "../../helpers/generateID";

const LOAD_OFFSET = 5;
const OVERSCAN_COUNT = 2;

function DataTable({
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
  reorderable = false,
}) {
  const [dataWithId, setDataWithId] = useState([]);
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
    if (data) {
      const dataIDs = [];
      data.forEach((row, rowIndex) => {
        const rowWithId = {
          row,
          id: generateUniqueID(),
        };
        dataIDs.push(rowWithId);
      });
      setDataWithId(dataIDs);
    }
  }, [data]);

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
    setVisibleData(dataWithId.slice(vertical.start, vertical.end));
  }, [vertical, horizontal, dataWithId]);

  useEffect(() => {
    // sort dataWithId to match colOrder
    if (dataWithId && dataWithId[0] && !groupable) {
      const sortedData = dataWithId.map((row) => {
        const newRow = row.row.sort(
          (a, b) => colOrder.indexOf(a.column) - colOrder.indexOf(b.column),
        );
        return { row: newRow, id: row.id };
      });
      setDataWithId(sortedData);
    }
  }, [colOrder]);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
    setScrollLeft(e.target.scrollLeft);
  };

  if (height) {
    tableStyles.height = `${height}px`;
    tableStyles.width = `${width}px`;
  }

  useEffect(() => {
    if (dataWithId && dataWithId[0] && !groupable) {
      setColOrder(dataWithId[0].row.map((e) => e.column));
    }
    if (dataWithId && dataWithId[0] && groupable) {
      setColOrder(dataWithId[0].row.groupHead.map((e) => e.column));
    }
  }, [dataWithId, groupable]);

  const innerWidth =
    visibleData &&
    visibleData[0] &&
    (visibleData[0].length + OVERSCAN_COUNT) * colWidth;

  const innerHeight = (visibleData.length + OVERSCAN_COUNT) * rowHeight;

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(dataWithId);
    const [reorderedItem] = items.splice(
      result.source.index + vertical.start,
      1,
    );
    items.splice(result.destination.index + vertical.start, 0, reorderedItem);

    setDataWithId(items);
  };

  const onColDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(colOrder);
    const [reorderedItem] = items.splice(
      result.source.index + horizontal.start,
      1,
    );
    items.splice(result.destination.index + horizontal.start, 0, reorderedItem);

    setColOrder(items);
  };

  resetServerContext();

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
            onDragEnd={onColDragEnd}
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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppableRow2" direction="vertical">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {visibleData &&
                    Array.isArray(visibleData) &&
                    visibleData.map((row, rowIndex) => (
                      <Draggable
                        key={`${row.id}_row_id`}
                        draggableId={`${row.id}_row_id`}
                        index={rowIndex}
                      >
                        {(draggableProvided, draggableSnapshot) => (
                          <div
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            style={{
                              ...draggableProvided.draggableProps.style,
                              backgroundColor: draggableSnapshot.isDragging
                                ? "lightblue"
                                : "white",
                            }}
                          >
                            <DataTableRow
                              key={rowIndex}
                              rowData={row.row}
                              horizontal={horizontal}
                              colWidth={colWidth}
                              rowHeight={rowHeight}
                              dragHandleProps={
                                draggableProvided.dragHandleProps
                              }
                              draggedOver={snapshot.isDraggingOver}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </StyledDataTableBody>
      </StyledDataTable>
    </StyledDataTableContainer>
  );
}

DataTable.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
  rowHeight: PropTypes.number,
  colWidth: PropTypes.number,
  width: PropTypes.number,
  headless: PropTypes.bool,
  stickyHeader: PropTypes.bool,
};

DataTable.defaultProps = {
  data: [],
  height: 700,
  rowHeight: 100,
  colWidth: 100,
  width: 1800,
  headless: false,
  stickyHeader: false,
};

export default DataTable;
