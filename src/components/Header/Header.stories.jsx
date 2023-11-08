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
    title: "Header with navigation",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
  },
};

export const WithLogo = {
  args: {
    title: "Header with logo",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
    logoSrc: "/react.svg",
  },
};

export const Modular = {
  args: {
    title: "Header with logo",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
    logoSrc: "/react.svg",
  },
  argTypes: {
    secondaryTitle: { control: "text" },
  },
  render: (args) => (
    <Header sticky={args.sticky}>
      <Header.Title title={args.title || "Lorem ipsum"} />
      <Header.Logo logoSrc={args.logoSrc} />
      <Header.Navigation items={args.items} style={{ marginLeft: "auto" }} />
      <Header.Title title={args.secondaryTitle || "Lorem ipsum"} />
    </Header>
  ),
};
