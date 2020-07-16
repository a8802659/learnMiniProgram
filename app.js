// 注册一个小程序示例
App({
  // 定义全局属性
  globalData:{
    name:'wzf',
    age:18
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log(options)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options)
    // 1.判断小程序的进入场景
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    // 2.获取用户信息，并且获取用户信息字后，将用户的信息传递给服务器
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
