import React from 'react'
import styled from "styled-components"
import logo from "../assets/spotifyLogo.png"
import SidebarItem from "./SidebarItem"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
function Sidebar() {

  const playlists = [
    {
      id: 1,
      title: 'Sad'
    },
    {
      id: 2,
      title: 'Tired'
    },
    {
      id: 3,
      title: 'Nija'
    },{
      id: 4,
      title: 'Rap FR'
    },{
      id: 5,
      title: 'Drill'
    },{
      id: 6,
      title: 'Reap US '
    },{
      id: 7,
      title: 'Latino'
    }
  ]

  return (
    <SidebarComponent>
      <div className="SidebarContainer">
        <img src={logo} alt="spotify-logo" />
        <div className="Sidebar__menu">
          <SidebarItem
            Icon={HomeIcon}
            text="Home"
            active="true"/>

          <SidebarItem
            Icon={SearchIcon}
            text="Search"
          />

          
          <SidebarItem
            Icon={AddBoxIcon}
            text="New playlist"
          />

          <SidebarItem
            Icon={FavoriteIcon}
            text="Likes"
          />
        </div>

        <div className="Sidebar__playlist">
        {playlists.map(playlist => <SidebarItem text={playlist.title}   />)}
        </div>
      </div>
    </SidebarComponent>
  )
}

const SidebarComponent = styled.div`
  .SidebarContainer{
    background-color: black;
    width: 220px;
    height: 85%;
    position: sticky;
    padding: 25px 10px 0px 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
  }

  .SidebarContainer img{
    width: 140px;
    margin-left: 8px;
  }

  .Sidebar__menu{
    display: flex;
    flex-direction: column;
    margin-top: 26px;
  }

  .Sidebar__playlist{
    border-top: 0.5px solid #b3b3b3;
    overflow: auto;
    flex: 2;
    font-weight: 500;
    padding-top: 15px;
  }
`;

export default Sidebar
