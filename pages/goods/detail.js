Page({
  data: {
    isLike: false,
    // banner
    imgUrls: [
      "http://120.25.219.228:8000/images/classify/10.jpg",
      "http://120.25.219.228:8000/images/classify/9.jpg",
      "http://120.25.219.228:8000/images/classify/8.jpg",
      "http://120.25.219.228:8000/images/classify/7.jpg",
      "http://120.25.219.228:8000/images/classify/6.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    thestar: 3,
    // 商品详情介绍
    detailImg: [
      "http://120.25.219.228:8000/images/classify/5.jpg",
      "http://120.25.219.228:8000/images/classify/4.jpg",
      "http://120.25.219.228:8000/images/classify/3.jpg",
      "http://120.25.219.228:8000/images/classify/2.jpg",
      "http://120.25.219.228:8000/images/classify/1.jpg"
    ],

    
    currentTabsIndex:0,
    productCount:1,
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    console.log(2)
    wx.switchTab({
      url: '/pages/cart/index'
    })
  },
  // 立即购买
  immeBuy() {
    console.log("立即购买");
    wx.navigateTo({
      url: '../../pages/my/order/detail',
    })
  },
  onTabsItemTap:function(event){
    var index = event.currentTarget.dataset.index
    this.setData({
      currentTabsIndex:index

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
})