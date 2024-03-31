export const generateMockTable = (rows, cols, isGrouped = false) => {
  const data = [];
  const columns = [];

  for (let col = 0; col < cols; col++) {
    const column = {
      column: `col-${col}`,
      sortable: false,
      fixed: false,
      width: null,
      order: null,
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
        id: `${row}x${col}`,
      });
    }
    data.push(rowData);
  }

  if (isGrouped) {
    const oneRow = data[0];
    data[0] = {
      groupHead: oneRow,
      children: [oneRow, oneRow, oneRow],
    };
  }

  return { data, columns };
};
