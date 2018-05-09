// pages/detail/detail.js

var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:[],
    num:1
  
  },
  addnum(){
    var _this = this

      this.setData({
        num: _this.data.num + 1
      })
    
  },
  cutnum() {
    var _this=this
        if(_this.data.num!=1) {
    this.setData({
      num: _this.data.num-1
    })
        }
  },
  addcart(){
    var _this=this;
    wx.request({
      url: 'http://127.0.0.1:8080/front/shoppingcart/shoppingcart/addOneToShoppingCart',
      data:{
        cartId: _this.data["obj"].categoryId,

        userId:1,	

        priceId:18,	

        goodsId:14	

      // quantity	

        // isBuy
      },
      success(res){
        console.log(res)
      }
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    wx.showLoading({
      title: '正在努力加载中...',
      icon: "success",
      duration:1000
    });
    var _this=this;
    wx.request({
      url: 'http://127.0.0.1:8080/admin/goods/goodsAdmin/getGoodsById?goodsId='+id,
      success:function(res){
          wx.setNavigationBarTitle({
            title: res.data["obj"].goodsName
          })

          _this.setData({
            obj: res.data["obj"]
          })
          var d = res.data["obj"].detailDescribe;
          console.log(d)
          console.log(res.data["obj"])

          // var article = d.attributes.html;
          // WxParse.wxParse('article', 'html', d, _this, 5);
      }
    })
    wx.request({
      url: 'http://127.0.0.1:8080/front/goodsPrice/goodsPrice/getGoodsPriceById',
      data:{
        priceId:id

      },
      success(res){
        console.log(res)
      }
    })
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
  
  }
})