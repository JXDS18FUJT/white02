import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/base/personnel/list',
    method: 'get',
    params
  })
}
