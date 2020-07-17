// pages/inventory/inventory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {id:"NT001",name:"燕麦",num:"20kg",time:"2020-4-3"},
      {id:"VG001",name:"土豆",num:"23.5kg",time:"2020-4-5"},
      {id:"VG002",name:"胡萝卜",num:"19kg",time:"2020-4-8"},
      {id:"VG003",name:"生菜",num:"15.5kg",time:"2020-4-6"},
      {id:"MT001",name:"三文鱼",num:"21.5kg",time:"2020-4-7"},
      {id:"MT002",name:"银鳕鱼",num:"12.5kg",time:"2020-4-2"},
      {id:"MT003",name:"鸡胸肉",num:"29.5kg",time:"2020-4-1"},
      {id:"MT004",name:"生牛肉",num:"31kg",time:"2020-4-9"},
      {id:"MT005",name:"鸭肉",num:"22.5kg",time:"2020-4-4"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad') 
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