App({
  data: {
    // 以下为模拟数据
    category: [{
        categoryid: '0',
        name: '资讯中心',
        logo: '/image/cate1.png',
        bgcolor: '#32b324'
      },
      {
        categoryid: '1',
        name: '精品线路',
        logo: '/image/cate2.png',
        bgcolor: '#f1c40e'
      },
      {
        categoryid: '2',
        name: '培训课程',
        logo: '/image/cate3.png',
        bgcolor: '#ea65a2'
      },
      {
        categoryid: '3',
        name: '公司风采',
        logo: '/image/cate4.png',
        bgcolor: '#aa99ff'
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
    windowHeight: wx.getSystemInfoSync().windowHeight,
    categoryid: '0'
  }
})