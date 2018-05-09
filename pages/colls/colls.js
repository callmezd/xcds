Page({
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:'请选择收获地址'
    })
  },
  data: {
    index: 0,
    multiIndex: [0, 0, 0],
    region: ['北京市', '北京市', '东城区'],
    customItem: '全部',
    userName:"",
    address:"",
    tele: 15680717059,
    addInfo:{
      userName:'',
      address:['','',''],
      detailAdd:'',
      tele:Number,
    }
  },



  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
    console.log(this.data.address)
  },
  teleInput:function(e){
  this.setData({
    tele:e.detail.value
  })
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  addressInput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },

  sub: function (e) {
    var teleReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; 
    console.log(this.data.userName)
    console.log(this.data.address)
    console.log(this.data.region)
    console.log(this.data.tele)
    if(this.data.userName==''){
      wx.showModal({
        title: '提示',
        content: '请填写收货人',
        success: function (res) {
        
        }
      })
    } else if (this.data.tele.length == 0 || this.data.tele.length < 11 || !teleReg.test(this.data.tele)){
      wx.showModal({
        title: '提示',
        content: '请填写正确的手机号',
        success: function (res) {
         
        }
      })
    } else if( this.data.address==''){
      wx.showModal({
        title: '提示',
        content: '详细地址不能为空',
        success: function (res) {

        }
      })
    } else{
      var addUser = 'addInfo.userName';
      var addAdd ='addInfo.address';
      var detailAdd ='addInfo.detailAdd';
      var tele='addInfo.tele'
    this.setData({
      [addUser]:this.data.userName,
      [addAdd]: this.data.region,
      [detailAdd]: this.data.address,
      [tele]:this.data.tele
    })
      var _this=this;
      wx.showLoading({
        title: '正在保存',
      })
      setTimeout(function () {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 100
        })       
        console.log(_this.data.addInfo)
      }, 2000)
    }
      
  }
})