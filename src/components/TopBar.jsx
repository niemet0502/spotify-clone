import React from 'react'
import styled from "styled-components"

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
  }
`;

export default TopBar
