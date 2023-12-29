import React, {Component} from 'react';
import './App.css'

import { DateTime } from "luxon";

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        
        this.handleLoad = this.handleLoad.bind(this);

        this.sizeDiscordText = this.sizeDiscordText.bind(this);
        this.sizeGeneratedText = this.sizeGeneratedText.bind(this);
    }

    componentDidMount() {
      window.addEventListener('load', this.handleLoad);
    }
  
    componentWillUnmount() { 
      window.removeEventListener('load', this.handleLoad)  
    }

    handleLoad() {

      this.sizeDiscordText(50);
      this.sizeGeneratedText(50);

    }

    sizeGeneratedText(maxFontSize)
    {
      var oDiv = document.getElementById("container_generatedNum");
      oDiv.style.overflow = "auto";
      var fontSize = 15;
      var changes = 0;
      var blnSuccess = true;
      while (oDiv.scrollWidth <= oDiv.clientWidth) {
          oDiv.style.fontSize = fontSize + "px";
          fontSize++;
          changes++;
          if (changes > 500) {
              blnSuccess = false;
              break;
          }
      }
      if (changes > 0) {
          //upon failure, revert to original font size:
          if (blnSuccess)
              fontSize -= 2;
          else
              fontSize -= changes;
          oDiv.style.fontSize = fontSize + "px";
      }

      if(fontSize >= maxFontSize)
      {
        oDiv.style.fontSize = maxFontSize + "px";

        
      }
      oDiv.style.overflow = "hidden";
    }

    sizeDiscordText(maxFontSize)
    {
      var oDiv = document.getElementById("container_discord");
      oDiv.style.overflow = "auto";
      var fontSize = 15;
      var changes = 0;
      var blnSuccess = true;
      while (oDiv.scrollWidth <= oDiv.clientWidth) {
          oDiv.style.fontSize = fontSize + "px";
          fontSize++;
          changes++;
          if (changes > 500) {
              blnSuccess = false;
              break;
          }
      }
      if (changes > 0) {
          //upon failure, revert to original font size:
          if (blnSuccess)
              fontSize -= 2;
          else
              fontSize -= changes;
          oDiv.style.fontSize = fontSize + "px";
      }

      if(fontSize >= maxFontSize)
      {
        oDiv.style.fontSize = maxFontSize + "px";
      }
      oDiv.style.overflow = "hidden";

    }

    render()
    {
      let username_discord = "TakuDev";
    
      let username_vtuber = "Lunahyu";
      let pronoms = "Il/he";
      let localisation = "France";
      let stream_language = "FR;EN;ALL";
      let date_first_stream = "29/12/2023";
      let url_stream = "twitch.tv/takudev";
      let picture_streamer = null;
    
      var dt = DateTime.now();      
      let dateHourGenerate = dt.setLocale('fr').toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS);
      return (
        <>
          <div className='container'>
            <img className='ticket' src="./FRVTUBERS_Tickets_FR.png"></img>
            <div className='newInfos'>
            <div id="container_generatedNum" class="container_generatedNum">
                <div class="generatedNum">#0001</div>
              </div>

              <div id="container_discord" class="container_discord">
                <div class="discord_username">{username_discord}</div>
              </div>
              <div class="class_title">• CLASS:</div>
              <div class="class_title_2">FIRST CLASS / PREMIÈRE CLASSE</div>
              <div class="flight_title">• FLIGHT & DATE:</div>
              <div class="flight_title_2">{ dateHourGenerate }</div>
              <img class="profil_img" src={"./media/profilImg.png"} />
            </div>
          </div>
    
          
    
        </>
      )
    }
    
};
