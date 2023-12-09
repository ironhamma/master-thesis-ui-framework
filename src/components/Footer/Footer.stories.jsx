import Footer from ".";

export default {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    logoSrc: { control: "text" },
    copyRight: { control: "text" },
  },
};

export const Default = {
  args: {
    logoSrc: "react.svg",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
    copyRight: "Example.inc ©",
  },
};

export const OnlyLogo = {
  args: {
    logoSrc: "react.svg",
  },
};

export const LogoWithNavigation = {
  args: {
    logoSrc: "react.svg",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
  },
};

export const WithContacts = {
  args: {
    logoSrc: "react.svg",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
    contact: {
      author: "John Doe",
      address: "Street 1, City, Country",
      email: "example@example.com",
      phone: "+36 123-4567",
    },
  },
};

export const Modular = {
  args: {
    logoSrc: "react.svg",
    copyRight: "Example.inc ©",
    items: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
    secondaryItems: [
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
      { name: "Link", href: "#" },
    ],
    contact: {
      author: "John Doe",
      address: "Street 1, City, Country",
      email: "example@example.com",
      phone: "+36 123-4567",
    },
  },
  argTypes: {},
  render: (args) => (
    <Footer>
      <Footer.Secondary contact={args.contact}></Footer.Secondary>
      <Footer.Primary>
        <Footer.Logo logoSrc={args.logoSrc} />
        <Footer.CopyRight copyRight={args.copyRight} />
        <Footer.Navigation items={args.items} />
        <Footer.Navigation items={args.secondaryItems} />
      </Footer.Primary>
    </Footer>
  ),
};
