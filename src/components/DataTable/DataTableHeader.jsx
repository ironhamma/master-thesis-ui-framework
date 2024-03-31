import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "@hello-pangea/dnd";
import {
  StyledDataTableHead,
  StyledDataTableHeadRow,
  StyledDataTableHeaderCell,
} from "./styles";
import DataTableHeaderCell from "./DataTableHeaderCell";

function DataTableHeader({
  colOrder,
  stickyHeader,
  rowHeight,
  colWidth,
  width,
  onDragEnd,
  reorderable,
  colWidths,
  setColWidths,
}) {
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (!stickyHeader) {
      return;
    }
    const onScroll = (e) => {
      setScrollLeft(e.target.scrollLeft);
    };
    document
      .getElementById("duckDataTable")
      .addEventListener("scroll", onScroll);

    return () =>
      document
        .getElementById("duckDataTable")
        .removeEventListener("scroll", onScroll);
  }, [scrollLeft, stickyHeader]);

  resetServerContext();

  if (reorderable) {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledDataTableHead
          className={`duckTableHead ${stickyHeader && "duckTableHeadSticky"}`}
          style={{ width }}
        >
          {stickyHeader ? (
            <>
              <StyledDataTableHeadRow
                sticky
                className="duckTableHeaderRow duckTableHeaderRowSticky"
                style={{ height: rowHeight, width }}
              >
                {colOrder.map((e) => (
                  <StyledDataTableHeaderCell
                    className="duckTableHeaderCell"
                    style={{
                      transform: `translateX(-${scrollLeft}px)`,
                      width: colWidth,
                    }}
                    key={e}
                  >
                    {e}
                  </StyledDataTableHeaderCell>
                ))}
              </StyledDataTableHeadRow>
              <StyledDataTableHeadRow
                className="duckTableHeaderRow"
                style={{ height: rowHeight }}
              >
                {colOrder.map((e) => (
                  <StyledDataTableHeaderCell
                    className="duckTableHeaderCell"
                    style={{ width: colWidth }}
                    key={e}
                  />
                ))}
              </StyledDataTableHeadRow>
            </>
          ) : (
            <Droppable droppableId="droppableHeader2" direction="horizontal">
              {(provided, snapshot) => (
                <div>
                  <StyledDataTableHeadRow
                    className="duckTableHeaderRow"
                    style={{ height: rowHeight }}
                  >
                    {colOrder.map((e, colIndex) => (
                      <Draggable key={e} draggableId={e} index={colIndex}>
                        {(colProvided, colSnapshot) => (
                          <DataTableHeaderCell
                            value={e}
                            colWidth={colWidth}
                            colProvided={colProvided}
                            hoveredOver={snapshot.isDraggingOver}
                            key={e}
                          />
                        )}
                      </Draggable>
                    ))}
                  </StyledDataTableHeadRow>
                </div>
              )}
            </Droppable>
          )}
        </StyledDataTableHead>
      </DragDropContext>
    );
  }

  return (
    <StyledDataTableHead
      className={`duckTableHead ${stickyHeader && "duckTableHeadSticky"}`}
      style={{ width }}
    >
      {stickyHeader ? (
        <>
          <StyledDataTableHeadRow
            sticky
            className="duckTableHeaderRow duckTableHeaderRowSticky"
            style={{ height: rowHeight, width }}
          >
            {colOrder.map((e) => (
              <StyledDataTableHeaderCell
                className="duckTableHeaderCell"
                style={{
                  transform: `translateX(-${scrollLeft}px)`,
                  width: colWidth,
                }}
                key={e}
              >
                {e}
              </StyledDataTableHeaderCell>
            ))}
          </StyledDataTableHeadRow>
          <StyledDataTableHeadRow
            className="duckTableHeaderRow"
            style={{ height: rowHeight }}
          >
            {colOrder.map((e) => (
              <StyledDataTableHeaderCell
                className="duckTableHeaderCell"
                style={{ width: colWidth }}
                key={e}
              />
            ))}
          </StyledDataTableHeadRow>
        </>
      ) : (
        <StyledDataTableHeadRow
          className="duckTableHeaderRow"
          style={{ height: rowHeight }}
        >
          {colOrder.map((e, colIndex) => (
            <DataTableHeaderCell
              value={e}
              colWidth={colWidth}
              key={e}
              height={rowHeight}
              colWidths={colWidths}
              setColWidths={setColWidths}
            />
          ))}
        </StyledDataTableHeadRow>
      )}
    </StyledDataTableHead>
  );
}

export default DataTableHeader;
