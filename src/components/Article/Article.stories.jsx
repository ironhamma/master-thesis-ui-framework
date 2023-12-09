import {
  ORIENTATION_LIST,
  THEME_COLOR_MODES,
  THEME_COLOR_MODES_LIST,
} from "../../helpers/consts";
import Aside from "../Aside";
import Article from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Article",
  component: Article,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    mode: { control: "select", options: THEME_COLOR_MODES_LIST },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    text: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
    officiis cum quas, consequatur modi maxime aspernatur eaque magnam odio
    totam deserunt aut id harum dolore sapiente ex similique, corrupti esse
    eligendi! Impedit tempora non consequuntur tenetur quo reiciendis
    possimus beatae. Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Doloremque officiis cum quas, consequatur modi maxime aspernatur
    eaque magnam odio totam deserunt aut id harum dolore sapiente ex
    similique, corrupti esse eligendi! Impedit tempora non consequuntur
    tenetur quo reiciendis possimus beatae. Lorem ipsum dolor, sit amet
    consectetur adipisicing elit. Doloremque officiis cum quas, consequatur
    modi maxime aspernatur eaque magnam odio totam deserunt aut id harum
    dolore sapiente ex similique, corrupti esse eligendi! Impedit tempora
    non consequuntur tenetur quo reiciendis possimus beatae.
    `,
    mode: THEME_COLOR_MODES.PRIMARY,
  },
};

export const WithAside = (args) => (
  <Article mode={args.mode}>
    <p>
      {args.text ||
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
      officiis cum quas, consequatur modi maxime aspernatur eaque magnam odio
      totam deserunt aut id harum dolore sapiente ex similique, corrupti esse
      eligendi! Impedit tempora non consequuntur tenetur quo reiciendis possimus
      beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Doloremque officiis cum quas, consequatur modi maxime aspernatur eaque
      magnam odio totam deserunt aut id harum dolore sapiente ex similique,
      corrupti esse eligendi! Impedit tempora non consequuntur tenetur quo
      reiciendis possimus beatae. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Doloremque officiis cum quas, consequatur modi maxime
      aspernatur eaque magnam odio totam deserunt aut id harum dolore sapiente
      ex similique, corrupti esse eligendi! Impedit tempora non consequuntur
      tenetur quo reiciendis possimus beatae.`}
    </p>
    <Aside orientation={args.orientation} mode={args.mode}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
      officiis cum quas, consequatur modi maxime aspernatur eaque magnam odio
      totam deserunt aut id harum dolore sapiente ex similique, corrupti esse
      eligendi!
    </Aside>
  </Article>
);

WithAside.argTypes = {
  orientation: { control: "select", options: ORIENTATION_LIST },
};
