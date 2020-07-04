import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/user/buildUser/list',
    method: 'get',
    params
  })
}
