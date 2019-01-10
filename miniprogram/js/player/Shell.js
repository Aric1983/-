import {  DataStore } from "../base/DataStore.js"
import {  Sprite  } from "../base/Sprite.js"
import {  Music } from "../runtime/Music.js"
const dataStore = DataStore.getInstance();
/**
 * by wz 2018-11-22
 * 说明：关于子弹的方法
 */

export class Shell extends Sprite {
  /**
   * by wz 2018-08-23
   * 说明: x x轴的位置
   *       y y轴的位置
   *       xSpeed  x轴的速度
   *       ySpeed  y轴的速度
   *       power 力度
   *       gravity 重力
   */
  constructor(x, y, xSpeed, ySpeed, power,d) {

    super();
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.power = power;
    this.d = d
    this.collisionBalloon = false;
    this.smokeTime = 5;
    this.smokeSize = canvas.width * 0.2;
    this.xSmoke = 0;
    this.ySmoke = 0;
    
  }


  //子弹的绘画
  shellDraw() {

    if (this.pointToPointDist(this.x , this.y , canvas.width * 0.4, (canvas.height - canvas.width * 0.096)) >= dataStore.welfareCanvas.width * 2.4 * 0.2 * 0.684 + this.d/2||this.ySpeed<=0){
      
      if (this.smokeTime >0){
        if (this.smokeTime ==5){
          this.xSmoke = this.x;
          this.ySmoke = this.y;
        }
        this.smokeTime--
        this.img = Sprite.getImage('f2');
        super.draw(
          this.img,
          0,
          0,
          this.srcW = this.img.width,
          this.srcH = this.img.height,
          this.xSmoke - this.smokeSize / 2,
          this.ySmoke - this.smokeSize / 2,
          this.smokeSize,
          this.smokeSize
        )
       
      }
      
      this.img = Sprite.getImage('f3');
      super.draw(
        this.img,
        0,
        0,
        this.srcW = this.img.width,
        this.srcH = this.img.height,
        this.x - this.d / 2,
        this.y - this.d / 2,
        this.d,
        this.d
      )
    }
  }
  //子弹的绘画游戏开始页面专用
  shellDraw1() {
    this.img = Sprite.getImage('f3');
    super.draw(
      this.img,
      0,
      0,
      this.srcW = this.img.width,
      this.srcH = this.img.height,
      this.x - this.d / 2,
      this.y - this.d / 2,
      this.d,
      this.d
    )
  }


