import request from '@/utils/request'
export function getWarrantyData(params) {
    return request({
      url: '/warranty/assessment/data',
      method: 'get',
      params
    })
  }
