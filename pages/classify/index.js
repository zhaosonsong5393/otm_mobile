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
  }
};
Page(pageData);

