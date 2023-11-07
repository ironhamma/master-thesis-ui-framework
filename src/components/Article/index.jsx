import React from "react";
import PropTypes from "prop-types";
import { StyledArticle } from "./styles";
import {
  THEME_COLOR_MODES,
  THEME_COLOR_MODES_LIST,
} from "../../helpers/consts";

const Article = ({ mode, text, children, ...props }) => {
  return (
    <StyledArticle mode={mode} {...props}>
      {text || children}
    </StyledArticle>
  );
};

Article.propTypes = {
  text: PropTypes.string,
  mode: PropTypes.oneOf(THEME_COLOR_MODES_LIST),
};

Article.defaultProps = {
  text: "",
  mode: THEME_COLOR_MODES.PRIMARY,
};

export default Article;
