// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    age:0,
    tabtitle:['流行','新款','精选'],
    showMessages:['显示','隐藏'],
    showMessage:'显示',
    isShow:false
  },
  handleShow(){
    this.setData({
      isShow:!this.data.isShow
    })
    if(this.data.isShow){
      this.setData({
        showMessage:this.data.showMessages[1]
      })
    }else{
      this.setData({
        showMessage:this.data.showMessages[0]
      })
    }
  },
  handleIncrement(event){
    this.setData({
      counter:this.data.counter + 1,
      age:event.detail.age
    })
  },
  handleTabClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
    // 1.修改my-sel中的数据
    // const my_sel = this.selectComponent("class/id")
    const my_sel = this.selectComponent("#sel-id")
    // 2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter:my_sel.data.counter + 20
    // })
    // 3.通过调用组件的方法进行修改
    my_sel.incrementCounter(10)
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad---页面被加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady---页面初次渲染完成')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow----页面显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("onHide---页面被隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log('onUnload---页面被卸载')
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