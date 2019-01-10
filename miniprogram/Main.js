import { ResourceLoader } from "./js/base/ResourceLoader.js"
import { Director } from "./js/Director.js"
import { DataStore } from "./js/base/DataStore.js"
import { ClickDetection } from "./js/player/ClickDetection.js"
import { Repeat } from "./js/player/Repeat.js"
import { Shell } from "./js/player/Shell.js"
import { User } from "./js/player/User.js"
import { Sprite } from "./js/base/Sprite.js"
import { Background } from "./js/runtime/Background.js"
import { Bar } from "./js/runtime/Bar.js"
import { Music } from "./js/runtime/Music.js"
import { Ranking } from "./js/runtime/Ranking.js"
const dataStore = DataStore.getInstance();

//用于检测游戏包是否加载完后
let loadCount = 0;
export class Main {
  constructor() {
    //const canvas = wx.createCanvas()
    this.ctx = canvas.getContext('2d');
    this.welfareCanvas = wx.createCanvas() // 其他画布
    sharedCanvas.width=1080
    sharedCanvas.height=1920
    this.cws = this.welfareCanvas.getContext('2d')
    let loader = ResourceLoader.creat();
    loader.onLoaded(map => this.onResourceFirstLoader(map));
  }
  onResourceFirstLoader(map) {
    dataStore.ctx = this.ctx;
    dataStore.welfareCanvas = this.welfareCanvas;
    dataStore.cws = this.cws;
    dataStore.res = map;
    console.log("map集合的大小" + map.size);
    this.init();
  }

  init() {
    dataStore
      .put('sprite', Sprite)
      .put('clickDetection', ClickDetection)
      .put("music", Music)
      .put('director', Director)
      .put('bg', Background)
      .put('bar', Bar)
      .put('repeat', Repeat)
      .put('user', User)
      .put('ranking', Ranking)
     
    //右上角的转发事件
    dataStore.get("repeat").repeatA();

    dataStore.only() //初始化读取数据只需要加载一次
    dataStore.get("user").selectNewGameCloudData()

    this.readCloudRun()

    dataStore.gameOverBornShell.push(new Shell(canvas.width * 0.1, canvas.height * 0.1, canvas.width * 0.005, canvas.width * 0.005, 0.15, canvas.width * 0.1))
    dataStore.gameOverBornShell.push(new Shell(canvas.width * 0.9, canvas.height * 0.9, canvas.width * 0.01, canvas.width * 0.01, 0.18, canvas.width * 0.06))
   
    console.log("cw",canvas.width, "cw",canvas.height,"jw",dataStore.jxw,"jh",dataStore.jxh)
    //自定义字体失败
     //var font = wx.loadFont("audio/num.ttf");
    //console.log("字体文件"+font)
    //dataStore.get("user").getUserInfo()
    
    
    var loadTask = wx.loadSubpackage({
      // name 可以填 name 或者 root
      name: 'stage1',
      success(res)  {
        //分包加载回调成功的返回值
        dataStore.readPackage =true;
      },
      fail(res) {
       
      },
      
    })

    loadTask.onProgressUpdate(res => {
    
    })
    
     
  
    //小游戏f返回的检测函数
    wx.onShow(function(res) {
      console.log("小游戏返回query", res.query,res);
     
    });

    wx.getLaunchOptionsSync(function (res) {
      console.log("小游戏启动query", res.query,res);

    });

    wx.onHide(function() {
    
      
    });
   
    

    
    //监听网路状态
    wx.onNetworkStatusChange(function (res) {
      //监听网络波动
      console.log("监听网络波动情况",res);
      dataStore.isConnected = res.isConnected;
    })
    //版本更新检测 强制更新到最新版本
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log("版本更新检测",res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
    
    dataStore.button = wx.createFeedbackButton({
      type: 'text',
      text: '',
      style: {
        left: canvas.width * 0.3 / canvas.width * dataStore.jxw,
        top: (canvas.height * 0.5 + canvas.width * 0.16) / (canvas.width * dataStore.jxwhb) * dataStore.jxh,
        width: canvas.width * 0.4 / canvas.width * dataStore.jxw,
        height: canvas.width * 0.11 / (canvas.width * dataStore.jxwhb) * dataStore.jxh ,
        lineHeight: 40,
        backgroundColor: '',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4,
      }
    })
    dataStore.button.hide()
    
  }


  //云函数读取的检测
  readCloudRun() {
   
    if (dataStore.readCloudTime==600){
      wx.showLoading({
        title: '同步云端数据中',
      })
      
     
    }
    dataStore.get('bg').load()
    dataStore.readCloudTime--;

    let i = requestAnimationFrame(() => this.readCloudRun());

    if ((dataStore.readCloud&& dataStore.readPackage)|| dataStore.readCloudTime==0) {
      cancelAnimationFrame(i);
     
      if (dataStore.readCloud && dataStore.readPackage){ //加载成功可以进入游戏
       
        dataStore.readCloudTime =600;
        //停止提示
        wx.hideLoading();
        //点击事件
        dataStore.get('clickDetection').initEvent();

        //起始亦是终，不在游戏中的画面
        dataStore.get("director").gameOverRun()
        dataStore.menu = -1;
        dataStore.button.show()
      }else{ //云函数加载失败
        dataStore.readCloudTime = 600;
        //停止提示
        wx.hideLoading()
        dataStore.get('clickDetection').initEvent();
        
        //起始亦是终，不在游戏中的画面
        dataStore.get("director").gameOverRun()
        dataStore.menu = -1;
        dataStore.button.show()
      }
    }
  }
 

}