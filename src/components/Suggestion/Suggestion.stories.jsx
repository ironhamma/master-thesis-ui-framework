import Suggestion from ".";
import { THEME_COLOR_MODES_LIST } from "../../helpers/consts";

export default {
  title: "Suggestion",
  component: Suggestion,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    mode: { control: "select", options: THEME_COLOR_MODES_LIST },
    suggestions: { control: "array" },
  },
};

export const Default = {
  args: {
    label: "Suggestion",
    suggestions: ["Option 1", "Option 2", "Option 3"],
  },
};
