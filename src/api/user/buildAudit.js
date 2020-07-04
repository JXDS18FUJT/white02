import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/user/buildAudit/list',
    method: 'get',
    params
  })
}
