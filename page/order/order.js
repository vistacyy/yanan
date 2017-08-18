var app = getApp();
Page({
  data: {
    WH: app.globalData.windowHeight
  },
  onLoad: function() {
    // console.log('WH', this.data.WH);
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },

})