var appInstance = getApp();
var WxParse = require('../../components/wxParse/wxParse.js');
var util = require('../../utils/util.js');
import defaultData from 'data';
var pageData = {
  data: defaultData.data,

  onLoad: function (e) {
    console.log(getApp().globalData.userInfo)
  },

  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  },
 
  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {
    console.log("下拉刷新")

    //当逻辑执行完后关闭刷新    
    wx.stopPullDownRefresh()
  }
};
Page(pageData);

