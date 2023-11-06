import { useEffect, useState } from "react";

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
    <div
      className={`duckTableHead ${stickyHeader && "duckTableHeadSticky"}`}
      style={{ width }}
    >
      {stickyHeader ? (
        <>
          <div
            className="duckTableHeaderRow duckTableHeaderRowSticky"
            style={{ height: rowHeight, width: width }}
          >
            {colOrder.map((e) => (
              <div
                className="duckTableHeaderCell"
                style={{
                  transform: `translateX(-${scrollLeft}px)`,
                  width: colWidth,
                }}
              >
                {e}
              </div>
            ))}
          </div>
          <div className="duckTableHeaderRow" style={{ height: rowHeight }}>
            {colOrder.map((e) => (
              <div
                className="duckTableHeaderCell"
                style={{ width: colWidth }}
              ></div>
            ))}
          </div>
        </>
      ) : (
        <div className="duckTableHeaderRow" style={{ height: rowHeight }}>
          {colOrder.map((e) => (
            <div className="duckTableHeaderCell" style={{ width: colWidth }}>
              {e}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataTableHeader;
