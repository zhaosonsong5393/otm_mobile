var appInstance = getApp();
var WxParse = require('../../components/wxParse/wxParse.js');
var util = require('../../utils/util.js');
import defaultData from 'data';
var pageData = {
  data: defaultData.data,
  need_login: false,
  page_form: 'none',
  prevPage: 0,
  communityComps: [],
  franchiseeComps: [{ "compid": "franchisee_list12", "param": { "id": "list-425846242321", "form": "app_shop", "page": 1, "app_id": "T404OMKoT3", "sort_key": "distance", "sort_direction": 1 } }],
  cityLocationComps: [],
  onLoad: function (e) {
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow: false
    });
    appInstance.setPageUserInfo();
    if (e.detail) {
      this.dataId = e.detail;
    }
    appInstance.checkLogin();

    this.suspensionBottom();
    this.getCartList();
    appInstance.globalData.urlLocationId = e.location_id;

  },
  dataInitial: function () {
    appInstance.dataInitial();
  },
  onShareAppMessage: function () {
    var pageRouter = this.page_router,
      pagePath = '/pages/' + pageRouter + '/' + pageRouter;

    // 统计用户分享APP
    appInstance.countUserShareApp();

    pagePath += this.dataId ? '?detail=' + this.dataId : '';
    return {
      title: appInstance.getAppTitle() || 'Message',
      desc: appInstance.getAppDescription() || '贵州欧缇蔓月子会所欢迎您！',
      path: pagePath
    }
  },
  onShow: function () {
    var that = this;
    setTimeout(function () {
     // appInstance.setPageUserInfo();
    });

    
  }
};
Page(pageData);
// pages/zx/zx.js
var categoryData = require("data.js")
Page({
  data: {
    currentIndex: 0
  },
  pud: function (e) {
    console.log(e)
    var img = e.currentTarget.dataset.img,
      text = e.currentTarget.dataset.text;
    wx.navigateTo({
      url: '../news/news?img=' + img + '&text=' + text
    })
  },
  onLoad: function (options) {
    //console.log(options)
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      categoryData: categoryData.default.data
    })
  },
  onAside: function (options) {
    //console.log(options)
    //下标
    var index = options.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      currentIndex: index
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  

})