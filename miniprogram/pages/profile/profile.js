// pages/profile/profile.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '', 
    userInfo: {}
  },
// 获取输入账号 
phoneInput: function (e) {
  this.setData({  
  phone: e.detail.value   
  })  
},
   
// 获取输入密码 
passwordInput: function (e) {  
  this.setData({  
  password: e.detail.value  
  })  
},
  
// 登录
login: function () {   
  if (this.data.phone.length == 0 || this.data.password.length == 0) {   
    wx.showToast({
      title: '用户名和密码不能为空',  
      icon: 'none',  
      duration: 2000 
    })  
  } else if(this.data.phone=="admin"&&this.data.password=="admin") { 
    // 这里修改成跳转的页面 
    wx.showToast({
      title: '登录成功', 
      icon: 'success',  
      duration: 2000,  
      success:function(){  
        wx.navigateTo({
          url: '../index/index'  
        })   
      }   
    })
  }else{  
    wx.showToast({   
      title: '登录失败',   
      icon: 'none',   
      duration: 2000  
    })  
  }  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据     
    app.getUserInfo(function (userInfo) {     
      //更新数据  
      that.setData({ 
      userInfo: userInfo   
      })  
    })   
  },   
    // 获取输入账号
    phoneInput: function (e) {
    this.setData({
    phone: e.detail.value   
    })    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})