// pages/home/home.js
Page({
  data:{
    name:"WZF",
    age:"18",
    students:[
      {id:1,name:'阿飞',age:'12'},
      {id:2,name:'阿达',age:'22'},
      {id:3,name:'阿萨',age:'32'}
    ],
    counter:0
  },
  handleBtnClick(){
    // 1.直接修改是不能实现界面显示数据响应改变
    // this.data.counter++  
    // console.log(this.data.counter)
    // 2.this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})