import Hero from ".";
import Heading from "../Heading";

export default {
  title: "Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
  },
};

export const Default = {
  args: {
    image: "bg.jpg",
  },
};

export const WithText = {
  args: {
    image: "bg.jpg",
  },
  render: (args) => (
    <Hero image={args.image}>
      <Heading color="#fff" type="h1" style={{ margin: 0 }}>
        Lorem ipsum
      </Heading>
      <Heading color="#fff" type="h3" style={{ margin: 0 }}>
        dolor sit amet
      </Heading>
    </Hero>
  ),
};

export const WithVideo = {
  args: {
    video: "video/example.mp4",
  },
  render: (args) => (
    <Hero video={args.video}>
      <Heading color="#fff" type="h1" style={{ margin: 0 }}>
        Example with video
      </Heading>
    </Hero>
  ),
};
