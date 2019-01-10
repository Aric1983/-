const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  let userRecord

  try {
    const querResult = await db.collection('gamedata').doc(event.userInfo.openId + "gamedata").get()
    userRecord = querResult.data
  } catch (err) {
    // 用户第一次上传分数

  }

  if (userRecord) {
    return await db.collection('gamedata').doc(event.userInfo.openId + "gamedata").update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        gamedata: event.gamedata 
      }
    })
  } else { //没有数据就写入数据
    try {
     return await db.collection('gamedata').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          _id: event.userInfo.openId + "gamedata",

          gamedata: event.gamedata
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

}