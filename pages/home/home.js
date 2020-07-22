// pages/home/home.js
Page({
  data: {
    title:'首页数据，哈哈'
  },
  handlepushdetail(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})