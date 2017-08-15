Page({
  data: {},
  map: function() {
    wx.openLocation({
      latitude: 33.4341,
      longitude: 114.5222,
      name: '延安保卫培训中心',
      address: '周口市XXXXXXXXXXXXX'
    });
  },
  phone: function() {
    wx.showActionSheet({
      itemColor: '#666',
      itemList: [
        '0394-000000',
        '13500000000'
      ],
      success: function(res) {
        var phone = '';
        switch (res.tapIndex) {
          case 0:
            phone = '03940000000';
            break;
          case 1:
            phone = '13500000000';
            break;
          default:
            phone = '03940000000';
        }
        wx.makePhoneCall({
          phoneNumber: phone
        });
      }
    });
  }
});