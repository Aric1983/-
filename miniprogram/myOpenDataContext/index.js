let sharedCanvas = wx.getSharedCanvas(); // 子域

let cvs = sharedCanvas.getContext('2d')

var friendArrayList = [];

var friendRankingPage=1;

//每次点击好友排行榜数据是只加载一次 并完成初次的绘画
function getFriendRankingDataAndFirstDraw() {
  // 初始化外框
 //drawRankingItems(0)
 // 获取好友数据
 console.log("没进来吗");
  wx.getFriendCloudStorage({
    keyList: ["highestScore"],
    success(result) {
      let arrayList = result.data
      console.log(arrayList);
      for (let index in arrayList){
        if (arrayList[index].KVDataList.length==0){
          arrayList[index].KVDataList[0] = { key: "highestScore", value: "0" }
        }
      }
      console.log(arrayList);
      arrayList.sort(function (a, b) {
        return b.KVDataList[0].value -a.KVDataList[0].value 
      })
      friendArrayList = [].concat( arrayList);
      for(let i=0;i<100; i++){
        friendArrayList[5+i] = arrayList[4];
      }
      getFriendRankingDraw(0)
    }
  })
}

function getFriendRankingDraw(i){
  //第一名 F43516
  //第二名 F55d28
  //第三名 F0B832
  //清除画布
  cvs.clearRect(0,0,1080,1920)
  if (i == 0) { //等于零时直接在第一页
    friendRankingPage = 1;
  }else if (i<=-1){ //上一页 
    friendRankingPage--
    if (friendRankingPage<=0) //判断是否小于第一页
      friendRankingPage = 1;
  } else if (i >= 1) {  //下一页
    friendRankingPage++
    if (friendArrayList.length <= (friendRankingPage-1)*10) //判断是否页数大于条数 每页十条
      friendRankingPage--;
  }


  var num = friendArrayList.length >= (friendRankingPage) * 10 ? 10 : friendArrayList.length - (friendRankingPage - 1) * 10

  for (let j = 0; j < num; j++) {
    //名次
    if (j == 0 && friendRankingPage == 1)
      cvs.fillStyle = "#F43516"
    else if (j == 1 && friendRankingPage == 1)
      cvs.fillStyle = "#F55d28"
    else if (j == 2 && friendRankingPage == 1)
      cvs.fillStyle = "#F0B832"
    else
      cvs.fillStyle = "#888888"
    var big = sharedCanvas.width * 0.08 + "px Arial"

    cvs.font = big
    cvs.textAlign = 'center'
    cvs.fillText(
      (j + 1 + (friendRankingPage - 1) * 10) + "",
      sharedCanvas.width * 0.07,
      sharedCanvas.height * 0.07 + (j * sharedCanvas.height * 0.1)

    )

    
    var big = sharedCanvas.width * 0.08 + "px Arial"
    cvs.font = big
    cvs.textAlign = 'right'
    //分数
    cvs.fillText(
      friendArrayList[j + (friendRankingPage - 1) * 10].KVDataList[0].value,
      sharedCanvas.width * 0.9,
      sharedCanvas.height * 0.07 + (j * sharedCanvas.height * 0.1)
    )
   
    var big = sharedCanvas.width * 0.05 + "px Arial"
    cvs.font = big
    cvs.textAlign = 'center'
    //名字
    cvs.fillText(
      friendArrayList[j + (friendRankingPage - 1) * 10].nickname,
      sharedCanvas.width * 0.4,
      sharedCanvas.height * 0.06 + (j * sharedCanvas.height * 0.1)
    )
    //头像的绘画
    let image = wx.createImage();
    image.src = friendArrayList[j + (friendRankingPage - 1) * 10].avatarUrl
   
    if (image.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
      cvs.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        sharedCanvas.width * 0.15,
        sharedCanvas.height * 0.1 * j + (sharedCanvas.height * 0.1 - sharedCanvas.width * 0.1) / 2,
        sharedCanvas.width * 0.1,
        sharedCanvas.width * 0.1,
      )
    } else {
      image.onload = function () { //图片下载完毕时异步调用callback函数。
        cvs.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          sharedCanvas.width * 0.15,
          sharedCanvas.height * 0.1 * j + (sharedCanvas.height * 0.1 - sharedCanvas.width * 0.1) / 2,
          sharedCanvas.width * 0.1,
          sharedCanvas.width * 0.1,
        )
      };
    }
  }
}

//获取世界排行榜
function getWorldRanking() {
  wx.getUserInfo({
    openIdList: ["ooyPE5LJTm3_garncFGvNcynSVGs"],
    success: (result) => {
      console.log(result)
    }
  })
}



//监听主域消息
wx.onMessage(data => {
  switch (data['type']) {
    case 'friendsRank':
      //getWorldRanking()
      getFriendRankingDataAndFirstDraw()
      break;
    case 'friendsRankUp':
      getFriendRankingDraw(-1)//好友排行上一页
      break;
    case 'friendsRankDown':
      getFriendRankingDraw(1) //好友排行下一页
      break;
  }

})




