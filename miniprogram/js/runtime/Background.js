import { Sprite } from "../base/Sprite.js"
import { DataStore } from "../base/DataStore.js"
//点击分享后的闪动复活
let time = 0;
const dataStore = DataStore.getInstance();
export class Background extends Sprite {
  constructor() {
    super();
  }
  //大炮的右侧转动改变
 gradeGameInEvent1(){
    dataStore.cws.translate(dataStore.welfareCanvas.width / 2, (dataStore.welfareCanvas.height - dataStore.welfareCanvas.width * 2.4 * 0.04))
    dataStore.cws.rotate(Math.PI / 90)
    dataStore.cws.translate(-dataStore.welfareCanvas.width / 2, -(dataStore.welfareCanvas.height - dataStore.welfareCanvas.width * 2.4 * 0.04))
  }
  //大炮的左侧侧转动改变
  gradeGameInEvent2() {
    dataStore.cws.translate(dataStore.welfareCanvas.width / 2, (dataStore.welfareCanvas.height - dataStore.welfareCanvas.width * 2.4 * 0.04))
    dataStore.cws.rotate(-Math.PI / 90)
    dataStore.cws.translate(-dataStore.welfareCanvas.width / 2, -(dataStore.welfareCanvas.height - dataStore.welfareCanvas.width * 2.4 * 0.04))
  }
  

  //大炮的背景的
  gradeGameInBGDraw(){
    // 清除画布
    dataStore.cws.clearRect(-dataStore.welfareCanvas.width, -dataStore.welfareCanvas.height, dataStore.welfareCanvas.width * 4, dataStore.welfareCanvas.height * 4)

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
    //暂停的按键
    this.ctx = dataStore.ctx;
    this.img = Sprite.getImage('stop')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.015,
      canvas.width * 0.005,
      canvas.width * 0.05,
      canvas.width * 0.05,
    )
    
    //关于关卡名字的绘画
    this.ctx = dataStore.ctx;
    this.ctx.fillStyle = "#FFFFFF"
    var big = "bold " + canvas.width * 0.05 + "px Arial"
    this.ctx.font = big
    this.ctx.fillText(
      'GRADE' + dataStore.checkPoint,
      canvas.width * 0.4,
      canvas.width * 0.05
    )

    //得分情况
    this.ctx = dataStore.ctx;
    this.ctx.fillStyle = "#FFFFFF"
    var big = canvas.width * 0.04 + "px Arial"
    this.ctx.font = big
    this.ctx.fillText(
      '得分:' + dataStore.score,
      canvas.width * 0.08,
      canvas.width * 0.045
    )
    //"#F13C48"
    this.ctx.fillStyle = "#2D83F8"
    //上侧边界
    this.ctx.fillRect(
      canvas.width * 0.015, 
      canvas.width * 0.06, 
      canvas.width * 0.97, 
      canvas.width * 0.01
    )

    //左侧边界
    this.ctx.fillRect(
      canvas.width * 0.01, 
      canvas.width * 0.06, 
      canvas.width * 0.01, 
      canvas.height 
    )


    //右侧边界
    this.ctx.fillRect(
      canvas.width * 0.98,
      canvas.width * 0.06, 
      canvas.width * 0.01, 
      canvas.height 
    )


