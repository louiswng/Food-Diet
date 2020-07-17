// pages/shop/shop.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    totalprice:110,
    prodlist:[{
      id:1,
      name:"生菜",
      desc:["500g"],
      price:1.5,
      count:2,
      isselected:true,
      foodpath:"../../images/生菜.png"
    },{
      id:2,
      name:"牛肉",
      desc:["500g"," 肥瘦"],
      price:44,
      count:0,
      isselected:false,
      foodpath:"../../images/牛肉.png"
    },{
      id:3,
      name:"新土豆",
      desc:["500g"],
      price:4.5,
      count:1,
      isselected:true,
      foodpath:"../../images/土豆.png"
    },{
      id:4,
      name:"胡萝卜",
      desc:["500g"],
      price:2.5,
      count:1,
      isselected:true,
      foodpath:"../../images/萝卜.png"
    },{
      id:5,
      name:"银鳕鱼",
      desc:["500g"],
      price:100,
      count:1,
      isselected:true,
      foodpath:"../../images/鱼肉.png"
    },{
      id:6,
      name:"银鳕鱼",
      desc:["500g"],
      price:37.2,
      count:1,
      isselected:true,
      foodpath:"../../images/鱼肉.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  minus(){
    if(--this.data.count<1)this.data.count=1
    this.setData({
      count: this.data.count
    })
  },
  add(){
    this.setData({
      count: ++this.data.count
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