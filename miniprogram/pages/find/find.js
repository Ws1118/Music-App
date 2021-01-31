// pages/find/find.js
// 函数节流使用
let isSend = true;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cards:[
    //   {},{},{},{},{}
    // ]
    // iconUrl:''
    placeholderContent:"", // placeholder 的内容
    hotList:[],  // 热搜榜数据
    searchContent:"" , // 用户输入的表单项数据
    searchList:[],  // 关键字迷糊匹配的数据
    historyList:[], // 搜索历史纪录
  },

    /* 获取初始化的数据 */
    async getInitData() {
      let placeholderData = await request("/search/default");
      let hotListData = await request("/search/hot/detail");
      this.setData({
        placeholderContent:placeholderData.data.showKeyword,
        hotList:hotListData.data
      });
    },
  
     // 表单项数据发生变化时的回调
   handleInputChange(event) {
    console.log(event)
    this.setData({
      searchContent: event.detail.value.trim()
    });
     if(isSend === false){
       return;
     }
     isSend = false;
    // 知识点：函数节流
    setTimeout(()=>{
      // 发请求获取关键字模糊匹配数据
      this.getSearchList();
      isSend = true;
    },300);
  },
  
  // 获取搜索数据的功能函数
  async getSearchList() {
    if(!this.data.searchContent){
      this.setData({
        searchList:[]
      })
      return;
    }
    let searchListData = await request("/search", {keywords: this.data.searchContent, limit: 10});
    this.setData({
      searchList: searchListData.result.songs
    });

    // 将搜索的关键字添加到搜索纪录中
    if(historyList.indexOf(searchContent) !== -1){ // 已存在 删除
      historyList.splice(historyList.indexOf(searchContent));
    }
    historyList.unshift(searchContent); // 添加到前面
    this.setData({
      historyList:historyList
    });
    // 存在本地
    wx.setStorageSync("searchHistory",historyList);
  },
  // 获取本地历史纪录的功能函数
  getSearchHistory(){
    let historyList = wx.getStorageSync("searchHistory");
    if(historyList){
      this.setData({
        historyList:historyList
      })
    }
  },
  // 清空搜索内容回调
  clearSearchContent(event){
    this.setData({
      searchContent:"",
      searchList:[]
    })
  },

  // 删除搜索的历史纪录回调
  deleteSearchHistory(event){
    wx.showModal({
      content:"确定删除吗？",
      success:(res)=>{
        if(res.confirm){
          // 清空data中的 historyList
          this.setData({
            historyList:[]
          })
          // 移除本地的历史数据
          wx.removeStorageSync("searchHistory");
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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