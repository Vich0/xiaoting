// pages/member/member.js
const globalData = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    users:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUsers()
  },
  getUsers(){
    const that=this
    wx.request({
      url: 'https://service-ocfokc81-1324460017.sh.tencentapigw.com/release/getUsers',
      data: JSON.stringify({"openid":globalData.userInfo.openid}),
      method:'POST',
      header: {
        'content-type': 'application/json'
      },
      success:res=>{
        that.setData({
          users:res.data.result
        }
        
        )
      }
    })
  },
  searchUser(event){
    const value = event.detail
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})