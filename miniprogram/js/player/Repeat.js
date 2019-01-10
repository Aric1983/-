//邀请好友
import { DataStore } from "../base/DataStore.js"

const dataStore = DataStore.getInstance();
export class Repeat{
  constructor() {
   
  }
  //邀请好友
  repeatA(){
    wx.showShareMenu();
    wx.updateShareMenu({
      withShareTicket: false,

    });
    wx.onShareAppMessage(
      function () {
        return {
          title: "再来一次吧",
          imageUrl: 'res/f0.png',
          query: "dfafaf=111"
        }
      }
    );
  }


  repeatB() {
    //分享游戏
    wx.updateShareMenu({
      withShareTicket: true,

    });
    console.log("进不来");
    wx.shareAppMessage({
      title: '七彩气球',
      imageUrl: '',
      success: function (res) {
        // 用户确认分享后执行的回调函数
        console.log("分享的是什么", res.shareTickets);
        if (res.shareTickets != undefined) {
          dataStore.shellNumber=4;
          dataStore.menu = 10;
          console.log("分享成功");
          dataStore.repeatRenascence = false;
        } else {
          
        }

      },
      cancel: function (res) {
        // 用户取消分享后执行的回调函数 
        console.log("分享的是什么", res);
      }
    });
  }
}