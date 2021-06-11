import React from 'react'
import styled from "styled-components"
import Footer from "../components/Footer"
import Topbar from "../components/TopBar"
import Playlist from "../components/Playlist"

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
          <h1 className="section__title">Recommandations du jour</h1>
          <h5 className="section__subtitle">Inspiré par votre activité récente.</h5>
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
    height: 800px;
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
`;
export default Layout

const playlists = [
  {
    id: 1,
    image: "https://images.genius.com/dc3dfa6cb678eef61df192ecd1dca89e.959x959x1.jpg",
    title: 'Epiloque',
    active: false
  },{
    id: 2,
    image: "https://images.genius.com/6cb775b3bfdcda314da8418eab1f22fd.1000x1000x1.jpg",
    title: 'NEPTUNE TERMINUS',
    active: false
  },{
    id: 1,
    image: "https://static.booska-p.com/images/albums/destin.jpg",
    title: 'DESTIN',
    active: false
  }
  ,{
    id: 1,
    image: "https://www.booska-p.com/up/images/news/nekfeu-feu-cover.jpg",
    title: 'FEU',
    active: false
  }
]

const playlists2 = [
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/4-44_album_cover.png/330px-4-44_album_cover.png",
    title: '4:44',
    active: false
  },
  {
    id: 2,
    image: "https://images.genius.com/dedd2737025606423d012b43b3a3b9a0.1000x1000x1.jpg",
    title: 'QALF Infinity',
    active: true
  },
  {
    id: 3,
    image: "https://images.genius.com/503a7ac2c9517a20226fd720f1ae8bbf.1000x1000x1.jpg",
    title: 'Nekfeu',
    active: false
  },{
    id: 4,
    image: "https://img.discogs.com/TI1r1glZNV_04dG1UBPD7tyTkcM=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-16007655-1601777429-9681.jpeg.jpg",
    title: 'Apollo',
    active: false
  }
]