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
  StyledDataTableHeaderHandle,
} from "./styles";
import DataTableHeaderCell from "./DataTableHeaderCell";

function DataTableHeader({
  colOrder,
  stickyHeader,
  rowHeight,
  colWidth,
  width,
  onDragEnd,
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
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {colOrder.map((e, colIndex) => (
                    <Draggable key={e} draggableId={e} index={colIndex}>
                      {(colProvided, colSnapshot) => (
                        <DataTableHeaderCell
                          value={e}
                          colWidth={colWidth}
                          colProvided={colProvided}
                          hoveredOver={snapshot.isDraggingOver}
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

export default DataTableHeader;
