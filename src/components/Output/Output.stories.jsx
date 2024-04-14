import Output from ".";

export default {
  title: "Output",
  component: Output,
  tags: ["layout"],
  argTypes: {
    value: { control: "text" },
  },
};

export const Default = {
  args: {
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quae facilis perferendis nihil voluptatem earum iste ipsa dolores cupiditate omnis alias, incidunt totam tempore assumenda illo asperiores, perspiciatis repellendus deleniti!",
  },
};
