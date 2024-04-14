import Colorpicker from ".";

export default {
  title: "Colorpicker",
  component: Colorpicker,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

export const Default = {
  args: {
    color: "#ff0000",
  },
};

export function WithLabel(args) {
  return <Colorpicker {...args} />;
}

export function WithoutLabel(args) {
  return <Colorpicker {...args} />;
}

WithoutLabel.args = {
  label: "",
};

WithLabel.args = {
  label: "Choose a color",
};

WithLabel.argTypes = {
  label: { control: "text" },
};

WithoutLabel.argTypes = {
  label: { control: false },
};
