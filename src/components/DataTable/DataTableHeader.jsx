import { useEffect, useState } from "react";

const DataTableHeader = ({ colOrder, stickyHeader }) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (!stickyHeader) {
      return;
    }
    const onScroll = (e) => {
      console.log(e.target.scrollLeft);
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
    <div className={`duckTableHead ${stickyHeader && "duckTableHeadSticky"}`}>
      {stickyHeader ? (
        <>
          <div className="duckTableHeaderRow duckTableHeaderRowSticky">
            {colOrder.map((e) => (
              <div
                className="duckTableHeaderCell"
                style={{ transform: `translateX(-${scrollLeft}px)` }}
              >
                {e}
              </div>
            ))}
          </div>
          <div className="duckTableHeaderRow">
            {colOrder.map((e) => (
              <div className="duckTableHeaderCell"></div>
            ))}
          </div>
        </>
      ) : (
        <div className="duckTableHeaderRow">
          {colOrder.map((e) => (
            <div className="duckTableHeaderCell">{e}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataTableHeader;
