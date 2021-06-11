import React from 'react'
import styled from "styled-components"
function Album({image,artiste, album}) {
  return (
    <AlbumComponent>
      <img src={image} alt="" />
      <h2>{artiste}</h2>
      <h6>{album}</h6>
    </AlbumComponent>
  )
}

const AlbumComponent = styled.div`
  width: 158px;
  border-radius: 2px;
  background-color: #181818;
  padding: 15px 15px 25px 15px;

  img{
    width: 158px;
    height: 150px;
    margin-bottom: 15px;
    box-shadow: 2px;
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
`;

export default Album
