import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  StyledFooterCopyR,
  StyledFooter,
  StyledFooterA,
  StyledFooterLogo,
  StyledFooterNav,
  StyledFooterNavUl,
  StyledFooterNavUlLi,
  StyledFooterContainer,
  StyledSecondaryFooter,
  StyledFooterContactText,
  StyledFooterContactLink,
} from "./styles";

const Footer = ({ contact, logoSrc, items, copyRight, children, ...props }) => {
  const subComponentList = Object.keys(Footer);
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
      <StyledFooterContainer>
        {contact && (
          <StyledSecondaryFooter>
            {contact.author && contact.author.length !== 0 && (
              <StyledFooterContactText>
                {contact.author}
              </StyledFooterContactText>
            )}
            {contact.address && contact.address.length !== 0 && (
              <StyledFooterContactText>
                {contact.address}
              </StyledFooterContactText>
            )}
            {contact.email && contact.email.length !== 0 && (
              <StyledFooterContactLink href={`mailto:${contact.email}`}>
                {contact.email}
              </StyledFooterContactLink>
            )}
            {contact.phone && contact.phone.length !== 0 && (
              <StyledFooterContactLink href={`tel:${contact.phone}`}>
                {contact.phone}
              </StyledFooterContactLink>
            )}
          </StyledSecondaryFooter>
        )}
        <StyledFooter {...props}>
          {logoSrc && logoSrc.length !== 0 && (
            <StyledFooterLogo src={logoSrc} />
          )}
          {copyRight && copyRight.length !== 0 && (
            <StyledFooterCopyR>{copyRight}</StyledFooterCopyR>
          )}
          {items && items.length !== 0 && (
            <StyledFooterNav>
              <StyledFooterNavUl>
                {items.map((item) => (
                  <StyledFooterNavUlLi>
                    <StyledFooterA href={item.href}>{item.name}</StyledFooterA>
                  </StyledFooterNavUlLi>
                ))}
              </StyledFooterNavUl>
            </StyledFooterNav>
          )}
        </StyledFooter>
      </StyledFooterContainer>
    );
  }

  return (
    <StyledFooterContainer modular {...props}>
      {children}
    </StyledFooterContainer>
  );
};

Footer.propTypes = {
  logoSrc: PropTypes.string,
  copyRight: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  contact: PropTypes.shape({
    author: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

Footer.defaultProps = {
  logoSrc: "",
  copyRight: "",
  items: [],
  contact: null,
};

export default Footer;

const Logo = ({ logoSrc, children, ...props }) => {
  return (
    <div {...props}>
      {logoSrc && logoSrc.length !== 0 && <StyledFooterLogo src={logoSrc} />}
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

Footer.Logo = Logo;

const Navigation = ({ items, children, ...props }) => {
  return (
    <div {...props}>
      {items && items.length !== 0 && (
        <StyledFooterNav>
          <StyledFooterNavUl>
            {items &&
              items.map((item) => (
                <StyledFooterNavUlLi>
                  <StyledFooterA href={item.href}>{item.name}</StyledFooterA>
                </StyledFooterNavUlLi>
              ))}
          </StyledFooterNavUl>
        </StyledFooterNav>
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

Footer.Navigation = Navigation;

const CopyRight = ({ copyRight, children, ...props }) => {
  return (
    <div {...props}>
      {copyRight && copyRight.length !== 0 && (
        <StyledFooterCopyR>{copyRight}</StyledFooterCopyR>
      )}
      {children}
    </div>
  );
};

CopyRight.propTypes = {
  copyRight: PropTypes.string,
};

CopyRight.defaultProps = {
  copyRight: "",
};

Footer.CopyRight = CopyRight;

const Secondary = ({ contact, children, ...props }) => {
  return (
    <div {...props}>
      {contact && (
        <StyledSecondaryFooter>
          {contact.author && contact.author.length !== 0 && (
            <StyledFooterContactText>{contact.author}</StyledFooterContactText>
          )}
          {contact.address && contact.address.length !== 0 && (
            <StyledFooterContactText>{contact.address}</StyledFooterContactText>
          )}
          {contact.email && contact.email.length !== 0 && (
            <StyledFooterContactLink href={`mailto:${contact.email}`}>
              {contact.email}
            </StyledFooterContactLink>
          )}
          {contact.phone && contact.phone.length !== 0 && (
            <StyledFooterContactLink href={`tel:${contact.phone}`}>
              {contact.phone}
            </StyledFooterContactLink>
          )}
        </StyledSecondaryFooter>
      )}
      {children}
    </div>
  );
};

Secondary.propTypes = {
  contact: PropTypes.shape({
    author: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

Secondary.defaultProps = {
  contact: null,
};

Footer.Secondary = Secondary;

const Primary = ({ children, ...props }) => {
  return (
    <StyledFooter modular {...props}>
      {children}
    </StyledFooter>
  );
};

Primary.propTypes = {};

Primary.defaultProps = {};

Footer.Primary = Primary;
