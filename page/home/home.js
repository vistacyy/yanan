let appInstance = getApp();
Page({
  data: {
    currentTab: 'course',
    content: appInstance.data.course,
    // 模拟数据
    swipers: [{
        articleId: '0',
        image: '/image/jd0.jpg'
      },
      {
        articleId: '1',
        image: '/image/jd1.jpg'
      },
      {
        articleId: '2',
        image: '/image/jd2.jpg'
      }
    ],
    category: appInstance.data.category,

  },

  onLoad: function() {
    // console.log('appInstance', appInstance);
  },

  // TODO:点击轮播图进入相应的文章页面
  swiperTap: function(e) {
    // console.log('swiperchange',e);
    wx.navigateTo({
      url: '/page/detail/detail?articleId=' + e.currentTarget.dataset.articleid,
    });
  },

  // TODO:进分类列表
  toCategory: function(e) {
    // console.log('toCategory', e);
    appInstance.globalData.categoryid = e.currentTarget.dataset.categoryid;
    wx.switchTab({
      url: '/page/category/category'
    });
  },
  // 切换TAB时，更新列表数据
  selectCourse: function() {
    this.setData({
      currentTab: 'course',
      content: appInstance.data.course,
    });
  },

  selectScenery: function() {
    this.setData({
      currentTab: 'scenery',
      content: appInstance.data.scenery,
    });
  },
  // 转发
  onShareAppMessage: function() {
    return {
      title: '测试',
      path: '/page/home/home'
    }
  }
})