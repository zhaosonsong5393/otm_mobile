var appInstance = getApp();
var WxParse = require('../../components/wxParse/wxParse.js');
var util = require('../../utils/util.js');
import defaultData from 'data';
var pageData = {
  data: defaultData.data,
  need_login: false,
  page_form: 'none',
  prevPage: 0,
  onLoad: function (e) {
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow: false
    });
    //appInstance.setPageUserInfo();
    if (e.detail) {
      this.dataId = e.detail;
    }
    //appInstance.checkLogin();

    
    //appInstance.globalData.urlLocationId = e.location_id;

  },
  dataInitial: function () {
  //  appInstance.dataInitial();
  },
  
  onShow: function () {
    var that = this;
    setTimeout(function () {
     // appInstance.setPageUserInfo();
    });

    
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
    console.log("刷新")
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

  },
  classify_click: function(event){
    let id = event.currentTarget.dataset.id
    console.log("收到参数:" + JSON.stringify(event.currentTarget.dataset.id))
    console.log(wx);
    if (id == 7) {
      wx.navigateTo({
        url: '../../pages/news/list?id=' + id,
      })
    } else if (id == 4) {
      wx.navigateTo({
        url: '../../pages/activity/index?id=' + id,
      })
    }else{
      wx.navigateTo({
        url: '../../pages/classify_list/index?id=' + id,
      })
    }
   
  },
  new_detail_click: function (event) {
    let id = event.currentTarget.dataset.id
    console.log("收到新闻列表参数:" + JSON.stringify(event.currentTarget.dataset.id))
    console.log(wx);
    wx.navigateTo({
      url: '../../pages/news/detail?id=' + id,
    })

  },
  onProductDetail: function (event) {
    let id = event.currentTarget.dataset.id
    console.log("收到商品列表参数:" + JSON.stringify(event.currentTarget.dataset.id))
    console.log(wx);
    wx.navigateTo({
      url: '../../pages/goods/detail?id=' + id,
    })
  },
  on_activety_detail: function (event) {
    let id = event.currentTarget.dataset.id
    console.log("收到活动列表参数:" + JSON.stringify(event.currentTarget.dataset.id))
    wx.navigateTo({
      url: '../../pages/activity/detail?id=' + id,
    })
  },
  on_media : function (event) {
    let id = event.currentTarget.dataset.id
    console.log("收到媒体列表参数:" + JSON.stringify(event.currentTarget.dataset.id))
    wx.navigateTo({
      url: '../../pages/media/index?id=' + id,
    })
  }
};
Page(pageData);
