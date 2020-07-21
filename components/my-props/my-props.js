// components/my-props/my-props.js
Component({
  properties: {
    title:{
      type:String,
      value:"我是默认标题",
      observer:function(newValue,oldValue){
        console.log(newValue,oldValue)
      }
    }
  },
  externalClasses:[
    'titleclass'
  ]
})
