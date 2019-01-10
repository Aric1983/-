import { Sprite } from "../base/Sprite.js"
import { DataStore } from "../base/DataStore.js"

const dataStore = DataStore.getInstance();
export class Ranking extends Sprite {
  constructor() {
    super();
  }




  //好友排行榜的绘画
  friendRankingDraw(){
    //背景
    this.img = Sprite.getImage('bg')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      0,
      0,
      canvas.width,
      canvas.height,
    )
    //好友排行
    this.img  = Sprite.getImage('ranking0')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.35,
      canvas.height * 0.18 - canvas.width * 0.08,
      canvas.width * 0.3,
      canvas.width * 0.05,
    )

    this.img = Sprite.getImage('ranking1')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.1,
      canvas.height * 0.18,
      canvas.width*0.8,
      canvas.height*0.7,
    )
    //上一页
    this.img = Sprite.getImage('ranking2')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.15,
      canvas.height * 0.88 - canvas.width * 0.1,
      canvas.width * 0.15,
      canvas.width * 0.05,
      
    )
    //下一页
    this.img = Sprite.getImage('ranking3')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.7,
      canvas.height * 0.88 - canvas.width * 0.1,
      canvas.width * 0.15,
      canvas.width * 0.05,

    )
    //返回
    this.img = Sprite.getImage('ranking4')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.1,
      canvas.height * 0.9,
      canvas.width * 0.12,
      canvas.width * 0.12,
    )

    //看似透明的背景
    this.img = Sprite.getImage('bg')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.1,
      canvas.height * 0.2,
      canvas.width * 0.8,
      canvas.height * 0.6,
    )

   
    //排行榜的详细信息的绘画
    super.draw(
      sharedCanvas,
      0,
      0,
      sharedCanvas.width,
      sharedCanvas.height,
      canvas.width * 0.1,
      canvas.height * 0.2,
      canvas.width * 0.8,
      canvas.height * 0.6,
    )
  }

  //排行榜点击事件
  rankingClick(x, y, menu){
    console.log("点击事件进来了");


    if (this.clickToJudge(
      x, y,
      canvas.width * 0.15,
      canvas.height * 0.88 - canvas.width * 0.1,
      canvas.width * 0.15,
      canvas.width * 0.05,
    )) {
      console.log("上一页");
    
      wx.postMessage({
        type: 'friendsRankUp',
      })
     
    } else if (this.clickToJudge(
      x, y,
      canvas.width * 0.7,
      canvas.height * 0.88 - canvas.width * 0.1,
      canvas.width * 0.15,
      canvas.width * 0.05,
    )){
      console.log("下一页");
      wx.postMessage({
        type: 'friendsRankDown',
      })
    } else if (this.clickToJudge(
      x, y,
      canvas.width * 0.1,
      canvas.height * 0.9,
      canvas.width * 0.12,
      canvas.width * 0.12,
    )) {
      console.log("返回");
      if(menu==-1)
        dataStore.menu =-1
      else if (menu == 14)
        dataStore.menu = 12
    } 
  }


  //点击判断直接填写绘画的后四位就可以
  clickToJudge(x, y, x1, y1, w, h) {
    if (x >= x1 && x <= x1 + w && y >= y1 && y <= y1 + h)
      return true;
    else
      return false;
  }
}