var appInstance = getApp();
var WxParse = require('../../components/wxParse/wxParse.js');
var util = require('../../utils/util.js');
import defaultData from 'data';
var pageData = {
  data: defaultData.data,
  need_login: false,

  onLoad: function (e) {
  },
  // 点击下拉列表
  typeChange: function (e) {
    this.setData({
      type_index: e.detail.value
    })
  },
  sortChange: function (e) {
    this.setData({
      sorts_index: e.detail.value
    })
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
  onProductDetail: function (event) {
    let id = event.currentTarget.dataset.id
    let type = event.currentTarget.dataset.type
    console.log("收到商品列表参数:" + JSON.stringify(event.currentTarget.dataset))
    console.log(wx);
    if (type == 1) {
      wx.navigateTo({
        url: '../../pages/serve/index?id=' + id,
      })
    } else {
      wx.navigateTo({
        url: '../../pages/goods/detail?id=' + id,
      })
    }

  }
};
Page(pageData);

