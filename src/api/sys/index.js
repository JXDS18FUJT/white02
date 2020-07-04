import request from '@/utils/request'
export function getsysData(params) {
    return request({
      url: '/sys/data/',
      method: 'get',
      params
    })
  }