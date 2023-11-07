import Header from ".";

export default {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    logoSrc: { control: "text" },
    title: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Header",
  },
};

export const WithNavElements = {
  args: {
    title: "Header",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
  },
};
