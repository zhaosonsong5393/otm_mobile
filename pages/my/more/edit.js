
var appInstance = getApp();
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
    myinfo: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = util.formatDate(new Date());
    this.setData({
      date: date,
    });

    // console.log(this.data.myinfo);
  },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  changeDate(e) {
    this.setData({ date: e.detail.value });
  },
  on_edit: function (e) {
    var no = this.data.myinfo.no;
    wx.showToast({
      title: '资料更新成功！',
      icon:"success",
      duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
      success: function () {
        wx.navigateTo({
          url: 'index',
        })
       },
    })
   
  }
})