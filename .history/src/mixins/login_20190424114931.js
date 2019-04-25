import wepy from 'wepy'

export default class loginMixin extends wepy.mixin {

  methods = {
    getUserInfo() {
      console.log('asdssssss')
      wepy.getUserInfo()
        .then((res) => {
          this.globalData.userInfo = res.userInfo
          console.log(res)
        })
        .catch((err) => {
          console.log('a12312312')
          console.log(err)
          this.$redirect('pages/index')
        })
    }
  }

  onLoad() {
    this.getUserInfo()
    console.log('mixin onLoad')
  }
}
