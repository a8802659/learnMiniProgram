// pages/detail/detail.js
Page({
  handleBackHome(){
    wx.navigateBack({
      delta: 1,
    })
  },
  onLoad: function (options) {
    console.log(options)
  },
  onUnload(){
    // 1，获取首页的页面对象
    // getCurrentPage当前所有栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]
    // 2.调用页面对象的setData方法
    home.setData({
      title:'呵呵'
    })
  }
})