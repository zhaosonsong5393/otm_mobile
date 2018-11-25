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
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

  },
  classify_click: function(event){
    let id = event.currentTarget.dataset.id
    console.log("收到参数:" + JSON.stringify(event.currentTarget.dataset.id))
    console.log(wx);
    wx.navigateTo({
      url: '../../pages/classify/index?id=' + id,
    })
  }
};
Page(pageData);
