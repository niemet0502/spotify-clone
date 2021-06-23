import React from 'react'
import styled from "styled-components"
import Footer from "../components/Footer"
import Topbar from "../components/TopBar"
import Playlist from "../components/Playlist"
import Album from "../components/Album"

import {playlists, albums2, albums, playlists2} from "../data"


function Layout() {
  return (
    <LayoutContainer>
      <Topbar />
      <div className="Layout">
        <h1>Bon après-midi</h1>
        
        <div className="playlist_container">

        {playlists2.map(playlist => <Playlist image={playlist.image} active={playlist.active} title={playlist.title}   />)}
        </div>

        <div className="playlist_container">
        {playlists.map(playlist => <Playlist image={playlist.image} active={playlist.active} title={playlist.title}   />)}
        </div>
        <div className="section_container">
          <div>
            <div>
              <h1 className="section__title">Recommandations du jour</h1>
              <h5 className="section__subtitle">Inspiré par votre activité récente.</h5>
            </div>
          </div>

          <div className="album__container">

          {albums.map(album => <Album image={album.image} artiste={album.artiste} album={album.album}  />)}
          </div>

        </div>


        <div className="section_container">
          <div>
            <div>
              <h1 className="section__title">Vos artistes préférés </h1>
              <h5 className="section__subtitle"></h5>
            </div>
          </div>

          <div className="album__container">

          {albums2.map(album => <Album image={album.image} artiste={album.artiste} album={album.album} round={album.round}  />)}
          </div>

        </div>
      </div>
      <Footer/>
      
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  .playlist_container{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 17px;
  }
  .Layout{
    margin-left: 220px;
    padding: 10px 22px 15px 60px;
    margin-top: 62px;
    background-color: #1E1E1E;
    color: white;
    height: 1200px;
  }

  .Layout h1{
    font-size: 25px;
  }

  .section__title {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .section__title:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  .section__subtitle{
    margin-top: 0px;
    font-weight: 500;
    color: #b3b3b3;
  }
  flex: 2;

  .album__container{
    display: flex;
    justify-content: space-between;
  }
`;
export default Layout
