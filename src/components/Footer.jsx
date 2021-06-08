import React from 'react'
import styled from "styled-components"
import footer from "../assets/footer.jpg"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import SpeakerOutlinedIcon from '@material-ui/icons/SpeakerOutlined';
function Footer() {
  return (
    <FooterContainer>
      <div className="Footer">
        <div className="artist_info">
         <div> <img src={footer} alt="" /></div>
         <div className="song_info">
          <div>
            <h3>Amore</h3>
            <h6>Fally Ipupa</h6>
          </div>
          <div>
            <FavoriteBorderIcon />
          </div>
         </div>
        </div>
        <div className="song">
          Progress bar
        </div>
        <div className="sounds">
          <PlaylistPlayIcon/>
          <SpeakerOutlinedIcon/>
          <VolumeUpOutlinedIcon/>
          <div className="progress-bar-volume"></div>
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-ulyrgf-0 ghlXvf"><path d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z"></path></svg>
        </div>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  .Footer{
    width: 97.4%;
    background-color:rgb(24,24,24);
    z-index: 2;
    position: fixed;
    bottom: 0%;
    height: 11%;
    margin-left: -1px;
    border-top: 0.3px solid grey;

    display: flex;
    padding: 20px;
  }

  .artist_info{
    border: 1px solid red;
    display: flex;
  }

  .artist_info img{
    height: 100%;
    width: 80px;
  }

  .artist_info svg{
    color: #b3b3b3 !important;
    font-weight: 300 !important;
    font-size: 20px !important;
    margin-left: 25px;
    margin-top: 6px;
  }

  .artist_info .song_info{
    display: flex;
    align-items: center;
    padding-left: 25px;
  }
  .song_info h3{
    margin: 0px;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .song_info h6{
    margin: 0px;
    color: #b3b3b3;
    font-size: 12px;
    font-weight: 300;
  }
  .song{
    border: 1px solid green;
    flex: 2;
  }
  .sounds{
    border: 1px solid yellow;
    display: flex;
    align-items: center;
  }

  .sounds svg{
    color: #b3b3b3 !important;
    font-weight: normal;
    font-size: 20px !important;
    margin-left: 5px;
  }

  .Svg-ulyrgf-0.ghlXvf{
    fill: #b3b3b3 !important;
    margin-left: 10px;
  }

  .sounds .progress-bar-volume{
    margin-left: 10px;
    width: 90px;
    height: 3px;
    border: 1px solid #b3b3b3;
    background-color: #b3b3b3;
    border-radius: 2px;
  }
`;

export default Footer
