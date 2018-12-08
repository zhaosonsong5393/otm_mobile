var appInstance = getApp();
var WxParse = require('../../components/wxParse/wxParse.js');
var util = require('../../utils/util.js');
import defaultData from 'data';
var pageData = {
  data: defaultData.data,
  onLoad: function (e) {
    console.log(getApp().globalData.userInfo)
    var date = util.formatDate(new Date());
    this.setData({
      date: date,
    });

    var time = util.formatTime_STIME(new Date());
    this.setData({
      time: time,
    });
  },

  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

  },
  
  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {
    console.log("下拉刷新")

    //当逻辑执行完后关闭刷新    
    wx.stopPullDownRefresh()
  },
  changeDate(e) {
    this.setData({ date: e.detail.value });
  },
  changeTime(e) {
    this.setData({ time: e.detail.value });
  },
  on_order:function(){
    console.log("收到服务参数:")
    console.log("立即购买");
    wx.navigateTo({
      url: '../../pages/my/order/detail',
    })
  }
};
Page(pageData);

