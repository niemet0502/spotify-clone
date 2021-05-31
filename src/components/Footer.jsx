import React from 'react'
import styled from "styled-components"
function Footer() {
  return (
    <FooterContainer>
      <div className="Footer">
        I'm a footer  
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  .Footer{
    width: 100%;
    background-color:rgb(24,24,24);
    z-index: 2;
    position: fixed;
    bottom: 0%;
    height: 15%;
    margin-left: -1px;
    border-top: 0.3px solid grey;
  }
`;

export default Footer
