import React from "react";
import Table from "../src/components/Table";
import DataTable from "../src/components/DataTable";
import withThemeProvider from "./TestProvider";

const { render } = require("@testing-library/react");
const { generateMockTable } = require("../src/components/generateMockTable");
const {
  default: generateMockNormalTable,
} = require("../src/components/generateMockNormalTable");

const ROW = 10000;
const COL = 20;

const { data: mockNormalData, columns: mockNormalCols } =
  generateMockNormalTable(ROW, COL);

const { data: mockVirtualData, columns: mockVirtualColumns } =
  generateMockTable(ROW, COL, false);

describe("Table Performance and Memory usage Test", () => {
  it("should measure rendering time and memory usage for virtualized table", () => {
    const initialMemory = process.memoryUsage().heapUsed;
    const start = performance.now();
    render(
      withThemeProvider(
        <DataTable columns={mockVirtualColumns} data={mockVirtualData} />,
      ),
    );
    const end = performance.now();
    const finalMemory = process.memoryUsage().heapUsed;
    const renderTime = end - start;
    const memoryUsage = finalMemory - initialMemory;

    expect(renderTime).toBeLessThan(200); // ms
    expect(memoryUsage).toBeLessThan(20000000); // bytes
  });
  it("should measure rendering time and memory usage for traditional table", () => {
    const initialMemory = process.memoryUsage().heapUsed;
    const start = performance.now();
    render(
      withThemeProvider(
        <Table columns={mockNormalCols} data={mockNormalData} />,
      ),
    );
    const end = performance.now();
    const finalMemory = process.memoryUsage().heapUsed;
    const renderTime = end - start;
    const memoryUsage = finalMemory - initialMemory;

    expect(renderTime).toBeGreaterThan(200); // ms
    expect(memoryUsage).toBeGreaterThan(20000000); // bytes
  });
});