    //打击次数
    for(let i = 0; i < dataStore.shellNumber;i++){
      this.img = Sprite.getImage('f3')
      super.draw(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        canvas.width * 0.03 + canvas.width * 0.06*i,
        canvas.width * 0.08,
        canvas.width * 0.05,
        canvas.width * 0.05,
      )
    }
   

  }
  //大炮的绘画
  gradeGameInDraw(){

    // 清除画布
    dataStore.cws.clearRect(-dataStore.welfareCanvas.width, -dataStore.welfareCanvas.height, dataStore.welfareCanvas.width , dataStore.welfareCanvas.height)

    //大炮底座
    this.img = Sprite.getImage('f1')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.1,
      canvas.height - canvas.width * 0.2,
      canvas.width * 0.6,
      canvas.width * 0.2,
    )
    //大炮
    this.img = Sprite.getImage('f0')
    
    dataStore.cws.drawImage(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      dataStore.welfareCanvas.width * 0.5 - dataStore.welfareCanvas.width * 0.1,
      dataStore.welfareCanvas.height - dataStore.welfareCanvas.width * 2.4 * 0.04 - dataStore.welfareCanvas.width * 2.4 * 0.2*0.8,
      dataStore.welfareCanvas.width * 0.2,
      dataStore.welfareCanvas.width * 2.4 * 0.2,
    )
    
    super.draw(
      dataStore.welfareCanvas,
      0,
      0,
      dataStore.welfareCanvas.width,
      dataStore.welfareCanvas.height,
      -canvas.width*0.1,
      0,
      canvas.width,
      canvas.height,
    )

    
    if (dataStore.welfarePower && dataStore.power<=1){
      dataStore.power += dataStore.powerTime
    }


    //力度条
    this.img = Sprite.getImage('f4')
    
    super.draw(
      this.img,
      0,
      this.img.height * (1 - dataStore.power),
      this.img.width,
      this.img.height * dataStore.power,
      canvas.width * 0.8,
      canvas.height - canvas.width * 0.35 + canvas.width * 0.3 * (1 - dataStore.power),
      canvas.width * 0.1,
      canvas.width * 0.3* dataStore.power,
    )
    //力度条外边框
    this.img = Sprite.getImage('f5')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.795,
      canvas.height - canvas.width * 0.355,
      canvas.width * 0.11,
      canvas.width * 0.31,
    )
  }

  //游戏暂停的绘画
  gradeGameStopDraw(){

    //半透明的底色
    this.img = Sprite.getImage('gameover4')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      0,
      0,
      canvas.width,
      canvas.height
    )
    //返回主菜单
    this.img = Sprite.getImage('gameover5')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.3,
      canvas.height * 0.4 - canvas.width*0.18,
      canvas.width * 0.4,
      canvas.width * 0.12,
      
    )

    //存档退出
    this.img = Sprite.getImage('gameover6')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.3,
      canvas.height * 0.4,
      canvas.width * 0.4,
      canvas.width * 0.12,
    )
    //继续游戏
    this.img = Sprite.getImage('gameover7')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.3,
      canvas.height * 0.4 + canvas.width * 0.18,
      canvas.width * 0.4,
      canvas.width * 0.12,
    )
  }
  
  /**   关于某一点旋转后的坐标
   *     private static Point calcNewPoint(Point p, Point pCenter, float angle) {
        // calc arc
        float l = (float) ((angle * Math.PI) / 180);

        //sin/cos value         sdd
        float cosv = (float) Math.cos(l);
        float sinv = (float) Math.sin(l);

        // calc new point
        float newX = (float) ((p.x - pCenter.x) * cosv - (p.y - pCenter.y) * sinv + pCenter.x);
        float newY = (float) ((p.x - pCenter.x) * sinv + (p.y - pCenter.y) * cosv + pCenter.y);
        return new Point((int) newX, (int) newY);
    }
   */

  //游戏外的背景的绘画
  gameOverBGDraw(){
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
  }

  //开始前的画面
  gameStartDraw(){
   
    //闯关模式
    this.img = Sprite.getImage('gameover0')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width*0.3,
      canvas.height*0.5,
      canvas.width*0.4,
      canvas.width * 0.11,
    )

    //竞技模式
    this.img = Sprite.getImage('gameover1')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.3,
      canvas.height * 0.5 + canvas.width * 0.16,
      canvas.width * 0.4,
      canvas.width * 0.11,
    )
    //排行榜
    
    this.img = Sprite.getImage('gameover2')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.3,
      canvas.height * 0.75,
      canvas.width * 0.16,
      canvas.width * 0.16,
    )
    //邀请好友
    this.img = Sprite.getImage('gameover3')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.54,
      canvas.height * 0.75,
      canvas.width * 0.16,
      canvas.width * 0.16,
    )

    //七彩气球
    this.img = Sprite.getImage('gameover')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.11,
      canvas.height * 0.27,
      canvas.width * 0.78,
      canvas.width * 0.17,
    )

  }

  //游戏结束的画面
  gameOverDraw(){

    //半透明的底色
    this.img = Sprite.getImage('gameover4')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      0,
      0,
      canvas.width,
      canvas.height
    )

    //得分情况
    this.ctx = dataStore.ctx;
    this.ctx.fillStyle = "#FFFFFF"
    var big = "bold "+ canvas.width * 0.05 + "px Arial"
    this.ctx.font = big
    this.ctx.fillText(
      '您的得分',
      canvas.width*0.4,
      canvas.height*0.15
    )

   
    //得分情况
    this.ctx = dataStore.ctx;
    this.ctx.fillStyle = "#FFFFFF"
    var big = "bold " + canvas.width * 0.05 + "px Arial"
    var i = dataStore.score; var s = i + ""; //转字符串 
    this.ctx.font = big
    this.ctx.fillText(
      dataStore.score,
      canvas.width * 0.495 - canvas.width * 0.05 * s.length / 4,
      canvas.height * 0.15 + canvas.width * 0.09
    )
    if (dataStore.score >= dataStore.highestScore){
      dataStore.highestScore = dataStore.score
      //新纪录
      this.img = Sprite.getImage('gameover8')
      super.draw(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        canvas.width * 0.45,
        canvas.height * 0.15 + canvas.width * 0.12,
        canvas.width * 0.1,
        canvas.width * 0.05
      )


    }
    
    //炫耀一下
    this.img = Sprite.getImage('gameover9')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.22,
      canvas.height * 0.3,
      canvas.width * 0.25,
      canvas.width * 0.08
    )

    //查看排行榜
    this.img = Sprite.getImage('gameover10')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.53,
      canvas.height * 0.3,
      canvas.width * 0.25,
      canvas.width * 0.08
    )


    //返回大厅
    this.img = Sprite.getImage('gameover11')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.25,
      canvas.height * 0.45,
      canvas.width * 0.5,
      canvas.width * 0.1
    )

    //再来一次
    this.img = Sprite.getImage('gameover12')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.25,
      canvas.height * 0.55,
      canvas.width * 0.5,
      canvas.width * 0.1
    )
    if (dataStore.repeatRenascence){
      //分享复活
      this.img = Sprite.getImage('gameover13')
      super.draw(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        canvas.width * 0.25,
        canvas.height * 0.68,
        canvas.width * 0.5,
        canvas.width * 0.1
      )

      time++;
      if (time <= 20) {
        this.img = Sprite.getImage('gameover14')
        super.draw(
          this.img,
          0,
          0,
          this.img.width,
          this.img.height,
          canvas.width * 0.25 + canvas.width * 0.03,
          canvas.height * 0.68 + canvas.width * 0.03,
          canvas.width * 0.44,
          canvas.width * 0.04
        )
      } else {
        if (time == 40)
          time = 0
        this.img = Sprite.getImage('gameover14')
        super.draw(
          this.img,
          0,
          0,
          this.img.width,
          this.img.height,
          canvas.width * 0.25 + canvas.width * 0.025,
          canvas.height * 0.68 + canvas.width * 0.025,
          canvas.width * 0.45,
          canvas.width * 0.05
        )
      }
    }
   
  }

  //有存档时候的选择呢
  fileDraw(){
    this.img = Sprite.getImage('file0')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.25,
      canvas.height * 0.3,
      canvas.width * 0.5,
      canvas.width * 0.5
    )
    //新游戏
    this.img = Sprite.getImage('file1')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.35,
      canvas.height * 0.3 + canvas.width * 0.1,
      canvas.width * 0.3,
      canvas.width * 0.1
    )
    //继续游戏
    this.img = Sprite.getImage('file2')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      canvas.width * 0.35,
      canvas.height * 0.3 + canvas.width * 0.3,
      canvas.width * 0.3,
      canvas.width * 0.1
    )

    this.ctx = dataStore.ctx;
    this.ctx.fillStyle = "#000000"
    var big =  canvas.width * 0.04 + "px Arial"
    this.ctx.font = big
    this.ctx.fillText(
      '读取存档',
      canvas.width * 0.42,
      canvas.height * 0.3 + canvas.width * 0.45
    )
  }


  //读取云端数据中
  load(){
    this.img = Sprite.getImage('load')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      0,
      0,
      canvas.width,
      canvas.height
    )
  }

  //提示
  tips(){
    this.img = Sprite.getImage('tips')
    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      (canvas.width - canvas.width * 0.439)/2,
      canvas.height*0.3,
      canvas.width*0.439,
      canvas.width * 0.244
    )
  }
}