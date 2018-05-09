// pages/serch/serch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serchVuale:'',
    flag: true,
    flag2: true,
    dataList:[]
  },
  goserch:function(e){
    var value = e.detail.value;
    console.log(value)
    this.setData({
      serchVuale: value,
    });
  },
  serchnow:function(){
    this.setData({
      flag2: true,
      flag: true,
    })
    console.log(this.data.serchVuale)
    var lei=[ ]
    var _this=this;
    if (this.data.serchVuale){
      
      console.log(this.data.serchVuale)
      wx.request({
        url: 'http://127.0.0.1:8080/admin/goods/goodsAdmin/getGoodsByPage',
        data: {
          goodsName: _this.data.serchVuale
        },
        success: function (data) {
          console.log(data)
          if(data.data["res"]==1){
            setTimeout(()=>{
              _this.setData({
                flag: false,
                dataList: data.data["obj"].dataList
              })
              console.log(_this.data.dataList)
              console.log(_this.data.flag)

            },1000)
        
          }else{
            setTimeout(() => {
              _this.setData({
                flag2: false,
              })
            }, 1000)
          }
        }
      })
    }
   
  },

  godetail:function(e){
      console.log(e.target.dataset.id);
      var id = e.target.dataset.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
  },

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