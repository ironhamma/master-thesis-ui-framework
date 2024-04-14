import Select from ".";

export default {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    options: { control: "array" },
    grouped: { control: "boolean" },
  },
};

export const Default = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export function SingleSelect(args) {
  return <Select {...args} />;
}

export function GroupedSelect(args) {
  return <Select {...args} />;
}

SingleSelect.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};

GroupedSelect.args = {
  options: [
    { label: "Group 1", options: ["Option 1", "Option 2", "Option 3"] },
    { label: "Group 2", options: ["Option 4", "Option 5", "Option 6"] },
  ],
};

GroupedSelect.argTypes = {
  options: { control: false },
  grouped: { control: "boolean" },
};
