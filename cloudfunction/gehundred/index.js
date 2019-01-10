// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const MAX_LIMIT = 7
/**
 * 获取总排行数据
 */
exports.main = async (event, context) => {
  const tasks = []
  const promise = db.collection('rankList').skip(event.pageId * MAX_LIMIT).limit(MAX_LIMIT).orderBy('score', 'desc').get()
  tasks.push(promise)
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}

