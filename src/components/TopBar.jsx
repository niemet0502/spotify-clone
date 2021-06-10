import React from 'react'
import styled from "styled-components"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function TopBar() {
  return (
    <TopbarContainer>
      <div className="Topbar">
       <div className="Topbar__icons">
          <div className="icon_container">
            <ArrowBackIosIcon />
          </div>
          <div className="icon_container">
            <ArrowForwardIosIcon />
          </div>
       </div>
      </div>
    </TopbarContainer>
  )
}

const TopbarContainer = styled.div`
  .Topbar{
    background-color: #1E1E1E;
    margin-left: 220px;
    padding: 15px 20px 15px 60px;
  }
  .Topbar__icons{
    display: flex;
  }

  .Topbar__icons .icon_container:nth-child(1){
    margin-right: 16px;
    padding-left: 10px;
  }
  .icon_container{
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50%;
  }

  .icon_container svg{
    font-size: 23px;
    fill: #b3b3b3;
  }
  .icon_container:hover{
    cursor: pointer;
    color: white;
  }
`;

export default TopBar
