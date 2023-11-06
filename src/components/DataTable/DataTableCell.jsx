const DataTableCell = ({ value, height, width }) => {
  return (
    <div className="duckTableCell" style={{ width, height }}>
      {value}
    </div>
  );
};

export default DataTableCell;
