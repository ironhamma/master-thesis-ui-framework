import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledHeader,
  StyledHeaderTitle,
  StyledLogo,
  StyledNav,
  StyledNavA,
  StyledNavUl,
  StyledNavUlLi,
} from "./styles";

const Header = ({ sticky, logoSrc, title, items, children, ...props }) => {
  const subComponentList = Object.keys(Header);
  const [isModular, setIsModular] = useState(false);

  useEffect(() => {
    subComponentList.forEach((key) => {
      return React.Children.map(children, (child) => {
        if (child && child.type && child.type.name && !isModular) {
          setIsModular(true);
        }
      });
    });
  }, []);

  if (!isModular) {
    return (
      <StyledHeader sticky={sticky} {...props}>
        {logoSrc && logoSrc.length !== 0 && <StyledLogo src={logoSrc} />}
        {title && <StyledHeaderTitle>{title}</StyledHeaderTitle>}
        {items && items.length !== 0 && (
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
  }

  return (
    <StyledHeader sticky={sticky} {...props}>
      {children}
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

const Logo = ({ logoSrc, children, ...props }) => {
  return (
    <div {...props}>
      {logoSrc && logoSrc.length !== 0 && <StyledLogo src={logoSrc} />}
      {children}
    </div>
  );
};

Logo.propTypes = {
  logoSrc: PropTypes.string,
};

Logo.defaultProps = {
  logoSrc: "",
};

Header.Logo = Logo;

const Title = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      {title && title.length !== 0 && (
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
      )}
      {children}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: "",
};

Header.Title = Title;

const Navigation = ({ items, children, ...props }) => {
  return (
    <div {...props}>
      {items && items.length !== 0 && (
        <StyledNav>
          <StyledNavUl>
            {items &&
              items.map((item) => (
                <StyledNavUlLi>
                  <StyledNavA href={item.href}>{item.name}</StyledNavA>
                </StyledNavUlLi>
              ))}
          </StyledNavUl>
        </StyledNav>
      )}
      {children}
    </div>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

Navigation.defaultProps = {
  items: [],
};

Header.Navigation = Navigation;
