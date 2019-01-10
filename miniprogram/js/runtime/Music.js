import {DataStore} from "../base/DataStore.js"
import { Director } from "../Director.js"
/**
 * 
 */
const dataStore = DataStore.getInstance();
export class Music{
  constructor() {
    this.music10 = wx.createInnerAudioContext();
    this.music10.src = 'audio/music1.mp3'

    this.music20 = wx.createInnerAudioContext();
    this.music20.src = 'audio/music1.mp3'

    this.music30 = wx.createInnerAudioContext();
    this.music30.src = 'audio/music1.mp3'

    this.music40 = wx.createInnerAudioContext();
    this.music40.src = 'audio/music1.mp3'

    this.music50 = wx.createInnerAudioContext();
    this.music50.src = 'audio/music1.mp3'

    this.music60 = wx.createInnerAudioContext();
    this.music60.src = 'audio/music1.mp3'

    

    this.music5 = wx.createInnerAudioContext();
    this.music5.src = 'audio/music5.mp3'
    // 金币声音
    this.music6 = wx.createInnerAudioContext();
    this.music6.src = 'audio/gold.mp3'
    // 水声音
    this.music7 = wx.createInnerAudioContext();
    this.music7.src = 'audio/water.mp3'

    this.weatherMusic1 = wx.createInnerAudioContext();
    this.weatherMusic1.src = 'audio/weathermusic1.mp3'

    this.weatherMusic2 = wx.createInnerAudioContext();
    this.weatherMusic2.src = 'audio/weathermusic4.mp3'

    this.weatherMusic3 = wx.createInnerAudioContext();
    this.weatherMusic3.src = 'audio/weathermusic3.mp3'

    this.weatherMusic4 = wx.createInnerAudioContext();
    this.weatherMusic4.src = 'audio/weathermusic4.mp3'

    this.weatherMusic5 = wx.createInnerAudioContext();
    this.weatherMusic5.src = 'audio/weathermusic5.mp3'

    this.weatherMusic6 = wx.createInnerAudioContext();
    this.weatherMusic6.src = 'audio/weathermusic6.mp3'

    this.weatherMusic7 = wx.createInnerAudioContext();
    this.weatherMusic7.src = 'audio/weathermusic7.mp3'

    this.weatherMusic8 = wx.createInnerAudioContext();
    this.weatherMusic8.src = 'audio/weathermusic8.mp3'

    this.weatherMusic9 = wx.createInnerAudioContext();
    this.weatherMusic9.src = 'audio/weathermusic9.mp3'

    this.weatherMusic10 = wx.createInnerAudioContext();
    this.weatherMusic10.src = 'audio/weathermusic10.mp3'

    this.weatherMusic11 = wx.createInnerAudioContext();
    this.weatherMusic11.src = 'audio/weathermusic11.mp3'

  }

 
  playMusic6(volume) {
    this.music6.volume = volume;
    this.music6.play()
  }

  playMusic7(volume) {
    this.music7.volume = volume;
    //this.music7.onStop();
    this.music7.play()
  }



  playMusic10(volume) {
    this.music10.volume = volume;
    this.music10.play()
  }
  playMusic20(volume) {
    this.music20.volume = volume;
    this.music20.play()
  }

  playMusic30(volume) {
    this.music30.volume = volume;
    this.music30.play()
  }
  playMusic40(volume) {
    this.music40.volume = volume;
    this.music40.play()
  }
  playMusic50(volume) {
    this.music50.volume = volume;
    this.music50.play()
  }
  playMusic60(volume) {
    this.music60.volume = volume;
    this.music60.play()
  }



 
  /**
   * by wz 2018-08-25
   * 说明:背景音乐
   *      volume 声音的大小0-1之间
   */
  playMusic5(volume) {
    this.music5.loop = true; //是否循环播放
    this.music5.volume = volume;
    this.music5.play();
  }

  closeMusic5(){
    this.music5.pause();
  }

  openMusic(){
   
    this.playMusic5();
    dataStore.music = 1;
    dataStore.menu = 0;
    if (dataStore.state == -1) {
      dataStore.menu = -1;
    }
    
    dataStore.get('bg').gameFrontAndOverGameDraw();
  }

  closeMusic(){
    this.music5.pause();
    dataStore.music = 0;
    dataStore.menu = 0;
    if (dataStore.state ==-1){
      dataStore.menu =-1;
    }
    
    dataStore.get('bg').gameFrontAndOverGameDraw();
  }
  
  /**
   * by wz 2018-11-01
   * 说明：出现天气得时候 的音乐
   */
  weatherMusic(volume){
    if (dataStore.weather != 0 && dataStore.frame / 60 == dataStore.weatherStartTimeClass[dataStore.checkPoint - 1][dataStore.countWeather]){
     
      //播放天气动态的音乐 在天气有效时间内播放， 该时间段游戏 背景音乐消失，等天气消失 背景音乐重新开始
      //天气时段比较长， 就用一个音乐循环播放
      if (dataStore.weather <= 6 ) {
        this.closeMusic5();
        if (dataStore.weather == 1){
          this.music7
         
          this.weatherMusic1.loop = true; 
          this.weatherMusic1.volume = volume;
          this.weatherMusic1.play();
        } else if (dataStore.weather == 2) {
        
          this.weatherMusic2.loop = true;
          this.weatherMusic2.volume = volume;
          this.weatherMusic2.play();
        } else if (dataStore.weather == 3) {
        
          this.weatherMusic3.loop = true;
          this.weatherMusic3.volume = volume;
          this.weatherMusic3.play();
        } else if (dataStore.weather == 4) {
         
          this.weatherMusic4.loop = true;
          this.weatherMusic4.volume = volume;
          this.weatherMusic4.play();
        } else if (dataStore.weather == 5) {
          this.weatherMusic5.loop = true;
          this.weatherMusic5.volume = volume;
          this.weatherMusic5.play();
        } else if (dataStore.weather == 6) {
          this.weatherMusic6.loop = true;
          this.weatherMusic6.volume = volume;
          this.weatherMusic6.play();
        }
      } else {//动物出现的时候 叫声只播放一次宠物叫声
        if (dataStore.weather == 7) {
          this.weatherMusic7.volume = volume;
          this.weatherMusic7.play();
        } else if (dataStore.weather == 8) {
          this.weatherMusic8.volume = volume;
          this.weatherMusic8.play();
        } else if (dataStore.weather == 9) {
          this.weatherMusic9.volume = volume;
          this.weatherMusic9.play();
        } else if (dataStore.weather == 10) {
          this.weatherMusic10.volume = volume;
          this.weatherMusic10.play();
        } else if (dataStore.weather == 11) {
          this.weatherMusic11.volume = volume;
          this.weatherMusic11.play();
        }
      }
    }
  }

  weatherMusicClose(){
   
    this.weatherMusic1.pause();
    this.weatherMusic2.pause();
    this.weatherMusic3.pause();
    this.weatherMusic4.pause();
    this.weatherMusic5.pause();
    this.weatherMusic6.pause();
    this.weatherMusic7.pause();
    this.weatherMusic8.pause();
    this.weatherMusic9.pause();
    this.weatherMusic10.pause();
    this.weatherMusic11.pause();

    if (dataStore.music == 0) {
      dataStore.get('music').closeMusic5()
    } else {
      dataStore.get('music').playMusic5(0.8);
    }
  }
}
