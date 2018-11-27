//location.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    markers: [{
      iconPath: "/images/dw.png",
      latitude: 26.6121040000,
      longitude: 106.7258210000,
      width: 25,
      height: 25
    }]
  },
  onLoad: function() {
    var that = this;
    
  },
  click: function (e) {
    wx.openLocation({
      latitude: 26.6121040000,
      longitude: 106.7258210000,
      name: "贵州省欧缇蔓月子会所",
      address: '贵阳市云岩区黄山冲路38号a栋附近',
      scale: 18
    })
  }

})
