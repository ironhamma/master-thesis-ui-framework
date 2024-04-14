import Table from ".";
import { THEME_COLOR_MODES_LIST } from "../../helpers/consts";

export default {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "array" },
    data: { control: "array" },
    mode: { control: "select", options: THEME_COLOR_MODES_LIST },
  },
};

export const Default = {
  args: {
    columns: ["Column 1", "Column 2", "Column 3"],
    data: [
      { "Column 1": "Data 1", "Column 2": "Data 2", "Column 3": "Data 3" },
      { "Column 1": "Data 4", "Column 2": "Data 5", "Column 3": "Data 6" },
      { "Column 1": "Data 7", "Column 2": "Data 8", "Column 3": "Data 9" },
    ],
  },
};

export const Simple = {
  args: {
    data: [
      { "Column 1": "Data 1", "Column 2": "Data 2" },
      { "Column 1": "Data 3", "Column 2": "Data 4" },
      { "Column 1": "Data 5", "Column 2": "Data 6" },
    ],
  },
};

export const WithHeader = {
  args: {
    columns: ["Column 1", "Column 2"],
    data: [
      { "Column 1": "Data 1", "Column 2": "Data 2" },
      { "Column 1": "Data 3", "Column 2": "Data 4" },
      { "Column 1": "Data 5", "Column 2": "Data 6" },
    ],
  },
};

export const WithFooter = {
  args: {
    columns: ["Column 1", "Column 2"],
    data: [
      { "Column 1": "Data 1", "Column 2": "Data 2" },
      { "Column 1": "Data 3", "Column 2": "Data 4" },
      { "Column 1": "Data 5", "Column 2": "Data 6" },
    ],
    footer: { label: "Total", value: "3" },
  },
};

export const WithCaption = {
  args: {
    caption: "Table Caption",
    columns: ["Column 1", "Column 2"],
    data: [
      { "Column 1": "Data 1", "Column 2": "Data 2" },
      { "Column 1": "Data 3", "Column 2": "Data 4" },
      { "Column 1": "Data 5", "Column 2": "Data 6" },
    ],
  },
};

export const WithColgroups = {
  args: {
    colgroups: [1, 2],
    columns: ["Column 1", "Column 2"],
    data: [
      { "Column 1": "Data 1", "Column 2": "Data 2" },
      { "Column 1": "Data 3", "Column 2": "Data 4" },
      { "Column 1": "Data 5", "Column 2": "Data 6" },
    ],
  },
};

export const Complete = {
  args: {
    caption: "Table Caption",
    colgroups: [1, 2],
    columns: ["Column 1", "Column 2"],
    data: [
      { "Column 1": "Data 1", "Column 2": "Data 2" },
      { "Column 1": "Data 3", "Column 2": "Data 4" },
      { "Column 1": "Data 5", "Column 2": "Data 6" },
    ],
    footer: { label: "Total", value: "3" },
  },
};

Simple.argTypes = {
  data: { control: "array" },
  columns: { control: false },
};

WithHeader.argTypes = {
  data: { control: "array" },
  columns: { control: "array" },
};

WithFooter.argTypes = {
  data: { control: "array" },
  columns: { control: "array" },
  footer: { control: "object" },
};

WithCaption.argTypes = {
  caption: { control: "text" },
  data: { control: "array" },
  columns: { control: "array" },
};

WithColgroups.argTypes = {
  colgroups: { control: "array" },
  data: { control: "array" },
  columns: { control: "array" },
};

Complete.argTypes = {
  caption: { control: "text" },
  colgroups: { control: "array" },
  data: { control: "array" },
  columns: { control: "array" },
  footer: { control: "object" },
};
