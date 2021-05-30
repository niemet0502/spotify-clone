import React from 'react'
import styled from "styled-components"
import logo from "../assets/spotifyLogo.png"
function Sidebar() {
  return (
    <SidebarComponent>
      <div className="SidebarContainer">
       <img src={logo} alt="spotify-logo" />
      </div>
    </SidebarComponent>
  )
}

const SidebarComponent = styled.div`
  .SidebarContainer{
    background-color: black;
    width: 220px;
    height: 760px;
    position: sticky;
    padding: 25px 10px 0px 15px;
  }

  .SidebarContainer img{
    width: 140px;
    margin-left: 10px;
  }
`;

export default Sidebar
