import request from '@/utils/request'
export function getsmartDevicesPrewarningData(params) {
    return request({
      url: '/smartDevices/prewarning/data',
      method: 'get',
      params
    })
  }