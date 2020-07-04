import request from '@/utils/request'

export function getMonitorDeviceList(params) {
  return request({
    url: '/monitor/device/list',
    method: 'get',
    params

  })
}

export function getMonitorDeviceData(params){
    return request({
        url: '/monitor/device/data',
        method: 'get',
        params
    
      })
}