const TOKEN = 'token'
App({
  // 保存到对象中在小程序关闭后会回收，所以还需要进行本地存储
  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓存中取出token，没有则进行登录
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length != 0){
      this.check_token(token)// 验证是否过期
    }else{ //登录
      this.login()
    }
  },
  check_token(token){
    console.log('执行验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{token},
      success:function(res){
        console.log(res)
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  login(){
        console.log('执行登录操作')
        wx.login({
          // code只有五分钟有效期
          success:(res) => {
            // 1.获取code
            const code = res.code;
            // 2.将code发送到服务器
            wx.request({
              url: 'http://123.207.32.32:3000/login',
              method:'post',
              data:{
                code
              },
              success:(res) => {
                // 1.取出token
                const token = res.data.token;
                // 2.将token保存在globalData中
                this.globalData.token = token;
                // 3.本地存储
                wx.setStorageSync(TOKEN, token)
              }
            })
          }
        })
  }
})
