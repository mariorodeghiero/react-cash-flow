import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #aaaaaa;
  text-align: center;
  padding: 10px;
  background-color: #ffffff;
`;
const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <span role="img" aria-label="license symbol">
          ⚖️
        </span>
        MIT License
      </FooterStyle>
    </div>
  );
};

export default Footer;
