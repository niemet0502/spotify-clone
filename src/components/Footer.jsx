import React from 'react'
import styled from "styled-components"
import footer from "../assets/footer.jpg"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import SpeakerOutlinedIcon from '@material-ui/icons/SpeakerOutlined';

import PauseCircleFilledOutlinedIcon from '@material-ui/icons/PauseCircleFilledOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
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
          <div className="controls">
            <div className="controls__button">
              <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-ulyrgf-0 ghlXvf"><path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path></svg>
              <SkipPreviousIcon/>
              <PauseCircleFilledOutlinedIcon/>
              <SkipNextIcon/>
              <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-ulyrgf-0 ghlXvf"><path fill="none" d="M0 0h16v16H0z"></path><path d="M5 5V4c-2.2.3-4 2.2-4 4.5 0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.7 3.3 5.3 5 5zm5.5 7H6v-1.5l-3.5 2 3.5 2V13h4.5c1.9 0 3.5-1.2 4.2-2.8-.5.3-1 .5-1.5.6-.7.7-1.6 1.2-2.7 1.2zm1-12C9 0 7 2 7 4.5S9 9 11.5 9 16 7 16 4.5 14 0 11.5 0zm.9 7h-1.3V3.6H10v-1h.1c.2 0 .3 0 .4-.1.1 0 .3-.1.4-.2.1-.1.2-.2.2-.3.1-.1.1-.2.1-.3v-.1h1.1V7z"></path></svg>
            </div>
            <div className="progress_bar_song">
              <p>0:54</p>
              <div className="progress_bar">
                <div className="progress_bar_listened"></div>
                <div className="progress_bar_remaining"></div>
              </div>
              <p>3:34</p>
            </div>
          </div>
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
    width: 97.6%;
    background-color:rgb(24,24,24);
    z-index: 2;
    position: fixed;
    bottom: 0%;
    height: 11%;
    margin-left: -1px;
    //border-top: 0.3px solid grey;

    display: flex;
    padding: 20px;
  }

  .artist_info{
   // border: 1px solid red;
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
    //border: 1px solid green;
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .song .controls{
    width: 60%;
    //border: 1px solid blue;
    height: 100%;
    margin-right: -100px;
  }
  .sounds{
    //border: 1px solid yellow;
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

  .controls__button{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .controls__button svg{
    fill: #b3b3b3;
  }
  .controls__button svg:nth-child(3){
    font-size: 45px;
    fill: #fff;
    margin-left: 8px;
    margin-right: 8px;
  }
  .controls__button svg:nth-child(1){
    margin-right: 14px;
  }

  .controls__button svg:nth-child(6){
    margin-left: 14px;
  }

  .progress_bar{
    width: 490px;
    height: 3.5px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 2px;
    display: flex;
    z-index: 1;
    
  }
  .progress_bar_song{
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .progress_bar_song p{
    color: #b3b3b3;
    font-size: 12px;
    font-weight: 500;
  }
  .progress_bar_listened{
    border-radius: 2px;
    background-color: #b3b3b3;
    border: 1px solid #b3b3b3;
    z-index: 2;
  }
  .progress_bar_remaining{
    width: 68%;
    background-color: #b3b3b3;
    opacity: 0.3;
  }
  .progress_bar_listened{
    width: 32%;
  }
`;

export default Footer
