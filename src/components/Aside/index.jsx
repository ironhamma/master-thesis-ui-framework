import React from "react";
import PropTypes from "prop-types";
import { StyledAside } from "./styles";
import {
  ORIENTATION,
  ORIENTATION_LIST,
  THEME_COLOR_MODES,
  THEME_COLOR_MODES_LIST,
} from "../../helpers/consts";

const Aside = ({ mode, text, orientation, children, ...props }) => {
  return (
    <StyledAside mode={mode} orientation={orientation}>
      {text || children}
    </StyledAside>
  );
};

Aside.propTypes = {
  text: PropTypes.string,
  mode: PropTypes.oneOf(THEME_COLOR_MODES_LIST),
  orientation: PropTypes.oneOf(ORIENTATION_LIST),
};

Aside.defaultProps = {
  text: "",
  mode: THEME_COLOR_MODES.PRIMARY,
  orientation: ORIENTATION.RIGHT,
};

export default Aside;
