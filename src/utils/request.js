/*
* 基于axios的请求模块
* */
import axios from 'axios'
// 创建一个axios实例
// 通过实例来发请求, 吧需要的配置给这个实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

export default request
