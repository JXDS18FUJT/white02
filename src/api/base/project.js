import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/base/project/list',
    method: 'get',
    params
  })
}