  /**
   * by wz 2018-11-22
   * 说明：改变炮弹位置的方法
   */
  gradeGameInShellEvent() {
    //y轴速度手重力的影响
    if (this.pointToPointDist(this.x - this.d / 2, this.y - this.d / 2, canvas.width * 0.4, (canvas.height - canvas.width * 0.096)) >= dataStore.welfareCanvas.width * 2.4 * 0.2 * 0.68 + this.d || this.ySpeed <= 0)
    this.ySpeed = this.ySpeed -  dataStore.gravity;
    this.x = this.x - this.xSpeed;
    this.y = this.y - this.ySpeed

    //遍历气球的位置
    for (let index in dataStore.bornBalloon) {
      if (!dataStore.bornBalloon[index].blast){
        if (this.pointToPointDist(this.x, this.y, dataStore.bornBalloon[index].x, dataStore.bornBalloon[index].y) <= this.d / 2+canvas.width*0.06){
          dataStore.bornBalloon[index].blast = true; 
          this.collisionBalloon = true;
          dataStore.score+=100;
          return;
        }
      }
    }

      //上
     if (this.y <= canvas.width * 0.07 + this.d/2) {

      this.dotAndSquare(this.x, this.y, 0, canvas.width * 0.07, canvas.width, canvas.width * 0.07)
      this.ySpeed = -1 * this.ySpeed
      this.xSpeed = this.xSpeed * dataStore.keLoss
      return;
      //下
    } else if (this.y >= canvas.height - this.d/2) {

      //this.dotAndSquare(this.x, this.y, 0, canvas.height, canvas.width, canvas.height)
      //this.ySpeed = -1 * this.ySpeed * dataStore.keLoss
      //this.xSpeed = this.xSpeed * dataStore.keLoss
      //左
    }else if (this.x <= canvas.width * 0.02 + this.d/2) {

      this.dotAndSquare(this.x, this.y, canvas.width * 0.02, 0, canvas.width * 0.02, canvas.height)
      this.xSpeed = -1 * this.xSpeed * dataStore.keLoss
      this.ySpeed = this.ySpeed * dataStore.keLoss
      return;
      //右
    } else if (this.x >= canvas.width * 0.98 - this.d/2) {


      this.dotAndSquare(this.x, this.y, canvas.width * 0.98, 0, canvas.width * 0.98, canvas.height)
      this.xSpeed = -1 * this.xSpeed * dataStore.keLoss
      this.ySpeed = this.ySpeed * dataStore.keLoss 
      return;

    }


    //圆形的碰撞后速度的改变
    if (dataStore.checkPointJson[dataStore.checkPoint - 1].circular.length != 0) {
      for (let i = 0; i < dataStore.checkPointJson[dataStore.checkPoint - 1].circular.length; i++) {
        if (this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][0], dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][2]) {
          this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][0], dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][1], dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][2]);
          let Nx = this.x - dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][0]
          let Ny = this.y - dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][1]
          this.phyEngine(Nx, Ny);
          
          return;
        }
      }
    }

    //平行的矩形的碰撞后的速度方向的改变
    if (dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect.length != 0) {


      for (let i = 0; i < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect.length; i++) {
       
        //左上
        if (this.dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4].length!=0&&this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2]) {
          this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2]);

          

          this.xSpeed = -1 * this.xSpeed * dataStore.keLoss
          this.ySpeed = -1 * this.ySpeed * dataStore.keLoss

          return;
        }

         
        //左下
        if (this.dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5].length != 0 &&this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][2]) {
          this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][2]);

          this.xSpeed = -1 * this.xSpeed * dataStore.keLoss
          this.ySpeed = -1 * this.ySpeed * dataStore.keLoss

          return;
        }

        //右上
        if (this.dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6].length != 0 &&this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][2]) {
          this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][2]);

          this.xSpeed = -1 * this.xSpeed * dataStore.keLoss
          this.ySpeed = -1 * this.ySpeed * dataStore.keLoss

          return;
        }

        //右下
        if (this.dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7].length != 0 &&this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][2]) {
          this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][2]);

          this.xSpeed = -1 * this.xSpeed * dataStore.keLoss
          this.ySpeed = -1 *this.ySpeed * dataStore.keLoss

          return;
        }


        //上面的绘画
        for (let a = 0; a < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0].length; a++) {
          
        
          if (this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][2]) {
            this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][2]);

           
            let Nx = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0]-dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][0];
            let Ny = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][1];
           

            this.phyEngine(Nx, Ny);
            
            return;
          }

        }
        //下面的绘画
        for (let b = 0; b < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1].length; b++) {

          if (this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][2]) {
            this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][2]);
            let Nx = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][0];
            let Ny = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][1];


            this.phyEngine(Nx, Ny);

            return;
          }
           

        }
        //左边的绘画
        for (let c = 0; c < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2].length; c++) {

          if (this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][2]) {
            this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][2]);

            let Nx = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][0];
            let Ny = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][1];

            
            this.phyEngine(Nx, Ny);

            return;
          }

        }
        //右边的绘画
        for (let d = 0; d < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3].length; d++) {

          if (this.pointToPointDist(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][1]) < this.d/2 + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][2]) {
            this.pointandPoint(this.x, this.y, dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][0], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][1], dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][2]);
            let Nx = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][0];
            let Ny = dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][1];

            this.phyEngine(Nx, Ny);
            return;
          }

        }
       
      }

    }
  }



  //计算点到线段的距离
  pointToSegDist(x, y, x1, y1, x2, y2) {

    var cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
    var d2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (cross <= 0) {
      return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));

    } else if (cross >= d2) {

      return Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));

    } else {
      var r = cross / d2;

      var px = x1 + (x2 - x1) * r;

      var py = y1 + (y2 - y1) * r;
      return Math.sqrt((x - px) * (x - px) + (y - py) * (y - py));
    }

  }

  
  //计算点到点的距离
  pointToPointDist(x, y, x1, y1) {

    return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1))

  }

  //碰撞后的速度的方向的变化
  //碰撞面的法向量
  phyEngine(Nx, Ny) {

    var Svx = this.xSpeed;
    var Svy = this.ySpeed;

    // 计算N的长度
    var lengthN = Math.sqrt(Nx * Nx + Ny * Ny);
    // 归一化N为n'
    var n0x = Nx / lengthN; // n0x就是n'的x分量
    var n0y = Ny / lengthN; // n0y就是n'的y分量
    // 计算n，就是S在N方向上的投影向量
    // 根据b'= (-b.a1').a1'，有n = (-S.n').n'
    var nx = -(Svx * n0x + Svy * n0y) * n0x; // n的x分量
    var ny = -(Svx * n0x + Svy * n0y) * n0y; // n的y分量
    // 计算T
    // T = S + n
    var Tx = Svx + nx; // T的x分量
    var Ty = Svy + ny; // T的y分量
    // 有了T，有了F = 2*T - S，好了，你现在拥有一切了
    // 计算F
    var Fx = 2 * Tx - Svx; // F的x分量
    var Fy = 2 * Ty - Svy; // F的y分量
   
    
      // 现在已经计算出了反弹后的速度向量了
      // 更新速度向量
      this.xSpeed = Fx * dataStore.keLoss;
      this.ySpeed = Fy * dataStore.keLoss;
    
   
  }

  //碰撞后的速度的方向的变化
  //碰撞面的法向量
  gameOverPhyEngine(Nx, Ny) {

    var Svx = this.xSpeed;
    var Svy = this.ySpeed;

    // 计算N的长度
    var lengthN = Math.sqrt(Nx * Nx + Ny * Ny);
    // 归一化N为n'
    var n0x = Nx / lengthN; // n0x就是n'的x分量
    var n0y = Ny / lengthN; // n0y就是n'的y分量
    // 计算n，就是S在N方向上的投影向量
    // 根据b'= (-b.a1').a1'，有n = (-S.n').n'
    var nx = -(Svx * n0x + Svy * n0y) * n0x; // n的x分量
    var ny = -(Svx * n0x + Svy * n0y) * n0y; // n的y分量
    // 计算T
    // T = S + n
    var Tx = Svx + nx; // T的x分量
    var Ty = Svy + ny; // T的y分量
    // 有了T，有了F = 2*T - S，好了，你现在拥有一切了
    // 计算F
    var Fx = 2 * Tx - Svx; // F的x分量
    var Fy = 2 * Ty - Svy; // F的y分量


    // 现在已经计算出了反弹后的速度向量了
    // 更新速度向量
    this.xSpeed = Fx;
    this.ySpeed = Fy;


  }

 
  //计算点是否穿过了线段在的话就按照原来的速度的百分比改变坐标实现它不在内部 已达到不穿透缸体的
  dotAndSquare(x0, y0, x1, y1, x2, y2) {
    if (this.pointToSegDist(this.x, this.y, x1, y1, x2, y2) <= this.d/2) {
      

      this.x = this.x + this.xSpeed *1;
      this.y = this.y + this.ySpeed *1
      this.dotAndSquare(this.x, this.y, x1, y1, x2, y2);
     
    }
    
  }

 

  //计算小球是不是有位置在圆心呢 有的话把小球移除来

  pointandPoint(x0, y0, x1, y1, r) {
    if (this.pointToPointDist(x0, y0, x1, y1) <= this.d/2+r) {
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed
      this.pointandPoint(this.x, this.y, x1, y1, r);
    }
    return;
  }

 


  /**
  * by wz 2018-11-22
  * 说明：开始页面球的滚动
  */
  gameOverShellEvent() {


    this.x = this.x - this.xSpeed;
    this.y = this.y - this.ySpeed

    //上
    if (this.y <= 0 + this.d/2) {

      this.dotAndSquare(this.x, this.y, 0, 0, canvas.width, 0)
      this.ySpeed = -1 * this.ySpeed
      this.xSpeed = this.xSpeed
      return;
      //下
    } else if (this.y >= canvas.height - this.d/2) {

      this.dotAndSquare(this.x, this.y, 0, canvas.height, canvas.width, canvas.height)
      this.ySpeed = -1 * this.ySpeed
      this.xSpeed = this.xSpeed
      //左
    } else if (this.x <= 0 + this.d/2) {

      this.dotAndSquare(this.x, this.y, 0, 0, 0, canvas.height)
      this.xSpeed = -1 * this.xSpeed
      this.ySpeed = this.ySpeed
      return;
      //右
    } else if (this.x >= canvas.width  - this.d/2) {


      this.dotAndSquare(this.x, this.y, canvas.width , 0, canvas.width , canvas.height)
      this.xSpeed = -1 * this.xSpeed
      this.ySpeed = this.ySpeed
      return;

    }


    //圆形的碰撞后速度的改变
    if (dataStore.position[0].circular.length != 0) {
      for (let i = 0; i < dataStore.position[0].circular.length; i++) {
        if (this.pointToPointDist(this.x, this.y, dataStore.position[0].circular[i][0], dataStore.position[0].circular[i][1]) < this.d/2 + dataStore.position[0].circular[i][2]) {
          this.pointandPoint(this.x, this.y, dataStore.position[0].circular[i][0], dataStore.position[0].circular[i][1], dataStore.position[0].circular[i][2]);
          let Nx = this.x - dataStore.position[0].circular[i][0]
          let Ny = this.y - dataStore.position[0].circular[i][1]
          this.gameOverPhyEngine(Nx, Ny);

          return;
        }
      }
    }

    //平行的矩形的碰撞后的速度方向的改变
    if (dataStore.position[0].lineSegRect.length != 0) {


      for (let i = 0; i < dataStore.position[0].lineSegRect.length; i++) {

        //左上
        if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][4][0], dataStore.position[0].lineSegRect[i][4][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][4][2]) {
          this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][4][0], dataStore.position[0].lineSegRect[i][4][1], dataStore.position[0].lineSegRect[i][4][2]);

          this.xSpeed = -1 * this.xSpeed
          this.ySpeed = -1 * this.ySpeed

          return;
        }


        //左下
        if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][5][0], dataStore.position[0].lineSegRect[i][5][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][5][2]) {
          this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][5][0], dataStore.position[0].lineSegRect[i][5][1], dataStore.position[0].lineSegRect[i][5][2]);

          this.xSpeed = -1 * this.xSpeed
          this.ySpeed = -1 * this.ySpeed

          return;
        }

        //右上
        if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][6][0], dataStore.position[0].lineSegRect[i][6][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][6][2]) {
          this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][6][0], dataStore.position[0].lineSegRect[i][6][1], dataStore.position[0].lineSegRect[i][6][2]);

          this.xSpeed = -1 * this.xSpeed
          this.ySpeed = -1 * this.ySpeed

          return;
        }

        //右下
        if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][7][0], dataStore.position[0].lineSegRect[i][7][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][7][2]) {
          this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][7][0], dataStore.position[0].lineSegRect[i][7][1], dataStore.position[0].lineSegRect[i][7][2]);

          this.xSpeed = -1 * this.xSpeed
          this.ySpeed = -1 * this.ySpeed

          return;
        }


        //上面的绘画
        for (let a = 0; a < dataStore.position[0].lineSegRect[i][0].length; a++) {


          if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][0][a][0], dataStore.position[0].lineSegRect[i][0][a][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][0][a][2]) {
            this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][0][a][0], dataStore.position[0].lineSegRect[i][0][a][1], dataStore.position[0].lineSegRect[i][0][a][2]);


            let Nx = dataStore.position[0].lineSegRect[i][4][0] - dataStore.position[0].lineSegRect[i][5][0];
            let Ny = dataStore.position[0].lineSegRect[i][4][1] - dataStore.position[0].lineSegRect[i][5][1];


            this.gameOverPhyEngine(Nx, Ny);

            return;
          }

        }
        //下面的绘画
        for (let b = 0; b < dataStore.position[0].lineSegRect[i][1].length; b++) {

          if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][1][b][0], dataStore.position[0].lineSegRect[i][1][b][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][1][b][2]) {
            this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][1][b][0], dataStore.position[0].lineSegRect[i][1][b][1], dataStore.position[0].lineSegRect[i][1][b][2]);
            let Nx = dataStore.position[0].lineSegRect[i][4][0] - dataStore.position[0].lineSegRect[i][5][0];
            let Ny = dataStore.position[0].lineSegRect[i][4][1] - dataStore.position[0].lineSegRect[i][5][1];


            this.gameOverPhyEngine(Nx, Ny);

            return;
          }


        }
        //左边的绘画
        for (let c = 0; c < dataStore.position[0].lineSegRect[i][2].length; c++) {

          if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][2][c][0], dataStore.position[0].lineSegRect[i][2][c][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][2][c][2]) {
            this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][2][c][0], dataStore.position[0].lineSegRect[i][2][c][1], dataStore.position[0].lineSegRect[i][2][c][2]);

            let Nx = dataStore.position[0].lineSegRect[i][4][0] - dataStore.position[0].lineSegRect[i][6][0];
            let Ny = dataStore.position[0].lineSegRect[i][4][1] - dataStore.position[0].lineSegRect[i][6][1];


            this.gameOverPhyEngine(Nx, Ny);

            return;
          }

        }
        //右边的绘画
        for (let d = 0; d < dataStore.position[0].lineSegRect[i][3].length; d++) {



          if (this.pointToPointDist(this.x, this.y, dataStore.position[0].lineSegRect[i][3][d][0], dataStore.position[0].lineSegRect[i][3][d][1]) < this.d/2 + dataStore.position[0].lineSegRect[i][3][d][2]) {
            this.pointandPoint(this.x, this.y, dataStore.position[0].lineSegRect[i][3][d][0], dataStore.position[0].lineSegRect[i][3][d][1], dataStore.position[0].lineSegRect[i][3][d][2]);
            let Nx = dataStore.position[0].lineSegRect[i][4][0] - dataStore.position[0].lineSegRect[i][6][0];
            let Ny = dataStore.position[0].lineSegRect[i][4][1] - dataStore.position[0].lineSegRect[i][6][1];


            this.gameOverPhyEngine(Nx, Ny);
            return;
          }

        }

      }

    }

  }

}