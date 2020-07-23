// pages/home/childCpns/f-recommend/f-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },
  data: {
    isLoad:false
  },
  methods: {
    handleImageLoad(){
      if(!this.data.isLoad){
        this.triggerEvent('imageLoad')
        this.data.isLoad=true
      }
    }
  }
})
