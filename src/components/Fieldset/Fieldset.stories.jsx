import Fieldset from ".";
import Checkbox from "../Checkbox";

export default {
  title: "Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
  argTypes: {
    legend: { control: "text" },
  },
};

export const Default = {
  args: {
    legend: "Fieldset example",
  },
};

export function WithContent(args) {
  return (
    <Fieldset {...args}>
      <Checkbox label="Checkbox 1" />
      <Checkbox label="Checkbox 2" />
      <Checkbox label="Checkbox 3" />
    </Fieldset>
  );
}

WithContent.argTypes = {
  legend: { control: "text" },
};

WithContent.args = {
  legend: "Fieldset example",
};
