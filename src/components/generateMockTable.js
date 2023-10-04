export const generateMockTable = (rows, cols) => {
  const data = [];
  const columns = [];

  for (let col = 0; col < cols; col++) {
    const column = {
      column: `col-${col}`,
      sortable: false,
      fixed: false,
      width: null,
      order: null
    };
    columns.push(column);
  }

  // Generate data for the remaining rows
  for (let row = 1; row <= rows; row++) {
    const rowData = [];
    for (let col = 1; col <= cols; col++) {
      rowData.push({
        column: `col-${col}`,
        value: `Row ${row}, Col ${col}`,
      });
    }
    data.push(rowData);
  }

  return { data, columns };
};
