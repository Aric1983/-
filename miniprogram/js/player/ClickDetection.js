import { DataStore } from "../base/DataStore.js"
import { Shell } from "./Shell.js"
const dataStore = DataStore.getInstance();


//
var initEvent =false

export class ClickDetection {
  constructor(){
  }
  // 点击事件
  initEvent() {

   
    if (initEvent){
      return ;
    }
    initEvent = true;
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault(); 
      //点击移动伞的方向
     
      let x = e.touches[0].clientX;
      let y = e.touches[0].clientY;
    
      x = 1080 / dataStore.jxw*x;
      y = canvas.width * dataStore.jxwhb/ dataStore.jxh* y;
      dataStore.put('x', x).put('y', y);
      //点击事件只改变menu的值修改在run方法中实现
      if (dataStore.menu <=-1){
        this.gameOverClick(x, y)
      } else if (dataStore.menu >= 10 && dataStore.menu <= 19){
        this.gradeGameInClick(x, y)
      }
      
      
    }).bind(this));
  }

  //游戏未开始的判断
  gameOverClick(x, y){
    //点击菜单排行榜后进入到好友排行
    if (dataStore.menu==-2){
      dataStore.get("ranking").rankingClick(x,y,-1);
      return;
    } else if(dataStore.menu == -3){
      if (this.clickToJudge(
        x, y,
        canvas.width * 0.35,
        canvas.height * 0.3 + canvas.width * 0.1,
        canvas.width * 0.3,
        canvas.width * 0.1
      )) {
        console.log("开始新游戏")
        dataStore.menu = 10
        dataStore.file = false

      } else if(this.clickToJudge(
        x, y,
        canvas.width * 0.35,
        canvas.height * 0.3 + canvas.width * 0.3,
        canvas.width * 0.3,
        canvas.width * 0.1
      )) {
        console.log("读取档案")
        dataStore.menu = 10

      }
     
    } else if (dataStore.menu == -1){
      //闯关开始的点击检测
      console.log(dataStore.menu);
      if (this.clickToJudge(
        x, y,
        canvas.width*0.3,
        canvas.height*0.5,
        canvas.width*0.4,
        canvas.width * 0.11,
      )) {

        console.log("闯关游戏开始了");
        if (dataStore.file)
          dataStore.menu = -3;
        else
          dataStore.menu = 10;

      } else if (this.clickToJudge(
        x, y,
        canvas.width * 0.3,
        canvas.height * 0.5 + canvas.width * 0.16,
        canvas.width * 0.4,
        canvas.width * 0.11,
      )) {
        console.log("竞技游戏开始了");


      } else if (this.clickToJudge(
        x, y,
        canvas.width * 0.3,
        canvas.height * 0.75,
        canvas.width * 0.16,
        canvas.width * 0.16,
      )) {  //查看排行榜

        console.log("查看排行榜");
        dataStore.menu = -2
        wx.postMessage({
          type: 'friendsRank',
        })
        
      } else if (this.clickToJudge(
        x, y,
        canvas.width * 0.54,
        canvas.height * 0.75,
        canvas.width * 0.16,
        canvas.width * 0.16,
      )) {
        console.log("邀请好友");
        wx.shareAppMessage({
            title: "再来一次吧",
            imageUrl: 'res/f0.png',
            query: "dfafaf=111"
          }
        );
      }

    }


    if (dataStore.menu == -1) {
      dataStore.button.hide()
      dataStore.button.show()
    } else {
      dataStore.button.hide()
    }
    
  }


  //闯关游戏里面的点击事件
  gradeGameInClick(x,y){
    if (dataStore.menu == 11){
      console.log("暂停游戏");
      dataStore.menu=11
      //返回主菜单
      if(this.clickToJudge(
        x, y,
        canvas.width * 0.3,
        canvas.height * 0.4 - canvas.width * 0.18,
        canvas.width * 0.4,
        canvas.width * 0.12,
      )){
        console.log("返回主页面");
        dataStore.menu = -1
      } else if (this.clickToJudge(
        x, y,
        canvas.width * 0.3,
        canvas.height * 0.4,
        canvas.width * 0.4,
        canvas.width * 0.12,
      )) {
        console.log("存档");
        dataStore.file=true;
        //存档的分
        dataStore.fileScore = dataStore.score
        //存档的关卡
        dataStore.fileCheckPoint = dataStore.checkPoint;
        //存档的炮弹次数
        dataStore.fileShellNumber = dataStore.shellNumber;
        dataStore.get("user").writeDataToCloud()
        dataStore.menu = -1
        
      } if (this.clickToJudge(
        x, y,
        canvas.width * 0.3,
        canvas.height * 0.4 + canvas.width * 0.18,
        canvas.width * 0.4,
        canvas.width * 0.12,
      )) {
        console.log("继续游戏");
        dataStore.menu = 10

      }
    } else if (dataStore.menu == 10 ) {
      if (this.clickToJudge(
        x, y,
        canvas.width * 0,
        canvas.width * 0,
        canvas.width * 0.1,
        canvas.width * 0.1,
      )){
        dataStore.menu =11;
      }
      
      if (dataStore.bornShell.length == 0 && y > canvas.width * 0.07){
        dataStore.welfarePower = true;
        dataStore.power = 0;
      }
     
    } else if (dataStore.menu ==12){
      console.log("游戏结束");
      if (this.clickToJudge(
        x, y,
        canvas.width * 0.22,
        canvas.height * 0.3,
        canvas.width * 0.25,
        canvas.width * 0.08
      )) {
        console.log("炫耀一下");
        let tempFilePath = canvas.toTempFilePathSync({
          x: canvas.width * 0.25,
          
          y: canvas.height * 0.1 ,
          width: canvas.width * 0.5,
          height: canvas.height * 0.1 + canvas.width * 0.4,
          destWidth: 500,
          destHeight: 400
        })
        wx.shareAppMessage({
          title: "又破纪录啦，你也来试试吧",
          imageUrl: tempFilePath
        })

      } else if (this.clickToJudge(
        x, y,
        canvas.width * 0.53,
        canvas.height * 0.3,
        canvas.width * 0.25,
        canvas.width * 0.08
      )) {
        console.log("查看排行榜");
        dataStore.menu = 14
        wx.postMessage({
          type: 'friendsRank',
        })
      } else if(this.clickToJudge(
        x, y,
        canvas.width * 0.25,
        canvas.height * 0.45,
        canvas.width * 0.5,
        canvas.width * 0.1
      )) {
        console.log("返回大厅");
        dataStore.menu = -1

      } else if(this.clickToJudge(
        x, y,
        canvas.width * 0.25,
        canvas.height * 0.55,
        canvas.width * 0.5,
        canvas.width * 0.1
      )) {
        console.log("再来一次,初始化游戏");
        dataStore.menu = 13

      } else if (this.clickToJudge(
        x, y,
        canvas.width * 0.25,
        canvas.height * 0.68,
        canvas.width * 0.5,
        canvas.width * 0.1
      ) && dataStore.repeatRenascence) {
        console.log("分享游戏复活");
        dataStore.get('repeat').repeatB() 

      }
       
    }else if (dataStore.menu == 14) {
      dataStore.get("ranking").rankingClick(x, y, 14);
    } 


    if (dataStore.menu ==-1){
      dataStore.button.hide()
      dataStore.button.show()
    }else{
      dataStore.button.hide()
    }

  }
 


  //游戏中手指滑动监听
  gameInTouchmove(e) {
    e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    x = 1080 / dataStore.jxw * x;
    if (dataStore.menu === 10 && dataStore.welfarePower) {
      if (dataStore.get("x") - x > 0) {

        if (dataStore.deviation >= -Math.PI / 4) {
          dataStore.deviation -= Math.PI / 90
          dataStore.get('bg').gradeGameInEvent2()
        }

      } else if (dataStore.get("x") - x < 0) {

        if (dataStore.deviation <= Math.PI / 3) {
          dataStore.deviation += Math.PI / 90
          dataStore.get('bg').gradeGameInEvent1()
        }

      }
      //放入x以便下次判断是左右滑动
      dataStore.put("x", x)
    }
    
  }


  //游戏中手指滑动移除监听
  gameInTouchend(e) {
    e.preventDefault()
    if (dataStore.menu === 10 && dataStore.welfarePower ){
      dataStore.welfarePower = false;
      let x = canvas.width * 0.4
      let y = (canvas.height - canvas.width * 0.096)
      let ySpeed = canvas.height * (0.005 + 0.015 * dataStore.power);

      let xSpend = ySpeed * dataStore.mapTan.get("tan" + Math.abs(Math.round(dataStore.deviation / Math.PI * 180)))

      let power = dataStore.power
      //判断炮弹的x轴方向
      if (dataStore.deviation > 0) {
        xSpend = -1 * xSpend
      }
      dataStore.firstGame =false
      dataStore.bornShell.push(new Shell(x, y, xSpend, ySpeed, power, canvas.width * 0.1))

    }
   
    
   
  }

  //开启游戏内 滑动事件检测、滑动事件离开检测
  gameInClickOpen() {
    console.log("游戏内点击事件的检测、滑动事件检测、滑动事件离开检测的开启");
    
    let gameInTouchmoveOpen = this.gameInTouchmove.bind(this)
    let gameInTouchendOpen = this.gameInTouchend.bind(this)
    
    canvas.addEventListener('touchmove', gameInTouchmoveOpen)
    canvas.addEventListener('touchend', gameInTouchendOpen)
  }

  //关闭游戏内 滑动事件检测、滑动事件离开检测
  gameInClickClose() {
    console.log("关闭游戏内点击事件的检测、滑动事件检测、滑动事件离开检测");
   
    let gameInTouchmoveClose = this.gameInTouchmove.bind(this)
    let gameInTouchendClose = this.gameInTouchend.bind(this)
    canvas.removeEventListener('touchmove', gameInTouchmoveClose)
    canvas.removeEventListener('touchend', gameInTouchendClose)
  }

  //点击判断直接填写绘画的后四位就可以
  clickToJudge(x,y,x1,y1,w,h){
    if(x>=x1&&x<=x1+w&&y>=y1&&y<=y1+h)
      return true;
    else
      return false;
  }

}