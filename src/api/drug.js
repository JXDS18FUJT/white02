import request from '@/utils/request'
export function getDrugListData(params) {
    return request({
      url: '/drug/list/data',
      method: 'get',
      params
    })
  }
