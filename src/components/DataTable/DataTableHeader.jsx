import { useEffect, useState } from "react";
import {
  StyledDataTableHead,
  StyledDataTableHeadRow,
  StyledDataTableHeaderCell,
} from "./styles";

const DataTableHeader = ({
  colOrder,
  stickyHeader,
  rowHeight,
  colWidth,
  width,
}) => {
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
            style={{ height: rowHeight, width: width }}
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
              ></StyledDataTableHeaderCell>
            ))}
          </StyledDataTableHeadRow>
        </>
      ) : (
        <StyledDataTableHeadRow
          className="duckTableHeaderRow"
          style={{ height: rowHeight }}
        >
          {colOrder.map((e) => (
            <StyledDataTableHeaderCell
              className="duckTableHeaderCell"
              style={{ width: colWidth }}
            >
              {e}
            </StyledDataTableHeaderCell>
          ))}
        </StyledDataTableHeadRow>
      )}
    </StyledDataTableHead>
  );
};

export default DataTableHeader;
