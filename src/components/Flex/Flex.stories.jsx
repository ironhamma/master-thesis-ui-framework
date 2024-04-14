import Flex from ".";
import Fieldset from "../Fieldset";

export default {
  title: "Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["row", "column"],
      },
    },
  },
};

export const Default = {
  args: {
    direction: "row",
  },
};

export function Horizontal(args) {
  return (
    <Flex {...args}>
      <Fieldset legend="Fieldset 1" />
      <Fieldset legend="Fieldset 2" />
      <Fieldset legend="Fieldset 3" />
    </Flex>
  );
}

export function Vertical(args) {
  return (
    <Flex {...args}>
      <Fieldset legend="Fieldset 1" />
      <Fieldset legend="Fieldset 2" />
      <Fieldset legend="Fieldset 3" />
    </Flex>
  );
}

Default.argTypes = {
  direction: { control: "select", options: ["column", "row"] },
};

Horizontal.argTypes = {
  direction: { control: "select", options: ["column", "row"] },
};

Horizontal.args = {
  direction: "row",
};

Vertical.argTypes = {
  direction: { control: "select", options: ["column", "row"] },
};

Vertical.args = {
  direction: "column",
};
