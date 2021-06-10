import React from 'react'
import styled from "styled-components"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function TopBar() {
  return (
    <TopbarContainer>
      <div className="Topbar">
        I'm Topbar
      </div>
    </TopbarContainer>
  )
}

const TopbarContainer = styled.div`
  .Topbar{
    background-color: yellow;
    margin-left: 220px;
    padding: 12px 20px 12px 60px;
  }
`;

export default TopBar
