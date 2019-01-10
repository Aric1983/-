import { DataStore } from "./base/DataStore.js";
import { Sprite } from "./base/Sprite.js"
import { Shell } from "./player/Shell.js"
import { Balloon } from "./player/Balloon.js"
import { ClickDetection} from "./player/ClickDetection.js"
const dataStore = DataStore.getInstance();
const ctx = dataStore.ctx;

export class Director {

  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  constructor() {
  }

   /**
   * by wz 2018-10-22
   * 说明： 主循环体
   * 
   */
  gradeGameInRun(){
    
    //背景的绘画
    dataStore.get('bg').gradeGameInBGDraw();
    
    //障碍物的绘画
    dataStore.get('bar').barDraw();
    //气球的绘画以及改变
    this.balloonEventAndDraw();
    //大炮的绘画
    dataStore.get('bg').gradeGameInDraw()

    //子弹的绘画已经碰撞检测速度方向的改变
    this.gradeGameInShellEventAndDraw();
    //dataStore.get('bg').gameOverDraw();
    if (dataStore.firstGame){
      dataStore.get('bg').tips();
    }
    //游戏暂停的判断绘画暂停的页面
    if (dataStore.menu == 11){
      dataStore.get('bg').gradeGameStopDraw()
    //游戏结束
    }else if (dataStore.menu == 12) {

      dataStore.get('bg').gameOverDraw();
    } else if (dataStore.menu == 13){
      //初始化闯关模式数据
      dataStore.reset()
      //生成初始化的气球的数组
      this.bornBalloon();
      dataStore.menu = 10;
    }else if (dataStore.menu == 14) {
      dataStore.get('ranking').friendRankingDraw()
    }
    let i = requestAnimationFrame(() => this.gradeGameInRun());
    //游戏结束返回主页面
    if (dataStore.menu == -1){
      cancelAnimationFrame(i);
      //关闭滑动监听
      dataStore.get('clickDetection').gameInClickClose();
      this.gameOverRun()
    }
  }

  //不在游戏中是的循环体
  gameOverRun(){
    dataStore.get('bg').gameOverBGDraw()
   
    if(dataStore.menu==-1){
      
     
      this.gameOverShellEventAndDraw();
      dataStore.get('bg').gameStartDraw()
      //dataStore.get('bar').barDraw1();
      

    } else if (dataStore.menu == -2){
      dataStore.get('ranking').friendRankingDraw()
    } else if (dataStore.menu == -3){
      dataStore.get('bg').fileDraw()
    }
    
    
    let i = requestAnimationFrame(() => this.gameOverRun());
    if (dataStore.menu === 10){
      //结束游戏开始闯关模式
      cancelAnimationFrame(i);
      //开启滑动监听
      dataStore.get('clickDetection').gameInClickOpen()
      //初始化闯关模式数据
      dataStore.reset()
      if(dataStore.file){
        dataStore.checkPoint = dataStore.fileCheckPoint
        dataStore.score = dataStore.fileScore
        dataStore.shellNumber = dataStore.fileShellNumber
        dataStore.file =false
      }
      //生成初始化的气球的数组
      this.bornBalloon();
      //开始闯关游戏
      this.gradeGameInRun();
    }

  }


  /**
  * by wz 2018-11-28
  * 说明：全局炮弹位置的修改以及绘画
  */
  gradeGameInShellEventAndDraw() {
    //遍历修改炮弹的位置
    for (let index in dataStore.bornShell) {
      if (dataStore.bornShell[index].y >= canvas.height || dataStore.bornShell[index].collisionBalloon == true) {
        if (dataStore.bornShell[index].collisionBalloon != true){
          if (dataStore.shellNumber >= 1)
            dataStore.shellNumber--
          if (dataStore.shellNumber <= 0){
            dataStore.menu = 12;
            //保存最大的分数
            if (dataStore.score > dataStore.highestScore) {
              dataStore.highestScore = dataStore.score
              dataStore.get("user").writeDataToOpenDataContext()
              dataStore.get("user").writeDataToCloud()

            }
          }
           
        }
         
        dataStore.bornShell.splice(index, 1);
        
        continue;
      } 
      //游戏暂停
      if (dataStore.menu == 10 || dataStore.menu == 12) {
        dataStore.bornShell[index].gradeGameInShellEvent();
      }
      dataStore.bornShell[index].shellDraw();
    
      
    }
  }



  /**
  * by wz 2018-12-05
  * 说明：游戏开始页面炮弹位置的修改以及绘画
  */
  gameOverShellEventAndDraw() {
    //遍历修改炮弹的位置
    for (let index in dataStore.gameOverBornShell) {
      
      dataStore.gameOverBornShell[index].gameOverShellEvent();
      
      dataStore.gameOverBornShell[index].shellDraw1();
    }
  }
  //气球位置数组的生成
  bornBalloon(){
    dataStore.bornBalloon=[];
    if (dataStore.checkPointJson[dataStore.checkPoint - 1].balloon.length != 0) {
      for (let i = 0; i < dataStore.checkPointJson[dataStore.checkPoint - 1].balloon.length; i++) {
        dataStore.bornBalloon.push(new Balloon(dataStore.checkPointJson[dataStore.checkPoint - 1].balloon[i][0],dataStore.checkPointJson[dataStore.checkPoint - 1].balloon[i][1]))
      }
    }
  }

  //气球的绘画以及改变
  balloonEventAndDraw(){
    //当气球消失的时候刷新下一关
    if (dataStore.bornBalloon.length==0){
      //关卡不大于总数的时候关卡加一
      if (dataStore.checkPoint<dataStore.checkPointJson.length){
        dataStore.checkPoint++;
      }else{
        //console.log("更多关卡还在紧张测试中");
      }

      //dataStore.checkPoint++;
      this.bornBalloon();


    }
    for (let index in dataStore.bornBalloon) {
      dataStore.bornBalloon[index].balloonDraw();
      if (dataStore.bornBalloon[index].s==6)
        dataStore.bornBalloon.splice(index, 1);
    }
  }
  
}