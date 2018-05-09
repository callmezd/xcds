// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:"",
    nickName:"",
    avatarUrl:"",
    gender:"",
    province:"",
    city:"",
    country:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  goadd:function(){
    console.log('red')
    wx.navigateTo({
      url: "../../pages/alladd/alladd"
    })
  },
  
  onLoad: function (options) {
    var _this = this;
    console.log(this)
    wx.getUserInfo({
      
   
        success: function(res) {
          var userInfo = res.userInfo
          var nickName = userInfo.nickName
          var avatarUrl = userInfo.avatarUrl
          var gender = userInfo.gender //性别 0：未知、1：男、2：女
          var province = userInfo.province
          var city = userInfo.city
          var country = userInfo.country
          _this.setData({
            userInfo, nickName, avatarUrl, gender, province, city
          })
          console.log(userInfo)
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