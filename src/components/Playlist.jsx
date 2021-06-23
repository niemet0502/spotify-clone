import React from 'react'
import styled from "styled-components"
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
function Playlist({image,title,active}) {
  return (
    <PlaylistComponent>
      <img src={image} alt="" />
      <div className="playlist__name">
        {title}
      </div>
      <div className="pauseIcon__container">
        
        {active ? 
        <div className="container">
          <PauseOutlinedIcon />
        </div>
         : 
         <div className="container play__icon">
         <PlayArrowIcon  />
         </div>
        }
        
      </div>
    </PlaylistComponent>
  )
}
const PlaylistComponent = styled.div`
  height: 87px;
  width: 290px;
  border-radius: 4px;
  display: flex;
  background-color: #303030;
  box-shadow: 2px;
  border: 1px solid #303030;

  .playlist__name{
    flex: 2;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding-left: 17px;
  }

  .pauseIcon__container{
    height: 100%;
    display: flex;
    align-items: center;
  }
  .pauseIcon__container .container{
    margin: 14px;
    height: 37px;
    width: 37px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1ED760;
    border: 1px solid #1ED760;
    box-shadow: 3px;
  }
  .pauseIcon__container .container:hover{
    cursor: pointer;
  }
  img{
    border-radius: 2px 0px 0px 2px;
  }
  .play__icon{
    display: none !important;
  }

  &:hover {

    cursor: pointer;
  }

  &:hover  .play__icon{
    display: flex !important;
  }
`;
export default Playlist
