import { Tan } from "./Tan.js"
export class DataStore{
  static getInstance(){
    if(!DataStore.instance){
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }
  constructor(){
    this.map = new Map();
    //加载tan的数据
    console.log("加载了tan的数据");
    this.mapTan = new Map(Tan);
  }
  put(key, value) {
    if(typeof value === 'function'){
      value = new value();
    }
    this.map.set(key, value);
    return this;
  }
  get(key) {
    return this.map.get(key);
  }
  destory() {
    for (let value of this.map.values()) {
      value = null;
    }
  }

  


/**
 * by wz  2018-08-28
 * 说明:用于控制每一关的通关条件
 *      核心控制方法 控制
 *      
 *    
 */
  only() {
    //意见反馈
    this.button
    //加载的时间 超过时间为超时
    this.readCloudTime =600;
    //云端数据读取的结果
    this.readCloud = false;
    //分包加载的结果
    this.readPackage = false;
    //读取云端成功但没读取到数据判定为第一次玩游戏
    this.firstGame =false;
    //原屏幕宽度
    this.jxw = canvas.width ;
    //原屏幕长度
    this.jxh =canvas.height;
    //原屏幕长宽比例
    this.jxwhb =canvas.height / canvas.width
    //放大屏幕提高显示
    canvas.width = 1080;
    //放大屏幕提高显示
    canvas.height =canvas.width * this.jxwhb;
    //第二个画布
    this.welfareCanvas.width = 1080
    this.welfareCanvas.height =canvas.width * this.jxwhb;
   
    //游戏菜单 用户在什么位置
    /**
     * -3有存档时候的操作
     *   邀请好友不需要改变菜单的位置
     * -2查看排行榜
     * -1游戏未开始的时候 主页
     * 10 闯关模式中 11游戏暂停中 12游戏结束 13 再来一次 14 查看排行
     * 20 竞技模式中 21游戏暂停中 22游戏结束
     *
     * 
     */
    this.menu = 0;
    //大炮的偏移角度
    this.deviation = 0;
    //动能损失的百分数 越小损失的约大
    this.keLoss = 0.9
    //重力的大小
    this.gravity = canvas.height * 0.0003;
    //是否显示非球体的轮廓图;调试专用专用比较的绘画资源
    this.wireframes = true
   
    this.openId =""
    //最高分数
    this.highestScore = 0
    //存档的分
    this.fileScore =0
    //存档的关卡
    this.fileCheckPoint = 0;
    //存档的炮弹次数
    this.fileShellNumber = 0;
    //存档是否开启 开启以后进入新的模式要先询问是否读取存档
    this.file = false
    
    this.checkPointJson = [
      {
        "checkPoint": "1", //关卡数
        "circular":
          [

          ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [
         

        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon"://气球圆形 
          [
            [canvas.width * 0.5, canvas.height * 0.3 - canvas.width * 0.1],

          ]
      },
      {
        "checkPoint": "2", //关卡数
        "circular":
        [

        ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [
          [ //第一个矩形
            [//上
              [
              canvas.width * 0.4,
              canvas.height * 0.3,
              canvas.width * 0.005
              ], 
              [
                canvas.width * 0.42,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.44,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.3,
                canvas.width * 0.005
              ],
              
            ],  
            [//下
              [
                canvas.width * 0.4,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.44,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.3 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
            ],  
            [//左
             
              
            ],  
            [//右
             
              
              
            ],  
            //左上
            
            [
              canvas.width * 0.38,
              canvas.height * 0.3,
              canvas.width * 0.005
            ],
          
          
            //左下
            
            [
              canvas.width * 0.38,
              canvas.height * 0.3 + canvas.width * 0.02,
              canvas.width * 0.005
            ],
           
            //右上
           
            [
              canvas.width * 0.62,
              canvas.height * 0.3,
              canvas.width * 0.005
            ],
           
            
            //右下
          
            [
              canvas.width * 0.62,
              canvas.height * 0.3 + canvas.width * 0.02,
              canvas.width * 0.005
            ],
                
          ],
         
        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon"://气球圆形 
        [
            [canvas.width * 0.5, canvas.height * 0.3 - canvas.width * 0.1],

        ] 
      },

      {
        "checkPoint": "3", //关卡数
        "circular":
        [

        ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [
          [ //第一个矩形 上
            [//上
             
              [
                canvas.width * 0.44,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              

            ],
            [//下
              
              
              [
                canvas.width * 0.44,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              
            ],
            [//左


            ],
            [//右



            ],
            //左上

            [
              canvas.width * 0.42,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.42,
              canvas.height * 0.15 + canvas.width * 0.02,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.58,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //右下
            [
              canvas.width * 0.58,
              canvas.height * 0.15 + canvas.width * 0.02,
              canvas.width * 0.005
            ],

          ],

          [ //第二个矩形 左
            [//上

            ],
            [//下

            ],
            [//左
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],


            ],
            [//右

              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],

            ],
            //左上

            [
              canvas.width * 0.4,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.4,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.42,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //右下

            [
              canvas.width * 0.42,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

          ],


          [ //第三个矩形 右
            [//上



            ],
            [//下




            ],
            [//左
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],


            ],
            [//右

              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],

            ],
            //左上

            [
              canvas.width * 0.58,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.58,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.6,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //右下

            [
              canvas.width * 0.6,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

          ],

        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon"://气球圆形 
        [
          [canvas.width * 0.5, canvas.height * 0.3 - canvas.width * 0.1],

        ]
      },
      {
        "checkPoint": "4", //关卡数
        "circular":
          [

          ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [

          [ //第一个矩形 右
            [//上



            ],
            [//下




            ],
            [//左
              [
                canvas.width * 0.2,
                canvas.height * 0.15 + canvas.width * 0.07,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.22,
                canvas.height * 0.15 + canvas.width * 0.09,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.24,
                canvas.height * 0.15 + canvas.width * 0.11,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.26,
                canvas.height * 0.15 + canvas.width * 0.13,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.28,
                canvas.height * 0.15 + canvas.width * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.3,
                canvas.height * 0.15 + canvas.width * 0.17,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.32,
                canvas.height * 0.15 + canvas.width * 0.19,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.34,
                canvas.height * 0.15 + canvas.width * 0.21,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.36,
                canvas.height * 0.15 + canvas.width * 0.23,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.38,
                canvas.height * 0.15 + canvas.width * 0.25,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.27,
                canvas.width * 0.005
              ],
              

            ],
            [//右
              

              
              [
                canvas.width * 0.24,
                canvas.height * 0.15 + canvas.width * 0.07,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.26,
                canvas.height * 0.15 + canvas.width * 0.09,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.28,
                canvas.height * 0.15 + canvas.width * 0.11,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.3,
                canvas.height * 0.15 + canvas.width * 0.13,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.32,
                canvas.height * 0.15 + canvas.width * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.34,
                canvas.height * 0.15 + canvas.width * 0.17,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.36,
                canvas.height * 0.15 + canvas.width * 0.19,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.38,
                canvas.height * 0.15 + canvas.width * 0.21,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.23,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.25,
                canvas.width * 0.005
              ],
             


            ],
            //左上

            [
              canvas.width * 0.2,
              canvas.height * 0.15 + canvas.width * 0.07,
              canvas.width * 0.005
            ],

            //左下
            [
              canvas.width * 0.42,
              canvas.height * 0.15 + canvas.width * 0.29,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.22,
              canvas.height * 0.15 + canvas.width * 0.05,
              canvas.width * 0.005
            ],

            //右下

            [
              canvas.width * 0.44,
              canvas.height * 0.15 + canvas.width * 0.27,
              canvas.width * 0.005
            ],

          ],
          
          [ //第二个矩形 右
            [//上



            ],
            [//下




            ],
            [//左
              
             
              [
                canvas.width * 0.76,
                canvas.height * 0.15 + canvas.width * 0.07,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.74,
                canvas.height * 0.15 + canvas.width * 0.09,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.72,
                canvas.height * 0.15 + canvas.width * 0.11,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.7,
                canvas.height * 0.15 + canvas.width * 0.13,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.68,
                canvas.height * 0.15 + canvas.width * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.66,
                canvas.height * 0.15 + canvas.width * 0.17,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.64,
                canvas.height * 0.15 + canvas.width * 0.19,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.62,
                canvas.height * 0.15 + canvas.width * 0.21,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.23,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.25,
                canvas.width * 0.005
              ],
              
             
            ],
            [//右

              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.07,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.78,
                canvas.height * 0.15 + canvas.width * 0.09,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.76,
                canvas.height * 0.15 + canvas.width * 0.11,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.74,
                canvas.height * 0.15 + canvas.width * 0.13,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.72,
                canvas.height * 0.15 + canvas.width * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.7,
                canvas.height * 0.15 + canvas.width * 0.17,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.68,
                canvas.height * 0.15 + canvas.width * 0.19,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.66,
                canvas.height * 0.15 + canvas.width * 0.21,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.64,
                canvas.height * 0.15 + canvas.width * 0.23,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.62,
                canvas.height * 0.15 + canvas.width * 0.25,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.27,
                canvas.width * 0.005
              ],
             
              
            ],
            //左上

            [
              canvas.width * 0.78,
              canvas.height * 0.15 + canvas.width * 0.05,
              canvas.width * 0.005
            ],

            //左下
            [
              canvas.width * 0.56,
              canvas.height * 0.15 + canvas.width * 0.27,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.8,
              canvas.height * 0.15 + canvas.width * 0.07,
              canvas.width * 0.005
            ],

            //右下

            [
              canvas.width * 0.58,
              canvas.height * 0.15 + canvas.width * 0.29,
              canvas.width * 0.005
            ],

          ],

        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon"://气球圆形 
        [
          [canvas.width * 0.5, canvas.height * 0.3 - canvas.width * 0.1],

        ]
      },
       {
        "checkPoint": "5", //关卡数
        "circular":
          [

          ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [
          [ //第一个矩形
            [//上

              [
                canvas.width * 0.22,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.24,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.26,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.28,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.3,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.32,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.34,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.36,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.38,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15,
                canvas.width * 0.005
              ], [
                canvas.width * 0.4,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.44,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.15,
                canvas.width * 0.005
              ],



            ],
            [//下

              [
                canvas.width * 0.22,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.24,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.26,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.28,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.3,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.32,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.34,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.36,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.38,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ], [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.44,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],

            ],
            [//左


            ],
            [//右



            ],
            //左上
            [
              canvas.width * 0.2,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],



            //左下

            [
              canvas.width * 0.2,
              canvas.height * 0.15 + canvas.width * 0.02,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.48,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //右下
            [
            canvas.width * 0.48,
            canvas.height * 0.15 + canvas.width * 0.02,
            canvas.width * 0.005
            ]


          ],

          [ //第二个矩形
            [//上
              [
                canvas.width * 0.34,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.36,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.38,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.44,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.62,
                canvas.height * 0.32,
                canvas.width * 0.005
              ],
             

            ],
            [//下
              
              [
                canvas.width * 0.36,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.38,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.44,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.62,
                canvas.height * 0.32 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
             
            ],
            [//左


            ],
            [//右



            ],
            //左上

            [
              canvas.width * 0.34,
              canvas.height * 0.32,
              canvas.width * 0.005
            ],


            //左下
            [
              canvas.width * 0.34,
              canvas.height * 0.32 + canvas.width * 0.02,
              canvas.width * 0.005
            ],
            

            //右上
            [
              canvas.width * 0.64,
              canvas.height * 0.32,
              canvas.width * 0.005
            ],
            


            //右下
            [
              canvas.width * 0.64,
              canvas.height * 0.32 + canvas.width * 0.02,
              canvas.width * 0.005
            ],
           

          ],

        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon"://气球圆形 
        [
          [canvas.width * 0.5, canvas.height * 0.3 - canvas.width * 0.1],

        ]
      },
      {
        "checkPoint": "6", //关卡数
        "circular":
          [
            //[canvas.width * 0.9, (canvas.height * 0.15 + canvas.width * 0.32),canvas.width * 0.02]
          ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [
         
          [ //第一个矩形 右
            [//上



            ],
            [//下




            ],
            [//左
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.8,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],


            ],
            [//右

              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.82,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],

            ],
            //左上

            [
              canvas.width * 0.8,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.8,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.82,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //右下

            [
              canvas.width * 0.82,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

          ],

          [ //第二个矩形 下
            [//上


            ],
            [//下

            ],
            [//左
              

            ],
            [//右

             

            ],
            //左上

            [
              canvas.width * 0.89,
              canvas.height * 0.15 + canvas.width * 0.30,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.89,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.91,
              canvas.height * 0.15 + canvas.width * 0.30,
              canvas.width * 0.005
            ],


            //右下

            [
              canvas.width * 0.91,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

          ],

        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon"://气球圆形 
          [
            [canvas.width * 0.9, canvas.height * 0.3 - canvas.width * 0.1],

          ]
      },

      {
        "checkPoint": "7", //关卡数
        "circular":
          [

          ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [
          [ //第一个矩形 上
            [//上

              [
                canvas.width * 0.44,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.3,
                canvas.width * 0.005
              ],


            ],
            [//下


              [
                canvas.width * 0.44,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.46,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.48,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.5,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.52,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.54,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.56,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.32,
                canvas.width * 0.005
              ],

            ],
            [//左


            ],
            [//右



            ],
            //左上

            [
              canvas.width * 0.42,
              canvas.height * 0.15 + canvas.width * 0.3,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.42,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.58,
              canvas.height * 0.15 + canvas.width * 0.3,
              canvas.width * 0.005
            ],


            //右下
            [
              canvas.width * 0.58,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

          ],

          [ //第二个矩形 左
            [//上

            ],
            [//下

            ],
            [//左
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.4,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],


            ],
            [//右

              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.42,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],

            ],
            //左上

            [
              canvas.width * 0.4,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.4,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.42,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //右下

            [
              canvas.width * 0.42,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

          ],


          [ //第三个矩形 右
            [//上



            ],
            [//下




            ],
            [//左
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.58,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],


            ],
            [//右

              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.02,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.04,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.06,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.08,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.1,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.12,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.14,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.16,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.18,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.2,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.22,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.24,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.26,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.28,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.6,
                canvas.height * 0.15 + canvas.width * 0.30,
                canvas.width * 0.005
              ],

            ],
            //左上

            [
              canvas.width * 0.58,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //左下

            [
              canvas.width * 0.58,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

            //右上

            [
              canvas.width * 0.6,
              canvas.height * 0.15,
              canvas.width * 0.005
            ],


            //右下

            [
              canvas.width * 0.6,
              canvas.height * 0.15 + canvas.width * 0.32,
              canvas.width * 0.005
            ],

          ],

        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon"://气球圆形 
        [
          [canvas.width * 0.5, canvas.height * 0.3 - canvas.width * 0.1],

        ]
      },
    ]

    //===============游戏前图形的坐标=============================== 

    this.position = [
      {
        "circular":
          [
            [
              canvas.width * 0.3 + canvas.width * 0.08,
              canvas.height * 0.75 + canvas.width * 0.08,
              canvas.width * 0.08
            ],

            [
              canvas.width * 0.54 + canvas.width * 0.08,
              canvas.height * 0.75 + canvas.width * 0.08,
              canvas.width * 0.08,
            ],
          ],
        //线段矩形的绘画
        //以canvas.width * 0.005为半径的圆拼接成
        "lineSegRect": [
         
        


          [ //第一个个矩形
            [//上

              [
                canvas.width * 0.325,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.345,
                canvas.height * 0.5 +  canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.365,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.385,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.405,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.425,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.445,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.465,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.485,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.505,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],



              [
                canvas.width * 0.525,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.545,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.565,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.585,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.605,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.625,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.645,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.665,
                canvas.height * 0.5 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              
            ],
            [//下

              [
                canvas.width * 0.325,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.345,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.365,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.385,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.405,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.425,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.445,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.465,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.485,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.505,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.525,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.545,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.565,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.585,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.605,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.625,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.645,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.665,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              



            ],
            [//左
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.025,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.045,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.065,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.085,
                canvas.width * 0.005
              ],

             

            ],
            [//右
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.025,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.045,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.065,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.085,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.105,
                canvas.width * 0.005
              ],

            ],
            //左上
            [
              canvas.width * 0.305,
              canvas.height * 0.5 + canvas.width * 0.005,
              canvas.width * 0.005
            ],
            //左下

            [
              canvas.width * 0.305,
              canvas.height * 0.5 + canvas.width * 0.105,
              canvas.width * 0.005
            ],
            //右上
            [
              canvas.width * 0.695,
              canvas.height * 0.5 + canvas.width * 0.005,
              canvas.width * 0.005
            ],

            //右下
            [
              canvas.width * 0.695,
              canvas.height * 0.5 + canvas.width * 0.105,
              canvas.width * 0.005
            ],
          ],


          [ //第二个矩形
            [//上

              [
                canvas.width * 0.325,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.345,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.365,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.385,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.405,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.425,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.445,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.465,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.485,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.505,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],



              [
                canvas.width * 0.525,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.545,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.565,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.585,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.605,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.625,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.645,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.665,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
                canvas.width * 0.005
              ],

            ],
            [//下

              [
                canvas.width * 0.325,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.345,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.365,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.385,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.405,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.425,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.445,
                canvas.height * 0.5 + canvas.width * 0.16+ canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.465,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.485,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.505,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.525,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.545,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.565,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.585,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.605,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],


              [
                canvas.width * 0.625,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.645,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.665,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],




            ],
            [//左
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.025,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.045,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.065,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.305,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.085,
                canvas.width * 0.005
              ],



            ],
            [//右
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.025,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.045,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.065,
                canvas.width * 0.005
              ],
              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.085,
                canvas.width * 0.005
              ],

              [
                canvas.width * 0.695,
                canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
                canvas.width * 0.005
              ],

            ],
            //左上
            [
              canvas.width * 0.305,
              canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
              canvas.width * 0.005
            ],
            //左下

            [
              canvas.width * 0.305,
              canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
              canvas.width * 0.005
            ],
            //右上
            [
              canvas.width * 0.695,
              canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.005,
              canvas.width * 0.005
            ],

            //右下
            [
              canvas.width * 0.695,
              canvas.height * 0.5 + canvas.width * 0.16 + canvas.width * 0.105,
              canvas.width * 0.005
            ],
          ],


        ], //线段矩形
        "lineSegTriangle": [],//线段三角形
        "balloon": [] //气球圆形
      },
      
    ]
    //
    this.gameOverBornShell = []; 
    
  }

  /**
   * by wz  2018-08-22
   * 说明:用于生成 以及初始化游戏所需要的数据 
   *      每次进入新游戏都要刷新的数据
   */
  reset() {
    //关卡
    this.checkPoint = 1;
    //可以射击的次数
    this.shellNumber = 4;
    //蓄力是否开启
    this.welfarePower=false;
    //力度的大小
    this.power = 0;
    //力度的大小与帧数的关系
    this.powerTime = 1/60;

    this.bornShell = [];
    //气球的位置
    this.bornBalloon = [];
    //得分
    this.score = 0;
    //分数的动画先放一边
    //this.scoreDraw = 0;

    //转发重生
    this.repeatRenascence = true
  }
}