import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/user/personnel/list',
    method: 'get',
    params
  })
}
