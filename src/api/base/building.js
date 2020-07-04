import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/base/building/list',
    method: 'get',
    params
  })
}
