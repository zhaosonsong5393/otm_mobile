var appInstance = getApp();
var WxParse = require('../../components/wxParse/wxParse.js');
var util = require('../../utils/util.js');
import defaultData from 'data';
var pageData = {
  data: defaultData.data,
  need_login: false,

  onLoad: function(e) {},
  // 点击下拉列表
  typeChange: function(e) {
    this.setData({
      type_index: e.detail.value
    })
  },
  sortChange: function(e) {
    this.setData({
      sorts_index: e.detail.value
    })
  },
  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {
    console.log("下拉刷新")

    //当逻辑执行完后关闭刷新    
    wx.stopPullDownRefresh()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onProductDetail: function (event) {
    let id = event.currentTarget.dataset.id
    console.log("收到商品列表参数:" + JSON.stringify(event.currentTarget.dataset.id))
    console.log(wx);
    wx.navigateTo({
      url: '../../pages/goods/detail?id=' + id,
    })
  }
};
Page(pageData);