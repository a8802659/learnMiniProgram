// pages/home/home.js
import {getMultiData , getGoodsData} from '../../service/home'

const types = ['pop','new','sell']
const TOP_DISTANCE = 1000

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    isShowBackTop:false,
    ifTabFixed:false,
    tabScrollTop:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.请求轮播图以及推荐数据
    this._getMultiData()
    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  onReachBottom:function(options){
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll:function(options){
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;
    // 2.根据scrollTop 修改isShowBackTop
    // 官方：不要在滚动的函数中去频繁调用 this.setData
    const flag =scrollTop >= TOP_DISTANCE
    if(flag != this.data.isShowBackTop){
      this.setData({
        isShowBackTop:flag
      })
    }
    // 3.修改ifTabFixed
    const flag2 = scrollTop >= this.data.tabScrollTop
    if(flag2 != this.data.ifTabFixed){
      this.setData({
        ifTabFixed:flag2
      })
    }
  },
  onShow(){
  },
  // ----------------------------网络请求
  _getMultiData(){ 
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type){
    // 1.获取页码
    const page = this.data.goods[type].page+1
    // 2.发送网络请求
    getGoodsData(type,page).then(res => {
      // 2.1.取出数据
      const list = res.data.data.list
      // 2.2 新老数据合并
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      // 2.3 将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]:oldList,
        [pageKey]:page
      })
    })
  },
  // ----------------------------事件监听
  handleTabClick(e){
    // 取出index
    const index = e.detail.index;
    // 设置currentType
    this.setData({
      currentType:types[index]
    })
  },
  handleImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect=>{
      this.data.tabScrollTop = rect.top
    }).exec()
  }
})