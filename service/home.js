import request from './network'
const baseURL = 'http://152.136.185.210:8000'
export function getMultiData() {
  return request({
    url: baseURL+'/home/multidata'
  })
}
export function getGoodsData(type,page){
  return request({
    url: baseURL + '/api/n3/home/data',
    data:{
      type,
      page
    }
  })
}