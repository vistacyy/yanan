App({
  data: {
    category: [{
        categoryId: '0',
        name: '资讯中心'
      },
      {
        categoryId: '1',
        name: '精品线路'
      },
      {
        categoryId: '2',
        name: '培训课程'
      },
      {
        categoryId: '3',
        name: '我的'
      }
    ],
    course: [{
      articleId: 0,
      image: '/image/jd1.jpg',
      title: '这里是课程题目这里是课程题目这里是课程题目这里是课程题目',
      discount: 690,
      price: 980,
      brief: '课程简介课程简介课程简介课程简介程简介课程简介课程简介程简介课程简介课程简介程简介课程简介课程简介程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介'
    }],

    scenery: [{
        articleId: 0,
        image: '/image/jd2.jpg',
        title: '这里是景点名称这里是景点名称这里是景点名称这里是景点名称这里是景点名称',
        discount: 289,
        price: 599,
        brief: '景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点'
      },
      {
        articleId: 0,
        image: '/image/jd2.jpg',
        title: '这里是景点名称这里是景点名称这里是景点名称这里是景点名称这里是景点名称',
        discount: 289,
        price: 599,
        brief: '景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点景点'
      }
    ],

  },

  // 小程序启动时提取首页数据
  onLaunch: function(options) {
    // console.log("app launched ", options);

  },
  globalData: {
    windowHeight: wx.getSystemInfoSync().windowHeight
  }
})