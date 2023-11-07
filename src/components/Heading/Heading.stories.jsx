import Heading from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    type: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
    color: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Heading1 = {
  args: {
    text: "H1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "h1",
    color: "",
  },
};

export const Heading2 = {
  args: {
    text: "H2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "h2",
    color: "",
  },
};

export const Heading3 = {
  args: {
    text: "H3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "h3",
    color: "",
  },
};

export const Heading4 = {
  args: {
    text: "H4 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "h4",
    color: "",
  },
};

export const Heading5 = {
  args: {
    text: "H5 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "h5",
    color: "",
  },
};

export const Heading6 = {
  args: {
    text: "H6 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "h6",
    color: "",
  },
};
