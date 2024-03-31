import { useEffect, useState, React } from "react";
import propTypes from "prop-types";
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
  headless = false,
  groupable = false,
  resizable = false,
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
  const [colWidths, setColWidths] = useState({});

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
    if (!reorderable) {
      return;
    }
    if (dataWithId && dataWithId[0] && !groupable) {
      const sortedData = dataWithId.map((row) => {
        const newRow = row.row.sort(
          (a, b) => colOrder.indexOf(a.column) - colOrder.indexOf(b.column),
        );
        return { row: newRow, id: row.id };
      });
      setDataWithId(sortedData);
    }
  }, [colOrder, dataWithId, reorderable]);

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
      const widths = {};
      dataWithId[0].row.forEach((col) => {
        widths[col.column] = colWidth;
      });
      setColWidths(widths);
    }
    if (dataWithId && dataWithId[0] && groupable) {
      setColOrder(dataWithId[0].row.groupHead.map((e) => e.column));
      const widths = {};
      dataWithId[0].row.groupHead.forEach((col) => {
        widths[col.column] = colWidth;
      });
      setColWidths(widths);
    }
  }, [dataWithId, groupable]);

  const innerWidth =
    visibleData &&
    visibleData[0] &&
    visibleData[0].row &&
    (visibleData[0].row.length + OVERSCAN_COUNT) * colWidth;

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

  if (reorderable) {
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
              reorderable={reorderable}
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
            reorderable={reorderable}
            colWidths={colWidths}
            setColWidths={setColWidths}
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
              <DataTableRow
                key={row.id}
                rowData={row.row}
                horizontal={horizontal}
                colWidth={colWidth}
                rowHeight={rowHeight}
                reorderable={reorderable}
                colWidths={colWidths}
              />
            ))}
        </StyledDataTableBody>
      </StyledDataTable>
    </StyledDataTableContainer>
  );
}

DataTable.propTypes = {
  data: propTypes.array,
  height: propTypes.number,
  rowHeight: propTypes.number,
  colWidth: propTypes.number,
  width: propTypes.number,
  headless: propTypes.bool,
  stickyHeader: propTypes.bool,
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
