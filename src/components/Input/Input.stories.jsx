import Input from ".";

export default {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: { control: "text" },
  },
};

export const Default = {
  args: {
    label: "Input",
    placeholder: "Type something...",
    type: "text",
  },
};

export function TextType(args) {
  return <Input {...args} />;
}

export function PasswordType(args) {
  return <Input {...args} />;
}

export function TimeType(args) {
  return <Input {...args} />;
}

export function DateType(args) {
  return <Input {...args} />;
}

TextType.args = {
  label: "Text input",
  placeholder: "Type something...",
  type: "text",
};

PasswordType.args = {
  label: "Password input",
  placeholder: "Type something...",
  type: "password",
};

TimeType.args = {
  label: "Time input",
  placeholder: "Type something...",
  type: "time",
};

DateType.args = {
  label: "Date input",
  placeholder: "Type something...",
  type: "date",
};

TextType.argTypes = {
  label: { control: "text" },
  placeholder: { control: "text" },
  type: { control: "text" },
};

PasswordType.argTypes = {
  label: { control: "text" },
  placeholder: { control: "text" },
  type: { control: "text" },
};

TimeType.argTypes = {
  label: { control: "text" },
  placeholder: { control: "text" },
  type: { control: "text" },
};

DateType.argTypes = {
  label: { control: "text" },
  placeholder: { control: "text" },
  type: { control: "text" },
};
