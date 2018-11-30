var appInstance = getApp();
var WxParse = require('../../../components/wxParse/wxParse.js');
var util = require('../../../utils/util.js');
import defaultData from 'data';
Page({
  data: defaultData.data,
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  onTabsItemTap: function (event) {
    var index = event.currentTarget.dataset.index
    this.setData({
      currentTabsIndex: index
    })
  },

  on_click_order: function (event) {

    console.log("结算");
    wx.navigateTo({
      url: 'detail',
    })
  },
})