import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/base/department/list',
    method: 'get',
    params
  })
}
