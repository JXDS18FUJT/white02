import request from '@/utils/request'
export function getOrderMangetotal(params) {
    return request({
      url: '/workOrder/totalList/total',
      method: 'get',
      params
    })
  }