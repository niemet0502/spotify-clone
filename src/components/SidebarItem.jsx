import React from 'react';
import styled from 'styled-components';

function SidebarItem({ Icon, text, active }) {
  return (
    <SidebarItemContainer>
      <a href="" className={`link ${active == 'true' ? 'active' : 'unactive'}`}>
        {Icon && <Icon />}
        {text}
      </a>
    </SidebarItemContainer>
  );
}
const SidebarItemContainer = styled.a`
 
  a {
    display: flex;
    align-items: center;
    margin-left: -2px;
    text-decoration: none;
    font-size: 14px;
    color: #b3b3b3;
    padding: 3px 3px 3px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  a .MuiSvgIcon-root{
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

   .active{
    color : white !important;
    background-color: #282828 !important;
  }

  a:hover{
    color : white !important;
  }

`;
export default SidebarItem;
