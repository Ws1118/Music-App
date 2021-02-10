App({
  onLaunch: function (options) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env:'wangs-8god2agcd87d8668',
        traceUser: true,
      })
    }
    
    this.getOpenid()

    this.globalData = {
      sysInfo: this.getSysInfo(),
      openid: -1,
    }
  },
  getOpenid() {
    wx.cloud.callFunction({
      name: 'login'
    }).then((res) => {
      const openid = res.result.openid
      this.globalData.openid = openid
      if (wx.getStorageSync(openid) == '') {
        wx.setStorageSync(openid, [])
      }
    })
  },
  getSysInfo: function () {
    //获得系统信息
    let systemInfo = wx.getSystemInfoSync()
    //计算px转换到rpx的比例
    let pxToRpxScale = 750 / systemInfo.windowWidth;
    //状态栏的高度px
    let statusBarHeight = systemInfo.statusBarHeight
    //胶囊按钮信息
    let rect = wx.getMenuButtonBoundingClientRect()
    const sysInfo = {
      pxToRpxScale,
      statusBarHeight,
      rect
    }
    return sysInfo
  },

  // onShow(options){
  //   console.log('onShow 执行')
  //   console.log(options)
  // },
     
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    } 
  },
    globalData: {     
      userInfo: null    
    }    
})
