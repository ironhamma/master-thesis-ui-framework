import React from "react";
import PropTypes from "prop-types";
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledNav,
  StyledNavA,
  StyledNavUl,
  StyledNavUlLi,
} from "./styles";

const Header = ({ sticky, logoSrc, title, items, ...props }) => {
  return (
    <StyledHeader sticky={sticky} {...props}>
      {title && <StyledHeaderTitle>{title}</StyledHeaderTitle>}
      {items.length !== 0 && (
        <StyledNav>
          <StyledNavUl>
            {items.map((item) => (
              <StyledNavUlLi>
                <StyledNavA href={item.href}>{item.name}</StyledNavA>
              </StyledNavUlLi>
            ))}
          </StyledNavUl>
        </StyledNav>
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  sticky: PropTypes.bool,
  logoSrc: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

Header.defaultProps = {
  title: "",
  sticky: false,
  logoSrc: "",
  items: [],
};

export default Header;
