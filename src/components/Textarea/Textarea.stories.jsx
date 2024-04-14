import Textarea from ".";
import { THEME_COLOR_MODES_LIST } from "../../helpers/consts";

export default {
  title: "Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    rows: { control: "number" },
    cols: { control: "number" },
    resizeable: { control: "boolean" },
  },
};

export const Default = {
  args: {
    value:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quae facilis perferendis nihil voluptatem earum iste ipsa dolores cupiditate omnis alias, incidunt totam tempore assumenda illo asperiores, perspiciatis repellendus deleniti!",
  },
};

export const NotResizeable = {
  args: {
    value:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quae facilis perferendis nihil voluptatem earum iste ipsa dolores cupiditate omnis alias, incidunt totam tempore assumenda illo asperiores, perspiciatis repellendus deleniti!",
    cols: 20,
    rows: 20,
    resizeable: false,
  },
};

export const Resizeable = {
  args: {
    value:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quae facilis perferendis nihil voluptatem earum iste ipsa dolores cupiditate omnis alias, incidunt totam tempore assumenda illo asperiores, perspiciatis repellendus deleniti!",
    cols: 20,
    rows: 20,
    resizeable: true,
  },
};

NotResizeable.argTypes = {
  value: { control: "text" },
  rows: { control: "number" },
  cols: { control: "number" },
  resizeable: { control: "boolean" },
};

Resizeable.argTypes = {
  value: { control: "text" },
  rows: { control: "number" },
  cols: { control: "number" },
  resizeable: { control: "boolean" },
};
