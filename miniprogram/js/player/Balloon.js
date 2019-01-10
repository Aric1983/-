import { Sprite } from "../base/Sprite.js"
import { DataStore } from "../base/DataStore.js"

const dataStore = DataStore.getInstance();
export class Balloon extends Sprite {
  constructor(x,y) {
    super();
    this.x = x;
    this.y = y;
    this.blast = false; //是否爆炸
    this.s = 1;
    this.time =0;
    
  }

  //气球的绘画
  balloonDraw(){
    if (this.blast){
      this.time++
      if (this.s <= 5 && this.time==5){
        this.s++;
        this.time=0;
      }
      this.img = Sprite.getImage('s'+this.s)
      super.draw(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        this.x - canvas.width * 0.3 ,
        this.y - canvas.width * 0.3,
        canvas.width * 0.6,
        canvas.width * 0.6,
      )
    }else{
      this.img = Sprite.getImage('balloon')
      super.draw(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        this.x - canvas.width * 0.06,
        this.y - canvas.width * 0.06,
        canvas.width * 0.12,
        canvas.width * 0.12,
      )
    }
    
  }


  //气球的修改
  balloonEvent() {
    
  }



}