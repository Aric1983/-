import { Sprite } from "../base/Sprite.js"
import { DataStore } from "../base/DataStore.js"

const dataStore = DataStore.getInstance();
export class Bar extends Sprite {
  constructor() {
    super();
  }


  //游戏中障碍物的绘画
  barDraw(){
    //游戏中不动圆的绘画
    if (dataStore.checkPointJson[dataStore.checkPoint - 1].circular.length != 0) {
      for (let i = 0; i < dataStore.checkPointJson[dataStore.checkPoint - 1].circular.length; i++) {
        console.log(dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i])
        this.img = Sprite.getImage('f3')
        super.draw(
          this.img,
          0,
          0,
          this.img.width,
          this.img.height,
          dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][2],
          dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][2],
          dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][2] * 2,
          dataStore.checkPointJson[dataStore.checkPoint - 1].circular[i][2] * 2,
        )
      }
    }
    //正方形
    if (dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect.length != 0) {
     
     
      for (let i = 0; i < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect.length; i++) {

        if (dataStore.wireframes){

          //上面的绘画
          for (let a = 0; a < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0].length; a++) {
            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][2] * 2,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][0][a][2] * 2,
            )

          }
          //下面的绘画
          for (let b = 0; b < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1].length; b++) {

            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][2] * 2,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][1][b][2] * 2,
            )

          }
          //左边的绘画
          for (let c = 0; c < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2].length; c++) {


            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][2] * 2,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][2][c][2] * 2,
            )

          }
          //右边的绘画
          for (let d = 0; d < dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3].length; d++) {

            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][2],
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][2] * 2,
              dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][3][d][2] * 2,
            )

          }
          this.img = Sprite.getImage('f3')
          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2] * 2,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2] * 2,
          )

          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][2] * 2,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][5][2] * 2,
          )
          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][2] * 2,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][6][2] * 2,
          )

          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][2] * 2,
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][2] * 2,
          )


        }else{
          //"#F13C48"
          dataStore.ctx.fillStyle = "#2D83F8"
          dataStore.ctx.fillRect(
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2],
            dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2],
            Math.abs(dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][0] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][0]) + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2] * 2,
            Math.abs(dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][7][1] - dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][1]) + dataStore.checkPointJson[dataStore.checkPoint - 1].lineSegRect[i][4][2] * 2,
          )
        }
       
      }

    }

  }


  //游戏中障碍物的绘画
  barDraw1() {
    //游戏中不动圆的绘画
    if (dataStore.position[0].circular.length != 0) {
      for (let i = 0; i < dataStore.position[0].circular.length; i++) {

        this.img = Sprite.getImage('f3')
        super.draw(
          this.img,
          0,
          0,
          this.img.width,
          this.img.height,
          dataStore.position[0].circular[i][0] - dataStore.position[0].circular[i][2],
          dataStore.position[0].circular[i][1] - dataStore.position[0].circular[i][2],
          dataStore.position[0].circular[i][2] * 2,
          dataStore.position[0].circular[i][2] * 2,
        )
      }
    }
    //正方形
    if (dataStore.position[0].lineSegRect.length != 0) {


      for (let i = 0; i < dataStore.position[0].lineSegRect.length; i++) {

        if (dataStore.wireframes) {

          //上面的绘画
          for (let a = 0; a < dataStore.position[0].lineSegRect[i][0].length; a++) {
            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.position[0].lineSegRect[i][0][a][0] - dataStore.position[0].lineSegRect[i][0][a][2],
              dataStore.position[0].lineSegRect[i][0][a][1] - dataStore.position[0].lineSegRect[i][0][a][2],
              dataStore.position[0].lineSegRect[i][0][a][2] * 2,
              dataStore.position[0].lineSegRect[i][0][a][2] * 2,
            )

          }
          //下面的绘画
          for (let b = 0; b < dataStore.position[0].lineSegRect[i][1].length; b++) {

            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.position[0].lineSegRect[i][1][b][0] - dataStore.position[0].lineSegRect[i][1][b][2],
              dataStore.position[0].lineSegRect[i][1][b][1] - dataStore.position[0].lineSegRect[i][1][b][2],
              dataStore.position[0].lineSegRect[i][1][b][2] * 2,
              dataStore.position[0].lineSegRect[i][1][b][2] * 2,
            )

          }
          //左边的绘画
          for (let c = 0; c < dataStore.position[0].lineSegRect[i][2].length; c++) {


            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.position[0].lineSegRect[i][2][c][0] - dataStore.position[0].lineSegRect[i][2][c][2],
              dataStore.position[0].lineSegRect[i][2][c][1] - dataStore.position[0].lineSegRect[i][2][c][2],
              dataStore.position[0].lineSegRect[i][2][c][2] * 2,
              dataStore.position[0].lineSegRect[i][2][c][2] * 2,
            )

          }
          //右边的绘画
          for (let d = 0; d < dataStore.position[0].lineSegRect[i][3].length; d++) {

            this.img = Sprite.getImage('f3')
            super.draw(
              this.img,
              0,
              0,
              this.img.width,
              this.img.height,
              dataStore.position[0].lineSegRect[i][3][d][0] - dataStore.position[0].lineSegRect[i][3][d][2],
              dataStore.position[0].lineSegRect[i][3][d][1] - dataStore.position[0].lineSegRect[i][3][d][2],
              dataStore.position[0].lineSegRect[i][3][d][2] * 2,
              dataStore.position[0].lineSegRect[i][3][d][2] * 2,
            )

          }
          this.img = Sprite.getImage('f3')
          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.position[0].lineSegRect[i][4][0] - dataStore.position[0].lineSegRect[i][4][2],
            dataStore.position[0].lineSegRect[i][4][1] - dataStore.position[0].lineSegRect[i][4][2],
            dataStore.position[0].lineSegRect[i][4][2] * 2,
            dataStore.position[0].lineSegRect[i][4][2] * 2,
          )

          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.position[0].lineSegRect[i][5][0] - dataStore.position[0].lineSegRect[i][5][2],
            dataStore.position[0].lineSegRect[i][5][1] - dataStore.position[0].lineSegRect[i][5][2],
            dataStore.position[0].lineSegRect[i][5][2] * 2,
            dataStore.position[0].lineSegRect[i][5][2] * 2,
          )
          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.position[0].lineSegRect[i][6][0] - dataStore.position[0].lineSegRect[i][6][2],
            dataStore.position[0].lineSegRect[i][6][1] - dataStore.position[0].lineSegRect[i][6][2],
            dataStore.position[0].lineSegRect[i][6][2] * 2,
            dataStore.position[0].lineSegRect[i][6][2] * 2,
          )

          super.draw(
            this.img,
            0,
            0,
            this.img.width,
            this.img.height,
            dataStore.position[0].lineSegRect[i][7][0] - dataStore.position[0].lineSegRect[i][7][2],
            dataStore.position[0].lineSegRect[i][7][1] - dataStore.position[0].lineSegRect[i][7][2],
            dataStore.position[0].lineSegRect[i][7][2] * 2,
            dataStore.position[0].lineSegRect[i][7][2] * 2,
          )


        } else {
          //"#F13C48"
          dataStore.ctx.fillStyle = "#2D83F8"
          dataStore.ctx.fillRect(
            dataStore.position[0].lineSegRect[i][4][0] - dataStore.position[0].lineSegRect[i][4][2],
            dataStore.position[0].lineSegRect[i][4][1] - dataStore.position[0].lineSegRect[i][4][2],
            Math.abs(dataStore.position[0].lineSegRect[i][7][0] - dataStore.position[0].lineSegRect[i][4][0]) + dataStore.position[0].lineSegRect[i][4][2] * 2,
            Math.abs(dataStore.position[0].lineSegRect[i][7][1] - dataStore.position[0].lineSegRect[i][4][1]) + dataStore.position[0].lineSegRect[i][4][2] * 2,
          )
        }

      }

    }

  }

}