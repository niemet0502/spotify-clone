import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SidebarItem({ Icon, text, active }) {
  return (
    <SidebarItemContainer>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" className={`link ${active ? 'active' : 'unactive'}`}>
        {Icon && <Icon />}
        {text}
      </a>
    </SidebarItemContainer>
  );
}

SidebarItem.propTypes = {
  Icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

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

  a .MuiSvgIcon-root {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  .active {
    color: white !important;
    background-color: #282828 !important;
  }

  a:hover {
    color: white !important;
  }
`;

export default SidebarItem;
