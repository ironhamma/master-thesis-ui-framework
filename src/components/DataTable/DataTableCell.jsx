import useVisibility from "../../hooks/useVisibility";

const DataTableCell = ({ colIndex, rowIndex }) => {
  const [ref, entry] = useVisibility({
    threshold: 0.5,
    root: document.getElementById('duckDataTable'),
    rootMargin: "50px",
  });
  return (
    <div ref={ref} className="duckTableCell">
      {entry && entry.isIntersecting
        ? `row: ${rowIndex} col: ${colIndex}`
        : null}
    </div>
  );
};

export default DataTableCell;
