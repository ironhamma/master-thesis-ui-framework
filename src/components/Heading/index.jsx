import React from "react";
import propTypes from "prop-types";
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledHeading6,
} from "./styles";

const Heading = ({ text, type, color, children, ...props }) => {
  switch (type) {
    case "h1":
      return (
        <StyledHeading1 {...props} style={{ color, ...props.style }}>
          {text || children}
        </StyledHeading1>
      );
    case "h2":
      return (
        <StyledHeading2 {...props} style={{ color, ...props.style }}>
          {text || children}
        </StyledHeading2>
      );
    case "h3":
      return (
        <StyledHeading3 {...props} style={{ color, ...props.style }}>
          {text || children}
        </StyledHeading3>
      );
    case "h4":
      return (
        <StyledHeading4 {...props} style={{ color, ...props.style }}>
          {text || children}
        </StyledHeading4>
      );
    case "h5":
      return (
        <StyledHeading5 {...props} style={{ color, ...props.style }}>
          {text || children}
        </StyledHeading5>
      );
    case "h6":
      return (
        <StyledHeading6 {...props} style={{ color, ...props.style }}>
          {text || children}
        </StyledHeading6>
      );
    default:
      return (
        <StyledHeading1 {...props} style={{ color, ...props.style }}>
          {text || children}
        </StyledHeading1>
      );
  }
};

Heading.propTypes = {
  type: propTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  text: propTypes.string,
  color: propTypes.string,
};

Heading.defaultProps = {
  type: "h1",
  text: "",
  color: "",
};

export default Heading;
