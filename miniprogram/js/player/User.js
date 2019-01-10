import { DataStore } from "../base/DataStore.js"


const dataStore = DataStore.getInstance();
wx.cloud.init()
export class User {
  constructor() {

  }


 

  //OpenDataContext 写数据到开放性数据中
  writeDataToOpenDataContext(){
    if (!dataStore.readCloud)
      return;
    
    wx.setUserCloudStorage({
      KVDataList: [
        { key: "highestScore", value: dataStore.highestScore+""},
      ],
      success: function (srcsuccess) {
        console.log("修改微信自带排行数据", srcsuccess);
      },
      fail: function (srcfail) {
        console.log("修改微信数据失败", srcfail);
      }
    })
  }
  //向云端写入数据
  writeDataToCloud(){
    if (!dataStore.readCloud)
      return;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'newgamewritedatatocloud',
      // 传给云函数的参数
      data: {
        highestScore: dataStore.highestScore,
        //存档的分
        fileScore: dataStore.fileScore,
        //存档的关卡
        fileCheckPoint: dataStore.fileCheckPoint,
        //存档的炮弹次数
        fileShellNumber: dataStore.fileShellNumber,
        file : dataStore.file
      },
      success: function (res) {
        console.log("云保存调用成功" + res.result) // 3
      },
      fail: function (res) {


      },
      complete: function (res) {
        console.log("云保存调用" + res.result)
      }
    })
  }

  //获取云端数据同步项目中数据
  selectNewGameCloudData() {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'selectnewgameclouddata',
      // 传给云函数的参数
      data: {
      },
      success: function (res) {
       
        dataStore.readCloud =true;
        if (res.result.data.length==0){
          //云端没有数据
          dataStore.firstGame = true;
        }else{
          dataStore.highestScore = res.result.data[0].highestScore
          //存档的分
          dataStore.fileScore = res.result.data[0].fileScore
          //存档的关卡
          dataStore.fileCheckPoint = res.result.data[0].fileCheckPoint
          //存档的炮弹次数
          dataStore.fileShellNumber = res.result.data[0].fileShellNumber
          //是否保存过数据
          dataStore.file = res.result.data[0].file

        }

      },
      fail: function (res) {
        //读取数据失败直接按照没有玩过游戏
        dataStore.firstGame = true;
      },
      complete: function (res) {
        console.log('callFunction test result: ', res.result)
      }
    })
  }

}


