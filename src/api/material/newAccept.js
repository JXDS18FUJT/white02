import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/material/newAccept/list',
    method: 'get',
    params
  })
}
