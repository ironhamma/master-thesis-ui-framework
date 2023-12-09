import DataTable from ".";
import { generateMockTable } from "../generateMockTable";

const { data: mockTableData, columns: mockTableColumns } = generateMockTable(
  50,
  50
);

export default {
  title: "DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    data: { control: "array" },
    height: { control: "number" },
    rowHeight: { control: "number" },
    colWidth: { control: "number" },
    width: { control: "number" },
    headless: { control: "boolean" },
    stickyHeader: { control: "boolean" },
  },
};

export const Default = {
  args: {
    data: mockTableData,
  },
};

export const StickyHeader = {
  args: {
    data: mockTableData,
    stickyHeader: true,
  },
};

export const Headless = {
  args: {
    data: mockTableData,
    headless: true,
  },
};
