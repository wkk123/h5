import axios from 'axios'
import Config from '../config/config'
import Vue from 'vue'
import Md5 from 'md5'
import qs from 'qs'
import moment from 'moment'
import {getQueryByName} from './util'

axios.defaults.timeout = 10000

axios.defaults.baseURL = Config.URL

axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}

Vue.prototype.$ajax = axios

const sign = function (data) {
  const keys = Object.keys(data).sort()
  let str = ''
  keys.map(key => {
    str += key + data[key]
  })
  str += Config.APPSECRET
  return Md5(str)
}
// decodeURIComponent
axios.interceptors.request.use(function (config) {
  console.log(config.data)
  const {data} = config
  let token = ''
  if (window.JSToken) {
    token = window.JSToken.getToken()
  } else {
    token = getQueryByName('token')
  }
  // const token =
  const baseConfig = {
    Token: (decodeURIComponent(token)),
    TimeStamp: moment().format('YYYYMMDDHHmmss'),
    RandomId: moment().format('YYYYMMDDHHmmss').toString() + parseInt(Math.random() * 1000000)
  }
  const newData = {...data, ...baseConfig}
  newData.sign = sign(newData)
  config.data = qs.stringify(newData)
  return config
}, function (error) {
  console.error(error)
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  console.error(error)
  return Promise.reject(error)
})
