import React from 'react'
import styled from "styled-components"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
function Album({image,artiste, album, round}) {
  return (
    <AlbumComponent>
      <img style={ round ? {borderRadius: "50%"}: {}} src={image} alt="" />
      <div className="container">
        <PlayArrowIcon />
      </div>
      <h2>{artiste}</h2>
      <h6>{album}</h6>
    </AlbumComponent>
  )
}

const AlbumComponent = styled.div`
  &:hover{
    cursor: pointer;
    background-color: #282828;
    transition: 0.5s;
  }
  width: 158px;
  border-radius: 2px;
  background-color: #181818;
  padding: 15px 15px 25px 15px;

  img{
    width: 158px;
    height: 150px;
    margin-bottom: 15px;
    box-shadow: 2px;
    z-index: -1;
  }

  h2{
    font-size: 19px;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  h6{
    margin-top: 2px;
    font-size: 16px;
    margin-bottom: 2px;
    font-weight: 300;
    color: #b3b3b3;
  }
  .container{
    //right: 0px;
    margin: 14px;
    margin-top: -25px;
    height: 37px;
    width: 37px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1ED760;
    border: 1px solid #1ED760;
    box-shadow: 3px;
    z-index: 4;
  }
`;

export default Album
