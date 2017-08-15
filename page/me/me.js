Page({
  data: {
    currentTab: '0',
    userInfo: {},
    category: [{
        categoryid: '0',
        name: '全部订单',
      },
      {
        categoryid: '1',
        name: '待付款',
      },
      {
        categoryid: '2',
        name: '待使用',
      },
      {
        categoryid: '3',
        name: '待评价',
      },
      {
        categoryid: '4',
        name: '退款',
      }
    ],
  },
  onLoad: function() {
    // wx.login({
    //   success: function(res) {
    //     console.log('login=========>', res);
    //   },
    // });
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        // console.log('getUserInfo=========>', res.userInfo);
        that.setData({
          userInfo: res.userInfo
        });
      },
    });
  },

  order: function(e) {
    wx.navigateTo({
      url: '/page/order/order'
    });
  },

})