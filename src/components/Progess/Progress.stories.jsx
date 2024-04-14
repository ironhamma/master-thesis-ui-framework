import Progress from ".";

export default {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    max: { control: "number" },
  },
};

export const Default = {
  args: {
    value: 50,
    max: 100,
  },
};

export const ProgressBar = {
  args: {
    value: 50,
    max: 100,
    height: 30,
  },
};

export const Meter = {
  args: {
    value: 50,
    max: 100,
    height: 30,
    low: 20,
    high: 80,
    optimum: 60,
  },
};

ProgressBar.argTypes = {
  value: { control: "number" },
  max: { control: "number" },
  height: { control: "number" },
};

Meter.argTypes = {
  value: { control: "number" },
  max: { control: "number" },
  height: { control: "number" },
  low: { control: "number" },
  high: { control: "number" },
  optimum: { control: "number" },
};

ProgressBar.args = {
  value: 50,
  max: 100,
  height: 30,
};

Meter.args = {
  value: 50,
  max: 100,
  height: 30,
  low: 20,
  high: 80,
  optimum: 60,
};
