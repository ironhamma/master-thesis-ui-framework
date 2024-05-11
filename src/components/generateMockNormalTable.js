// a function that can generate a table data with n parameter rows and m parameter columns
// in this format:
/* const MOCK_TABLE_DATA = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    gender: "male",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 28,
    gender: "female",
  },
  {
    id: 3,
    name: "John Smith",
    age: 45,
    gender: "male",
  },
  {
    id: 4,
    name: "Jane Smith",
    age: 34,
    gender: "female",
  },
]; */

const generateMockNormalTable = (rows, cols) => {
  const data = [];
  const columns = new Set();

  for (let col = 1; col <= cols; col++) {
    const colData = {};
    for (let row = 1; row <= rows; row++) {
      colData[`row-${row}`] = `Row ${row}, Col ${col}`;
      columns.add(`row-${row}`);
    }
    data.push(colData);
  }

  const columnsArray = Array.from(columns);

  return { data, columns: columnsArray };
};

export default generateMockNormalTable;
