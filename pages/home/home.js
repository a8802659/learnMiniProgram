// pages/home/home.js
// getApp()获取调用App()产生的示例对象，
const app =getApp()
const name =app.globalData.name;
const age =app.globalData.age;


Page({
  handleGetUserInFO(event){
    console.log(event)
  },
  /**
   * 页面的初始数据
   */
  data: {
    message:'hahah',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success :res => {
        const data = res
        this.setData({
          list:data
        })
      }
    })
    // const _this = this;
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:function(res){
    //     const data = res;
    //     _this.setData({
    //       list:data
    //     })
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
    console.log('下拉刷新')
  },
  // 监听页面滚动 -显示scrollTop
  onPageScroll(obj){
    console.log(obj)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉到底了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})