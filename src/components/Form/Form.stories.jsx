import Form from ".";
import Button from "../Button";
import Input from "../Input";

export default {
  title: "Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submit" },
  },
};

export const Default = {};

export const WithChildren = {
  args: {
    children: (
      <>
        <Input label="Name" />
        <Input label="Email" />
        <Button type="submit" disabled>
          Submit
        </Button>
      </>
    ),
  },
};
