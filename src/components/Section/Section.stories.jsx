import Section from ".";
import Article from "../Article";
import Aside from "../Aside";

export default {
  title: "Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Section title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias consectetur architecto minus, dolore suscipit. Architecto necessitatibus autem neque ex animi ducimus dolor sit repudiandae! Quia modi culpa provident eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias consectetur architecto minus, dolore suscipit. Architecto necessitatibus autem neque ex animi ducimus dolor sit repudiandae! Quia modi culpa provident eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias consectetur architecto minus, dolore suscipit. Architecto necessitatibus autem neque ex animi ducimus dolor sit repudiandae! Quia modi culpa provident eos!",
  },
};

export const WithoutTitle = {
  args: {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias consectetur architecto minus, dolore suscipit. Architecto necessitatibus autem neque ex animi ducimus dolor sit repudiandae! Quia modi culpa provident eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias consectetur architecto minus, dolore suscipit. Architecto necessitatibus autem neque ex animi ducimus dolor sit repudiandae! Quia modi culpa provident eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias consectetur architecto minus, dolore suscipit. Architecto necessitatibus autem neque ex animi ducimus dolor sit repudiandae! Quia modi culpa provident eos!",
  },
};

export const Custom = {
  args: {
    title: "Articles",
  },
  render: (args) => (
    <Section title={args.title}>
      <Article>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          officiis cum quas, consequatur modi maxime aspernatur eaque magnam
          odio totam deserunt aut id harum dolore sapiente ex similique,
          corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
          reiciendis possimus beatae. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloremque officiis cum quas, consequatur modi
          maxime aspernatur eaque magnam odio totam deserunt aut id harum dolore
          sapiente ex similique, corrupti esse eligendi! Impedit tempora non
          consequuntur tenetur quo reiciendis possimus beatae. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Doloremque officiis cum
          quas, consequatur modi maxime aspernatur eaque magnam odio totam
          deserunt aut id harum dolore sapiente ex similique, corrupti esse
          eligendi! Impedit tempora non consequuntur tenetur quo reiciendis
          possimus beatae.
        </p>
        <Aside>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          officiis cum quas, consequatur modi maxime aspernatur eaque magnam
          odio totam deserunt aut id harum dolore sapiente ex similique,
          corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
          reiciendis possimus beatae.
        </Aside>
      </Article>
      <Article>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          officiis cum quas, consequatur modi maxime aspernatur eaque magnam
          odio totam deserunt aut id harum dolore sapiente ex similique,
          corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
          reiciendis possimus beatae. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloremque officiis cum quas, consequatur modi
          maxime aspernatur eaque magnam odio totam deserunt aut id harum dolore
          sapiente ex similique, corrupti esse eligendi! Impedit tempora non
          consequuntur tenetur quo reiciendis possimus beatae. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Doloremque officiis cum
          quas, consequatur modi maxime aspernatur eaque magnam odio totam
          deserunt aut id harum dolore sapiente ex similique, corrupti esse
          eligendi! Impedit tempora non consequuntur tenetur quo reiciendis
          possimus beatae.
        </p>
        <Aside>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          officiis cum quas, consequatur modi maxime aspernatur eaque magnam
          odio totam deserunt aut id harum dolore sapiente ex similique,
          corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
          reiciendis possimus beatae.
        </Aside>
      </Article>
    </Section>
  ),
};
