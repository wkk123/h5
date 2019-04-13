export function getQueryByName (name) {
  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const href = window.location.href
  let results = regex.exec(href)
  if (!results || !results[2]) {
    return ''
  }

  return results[2]
}

export function isEnv () {
  return new Promise((resolve, reject) => {
    if (/MicroMessenger/.test(window.navigator.userAgent)) {
      wx.miniProgram.getEnv((res) => {
        if (res.miniprogram) {
          resolve('weapp_mini')
        } else {
          resolve('weapp')
        }
      })
    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
      my.getEnv(res => {
        if (res.miniprogram) {
          resolve('alipay_mini')
        } else {
          resolve('alipay')
        }
      })
    } else {
      resolve('h5')
    }
  })
}
