import request from '@/utils/request'

export function getNewsData(params) {
  return request({
    url: '/news/data/',
    method: 'get',
    params

  })
}

