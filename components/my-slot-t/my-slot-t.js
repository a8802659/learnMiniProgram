// components/my-slot-t/my-slot-t.js
Component({
  options:{
    multipleSlots:true
  },
  pageLifetimes:{
    show(){
      console.log('show---组件所在页面显示出来了')
    },
    hide(){
      console.log('hide---页面被隐藏')
    },
    resize(){
      console.log('resize---页面尺寸大小改变')
    }
  },
  lifetimes:{
    created() {
      console.log('created---组件被创建')
    },
    attached() {
      console.log('attached---组件被添加到页面中')
    },
    ready() {
      console.log('ready---组件被渲染出来')
    },
    movied() {
      console.log('movied---组件被移动到节点树另外一个位置')
    },
    detached() {
      console.log('detached---组件被移除')
    }
  }
})
