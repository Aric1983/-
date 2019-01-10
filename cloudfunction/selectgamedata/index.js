const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  // collection 上的 get 方法会返回一个 Promise，因此云函数会在数据库异步取完数据后返回结果
  return db.collection('gamedata').where({
    _id: (event.userInfo.openId + "gamedata"), // 填入当前用户 openid
  }).get({
    success: function (res) {
      console.log(res.data)
    }
  })

}