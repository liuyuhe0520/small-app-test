import wepy from 'wepy'

export default class loginMixin extends wepy.mixin {

  getUserInfo() {
    console.log('asdssssss')
    wepy.getSetting()
      .then((res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wepy.getUserInfo()
            .then((info) => {
              console.log(info)
            })
        } else {
          this.$redirect('/pages/login')
        }
      })
      .catch((err) => {
        console.log('a12312312')
        console.log(err)
        this.$redirect('/pages/login')
      })
  }

  onLoad() {
    this.getUserInfo()
  }
}
