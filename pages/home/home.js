// pages/home/home.js
import request from '../../service/network.js'

Page({
  data: {
  },
  onLoad: function (options) {
    // ---------------------------2.使用封装的网络请求
    request({
      url:'http://152.136.185.210:8000/home/multidata'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // ---------------------------1.原生网络请求
    // wx.request({
      // 1.简单请求
      // url: 'http://152.136.185.210:8000/home/multidata',
      // success:function(res){
      //   console.log(res)
      // }
      // 2.get请求携带参数
      // url: 'http://152.136.185.210:8000/api/n3/home/data',
      // data:{
      //   type:'sell',  
      //   page:1
      // },
      // success:function(res){
      //   console.log(res)
      // }
    // })
     // 3.post请求 并携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:"codewhy",
    //     age:"18"
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
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