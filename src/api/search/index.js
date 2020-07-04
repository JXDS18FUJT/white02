import request from '@/utils/request'
export function getSearchData(params) {
    return request({
      url: '/search/mange/data',
      method: 'get',
      params
    })
  }