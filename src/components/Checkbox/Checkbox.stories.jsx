import Checkbox from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
  },
};

export const Default = {
  args: {
    label: "Checkbox",
    checked: false,
  },
};

export function WithLabel(args) {
  return <Checkbox {...args} />;
}

export function WithoutLabel(args) {
  return <Checkbox {...args} />;
}

WithLabel.argTypes = {
  label: { control: "text" },
  checked: { control: "boolean" },
};

WithoutLabel.argTypes = {
  label: { control: false },
  checked: { control: "boolean" },
};

WithLabel.args = {
  label: "Checkbox",
  checked: false,
};
