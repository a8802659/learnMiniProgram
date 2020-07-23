// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    itemClick(e) {
      // 1.设置最新的index
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      // 2.发出事件
      const data = {index: this.data.currentIndex}
      this.triggerEvent("tapclick", data, {})
    },
  }
})
