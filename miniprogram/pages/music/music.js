// pages/music/music.js

const MAX_LIMIT = 15
<<<<<<< HEAD
// const db = wx.cloud.database()
=======
const db = wx.cloud.database()
>>>>>>> 6a3d2d857938fd742ec16a6fc7b2128084692bce
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder: 'search',
<<<<<<< HEAD
    imgUrls:[{
        url:'http://p1.music.126.net/zUv2mRobckK7Tdn2bp9iSA==/109951165664840470.jpg?imageView&quality=89'
      },
      {
       url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
      },
      {
       url:'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/pOXTFta-mhTpZOGhBBWvhQ==/109951165664682857.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/j0gp3gBDRRoqIXxAs0v7oA==/109951165664720877.jpg?imageView&quality=89'
      }],
=======
    imgUrls:[],
    // imgUrls:[{
    //     url:'http://p1.music.126.net/zUv2mRobckK7Tdn2bp9iSA==/109951165664840470.jpg?imageView&quality=89'
    //   },
    //   {
    //    url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
    //   },
    //   {
    //    url:'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89'
    //   },
    //   {
    //     url:'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89'
    //   },
    //   {
    //     url:'http://p1.music.126.net/pOXTFta-mhTpZOGhBBWvhQ==/109951165664682857.jpg?imageView&quality=89'
    //   },
    //   {
    //     url:'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89'
    //   },
    //   {
    //     url:'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89'
    //   },
    //   {
    //     url:'http://p1.music.126.net/j0gp3gBDRRoqIXxAs0v7oA==/109951165664720877.jpg?imageView&quality=89'
    //   }],
>>>>>>> 6a3d2d857938fd742ec16a6fc7b2128084692bce
    playlist:[],
    // playlist: [{
    //     "id":"1001",
    //     "playCount":1.4641238e+06,
    //     "name":"打游戏的BGM",
    //     "picUrl": "http://p4.music.126.net/PpAhaDOwMb2I_3tw1WtT2w==/109951164165452578.jpg?param=140y140"
    //   },
    //   {
    //     "id":"1002",
    //     "playCount":325128,
    //     "name":"午休快速入睡大法",
    //     "picUrl": "http://p3.music.126.net/OMLCkEOTwbkWC_H5dX-Fxg==/109951163107315156.jpg?param=140y140"
    //   },
    //   {
    //     "id":"1003",
    //     "playCount":287641,
    //     "name":"现代静吧必备歌单",
    //     "picUrl": "http://p3.music.126.net/rI0eqkkhBUR-7R43BYw6_g==/19058934555882887.jpg?param=200y200"
    //   },
    //   {
    //     "id":"1004",
    //     "playCount":785262,
    //     "name":"靠缘分才能听到的神仙歌曲",
    //     "picUrl": "http://p4.music.126.net/p0S2rc2RndnIHAS6J8V-0Q==/109951163713672856.jpg?param=200y200"
    //   },
    //   {
    //     "id":"1005",
    //     "playCount":4.869138e+06,
    //     "name":"名侦探柯南剧场版主题旋律",
    //     "picUrl": "http://p3.music.126.net/zNSTmB-226Np2viSRhYXMw==/6006632022719045.jpg?param=200y200"
    //   },
    //   {
    //     "id":"1006",
    //     "playCount":524578,
    //     "name":"充满仙气的古风歌曲（戏腔）",
    //     "picUrl": "http://p3.music.126.net/rpptx8aqLfHub3BzcWk0yA==/109951164596927351.jpg?param=200y200"
    //   }],
    // musiclist:[{}]
    statusBarHeight: 0,
    opacity: 0,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let rect = app.globalData.sysInfo.rect
    console.log(JSON.stringify(rect))
    this.setData({
      statusBarHeight: app.globalData.sysInfo.statusBarHeight,
    })
    console.log(this.data.statusBarHeight)
    this._getPlaylist()
    // this._getSwiper()
    // const { statusBarHeight} = this.getStatusbarHeight()
    // this.setData({
    //   statusBarHeight
    // })
    //  // 小程序右上角的胶囊信息
    // const { height, top } = this.getMenuButton()
    // this.setData({
    //   navbarHeight: (top - this.data.statusBarHeight) * 2 + height
    // })

  },
  onPageScroll(e) {
    let scrollTop = e.scrollTop
    // console.log(scrollTop)
    let _opacity = (scrollTop / 100 > 1) ? 1 : scrollTop / 100
    // console.log(_opacity)
    this.setData({
      opacity: _opacity
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      playlist:[]
    })
    this._getPlaylist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getPlaylist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  
  _getPlaylist(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name:'playlist'
    }).then((res) => {
      console.log(res)
      this.setData({
        playlist: res.result
      })
      // wx.cloud.callFunction({
      //   name: 'music',
      //   data: {
      //     start: this.data.playlist.length,
      //     count:MAX_LIMIT,
      //     $url:'playlist'
      //   }
      // }).then((res) => {
      //   console.log(res)
      //   this.setData({
      //     playlist: this.data.playlist.concat(res.result.data)
      //   })
      wx.stopPullDownRefresh()
      wx.hideLoading()
    })
  },
})