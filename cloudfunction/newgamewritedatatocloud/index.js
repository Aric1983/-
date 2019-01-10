const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  let userRecord

  try {
    const querResult = await db.collection('newgamedata').doc(event.userInfo.openId).get()
    userRecord = querResult.data
  } catch (err) {
    // 用户第一次上传分数

  }

  if (userRecord) {
    return await db.collection('newgamedata').doc(event.userInfo.openId).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        highestScore: event.highestScore,
        //存档的分
        fileScore: event.fileScore,
        //存档的关卡
        fileCheckPoint: event.fileCheckPoint,
        //存档的炮弹次数
        fileShellNumber: event.fileShellNumber,
        file: event.file
      }
    })
  } else { //没有数据就写入数据
    try {
      return await db.collection('newgamedata').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          _id: event.userInfo.openId,
          highestScore: event.highestScore,
          //存档的分
          fileScore: event.fileScore,
          //存档的关卡
          fileCheckPoint: event.fileCheckPoint,
          //存档的炮弹次数
          fileShellNumber: event.fileShellNumber,
          
          file: event.file,

          firstTime: db.serverDate()
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

}