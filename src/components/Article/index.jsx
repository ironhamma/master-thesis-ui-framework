import React from "react";
import propTypes from "prop-types";
import { StyledArticle } from "./styles";
import {
  THEME_COLOR_MODES,
  THEME_COLOR_MODES_LIST,
} from "../../helpers/consts";

function Article({ mode, text, children, ...props }) {
  return (
    <StyledArticle mode={mode} {...props}>
      {text || children}
    </StyledArticle>
  );
}

Article.propTypes = {
  text: propTypes.string,
  mode: propTypes.oneOf(THEME_COLOR_MODES_LIST),
};

Article.defaultProps = {
  text: "",
  mode: THEME_COLOR_MODES.PRIMARY,
};

export default Article;
