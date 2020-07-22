// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中...',
      duration: 3000,
      icon:'loading', //success loading none
      // image:'' // 自定义图标的本地路径，image 的优先级高于 icon
      mask:true,  //是否显示透明蒙层，防止触摸穿透
      success:function(){
        console.log("弹窗成功")
        // wx.hideToast()  可手动设置隐藏
      },
      fail:function(){
        console.log('弹窗失败')
      },
      complete:function(){
        console.log('弹窗完成')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title:'我是标题',
      content:'我是内容哈哈哈',
      // showCancel:false,//是否显示取消键
      cancelText:'取消', 
      confirmText:'下载',
      cancelColor:'red',
      confirmColor:'blue',
      success:function(res){
        if(res.cancel){
          console.log('用户点击了取消')
        }
        if(res.confirm){
          console.log('用户点击了确定')
        }
      },
      fail:function(err){
        console.log('调用失败')
      },
      complete:function(){
        console.log('调用完成')
      }
    })
  },
  handleShowLoding(){
    wx.showLoading({ //不会自动消失，可以在success完成加载后调用wx.hideLoading()
      title: '加载ing',
      mask:true,
    })
    setTimeout(()=>{
      wx.hideLoading()
    },1000) 
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['想吃','不想'],
      itemColor:'red',
      success:function(res){
        switch(res.tapIndex){
          case 0:
            console.log('用户想吃');
            break;
          case 1:
            console.log('用户不想');
            break;
        }
      }
    })
  },
  onShareAppMessage:function(options){
    return {
      title:'aaa',
      path:"pages/about/about",
      imageUrl:'https://www.csdn.net/' 
    }
  }
})