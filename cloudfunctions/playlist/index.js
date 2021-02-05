// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'wangs-8god2agcd87d8668'
})

const db = cloud.database()
const playlistCollection = db.collection('playlist')

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await playlistCollection.get()
  console.log('#######' + res.data)
  return res.data
}