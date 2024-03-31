import React from "react";
import propTypes from "prop-types";
import { StyledAside } from "./styles";
import {
  ORIENTATION,
  ORIENTATION_LIST,
  THEME_COLOR_MODES,
  THEME_COLOR_MODES_LIST,
} from "../../helpers/consts";

function Aside({ mode, text, orientation, children, ...props }) {
  return (
    <StyledAside mode={mode} orientation={orientation}>
      {text || children}
    </StyledAside>
  );
}

Aside.propTypes = {
  text: propTypes.string,
  mode: propTypes.oneOf(THEME_COLOR_MODES_LIST),
  orientation: propTypes.oneOf(ORIENTATION_LIST),
};

Aside.defaultProps = {
  text: "",
  mode: THEME_COLOR_MODES.PRIMARY,
  orientation: ORIENTATION.RIGHT,
};

export default Aside;
