const Mock = require('mockjs')
Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  }
})
module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          number:'@id()',
          title: '@ctitle',
          'status|0-1': 0,
          author: '@cname',
          lxr:'@cname',
          phone:'@phone',
          dwxz: '@ctitle',
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/base/department/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          title: '@ctitle',
          'status|0-1': 0,
          pid:0,
          'children|0-5':[{
            id: '@id',
            create:'@datetime',
            title: '@ctitle',
            'status|0-1': 0,
            pid:1
          }]
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/base/personnel/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@date',
          title: '@ctitle',
          'status|1': ["0","1"],
          xm: '@cname',
          zw:'@ctitle(2, 4)',
          'xb|1':["男","女"],
          bday:'@date',
          phone:'@phone',
          remark:'',
          update:'@datetime'
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/base/project/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@date',
          gcmc: '@ctitle',
          gcdz: '@csentence',
          num1:'@integer(5, 50)',
          num2:'@integer(100000, 569800)',
          num3:'@integer(10000, 20000)',
          dw1:'@ctitle',
          dw2:'@ctitle',
          dw3:'@ctitle',
          'status|1': ["0","1"]
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/base/building/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@date',
          ldh: '@integer(1, 10)',
          xkz:'@id',
          gcmc:'@ctitle',
          'jzyt|1':['居住','办公'],
          type:'砖混',
          num1:'@integer(20, 50)',
          num2:'@integer(1, 10)',
          t1:'@date',
          t2:'@date',
          num3:'@integer(1000, 2000)',
          num4:'@integer(1000, 2000)',
          'status|1': ["0","1"]
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/user/personnel/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@date',
          userId: '@id',
          userType:'个人用户',
          openId:'@guid',
          phone:'@phone',
          nick:'@cname',
          name:'@cname',
          'sex|1':['男','女'],
          birthday:'@date("yyyy-MM")',
          address:'@county(true)',
          'status|1': ["0","1"]
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/user/buildUser/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@date',
          userId: '@id',
          userType:'企业用户',
          phone:'@phone',
          number:'@guid',
          name:'@ctitle',
          'type|1':['国有企业','私营企业'],
          'status|1': ["0","1"]
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/user/buildAudit/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@date',
          userId: '@id',
          'userType|1':['首次认证','变更认证'],
          phone:'@phone',
          number:'@id',
          aname:'@ctitle',
          'cType|1':['私企','国企'],
          'type|1':['待审核','审核失败','审核通过'],
          fr:'@cname',
          lxr:'@cname',
          lxrPhone:'@phone'
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/material/newAccept/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          'source|1': ['小程序','PC网页','电话','窗口'],
          no:'@guid',
          applyType:'新建预防',
          'type|1':['待受理','已受理'],
          buildId:'@id',
          name:'@ctitle',
          objId:'@id',
          objName:'@ctitle',
          objAddress:'@county(true)',
          'state|1':['待受理','待审核'],
          time:'@date',
          'checkState|1':['待审核','审核通过','审核失败'],
          'remark|1':['','资料不全'],
          size:'@float(60, 100, 1, 2)',
          'status|1': ["0","1"],
          'source1|1':['用户申报','内部申报'],
          'fp|1':['待分派','已分派'],
          name1:'@cname',
          'state2|1':['待分派人员','待施工'],
          'fantype|1':['','化学防护','监测控制'],
          'fanzd|1':['待制定','待审核'],
          'state3':'待方案制定'
        }]
      })
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/monitor/device/list',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          'source|1': ['小程序','PC网页','电话','窗口'],
          no:'@guid',
          applyType:'新建预防',
          'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          name:'@ctitle',
          objId:'@id',
          floorId:'@integer(1, 100)',
          'imei|1':['96001234567891245','87561234567891245','13561234567891245'],
          'SN|1':['90090012345','00092200125','10090012345'],
          objName:'@ctitle',
          objAddress:'@county(true)',
          'state|1':['待受理','待审核'],
          time:'@date',
          'checkState|1':['待审核','审核通过','审核失败'],
          'remark|1':['','资料不全'],
          size:'@float(60, 100, 1, 2)',
          'source1|1':['用户申报','内部申报'],
          'status|1':['启用','未启用'],
          operation:"肖春天",
          name1:'@cname',
          'state2|1':['待分派人员','待施工'],
          'fantype|1':['','化学防护','监测控制'],
          'fanzd|1':['待制定','待审核'],
          'state3':'待方案制定'
        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/monitor/device/data',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          no:'@guid',
          voltage:'@float(1, 100,1,2)',
          signal:'@integer(1, 100)',
          'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          name:'@ctitle',
          objId:'@id',
          floorId:'@integer(1, 100)',
          'imei|1':['96001234567891245','87561234567891245','13561234567891245'],
          'SN|1':['90090012345','00092200125','10090012345'],
          objName:'@ctitle',
          objAddress:'@county(true)',
          'state|1':['待受理','待审核'],
          time:'@date',
          size:'@float(60, 100, 1, 2)',
          'source1|1':['用户申报','内部申报'],
          'status|1':['启用','未启用'],
          operation:"肖春天",
          name1:'@cname',
          'state2|1':['待分派人员','待施工'],
          'fantype|1':['','化学防护','监测控制'],
          'fanzd|1':['待制定','待审核'],
          'state3':'待方案制定'
        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/workOrder/totalList/total',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          no:'@guid',
          'beforeAfternoon|1':['上午','下午'],
          'department|1':['工程防治部'],
          voltage:'@float(1, 100,1,2)',
          'workOrderType|1':['新建施工','灭治回访','设备维护','质量保障'],
          'workOrderCode|1':['WSG202005200001','WSG4322305200001','WSG4322305200001'],
          'constructionUser|1':['肖春天','张夏天','兰秋天','陈冬天'],
          'acceptanceNumber|1':['XJ202005200001','XJ402005200001','XJ302005200001'],
          'constructionPlan|1':['化学防护','监测控制'],
          'constructionType':['新建预防','白蚁灭治'],
          'constructionProject|1':['室内','散水坡','外墙'],
          signal:'@integer(1, 100)',
          'acceptState|1':['待制定','待审核'],
          'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          name:'@ctitle',
          objId:'@id',
          floorId:'@integer(1, 100)',
          'imei|1':['96001234567891245','87561234567891245','13561234567891245'],
          'SN|1':['90090012345','00092200125','10090012345'],
          objName:'@ctitle',
          objAddress:'@county(true)',
          'state|1':['待受理','待审核','完成','取消'],
          time:'@date',
          size:'@float(60, 100, 1, 2)',
          'source1|1':['用户申报','内部申报'],
          'status|1':['启用','未启用'],
          operation:"肖春天",
          name1:'@cname',
          'state2|1':['待分派人员','待施工'],
          'fantype|1':['','化学防护','监测控制'],
          'fanzd|1':['待制定','待审核'],
          'state3':'待方案制定',
  

        }]
      })
  
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/warranty/assessment/data',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          no:'@guid',
          time:'@date',
          voltage:'@float(1, 100,1,2)',
          'constructionUser|1':['肖春天','张夏天','兰秋天','陈冬天'],
          'state|1':['待验收'],
          signal:'@integer(1, 100)',
          // 'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          'status|1':['启用','禁用'],
          'state2|1':['启用','禁用'],
          name:'@ctitle',
          'workType|1':['新建施工','灭治回访','设备维护','质量保障'],
          'constructionPlan|1':['化学防护','监测控制','化学屏障'],
          'type|1':['安全事项','操作及其他事项'],
          'acceptanceNumber|1':['XJ202005200001','XJ402005200001','XJ302005200001'],
          'workOrderCode|1':['WSG202005200001','WSG4322305200001','WSG4322305200001'],
          'assessment|1':['白蚁防治施工工作服未按规定穿着','白蚁防治药物未按要求配比','装置土层覆盖厚度未达到要求','撬开家具或借用辅助工具未告知']

        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/search/mange/data',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          builtUpArea:'@integer(100, 1000)',
          no:'@guid',
          time:'@date',
          builtDownArea:'@integer(100, 1000)',
          voltage:'@float(1, 100,1,2)',
          'constructionUser|1':['肖春天','张夏天','兰秋天','陈冬天'],
          'state|1':['待验收'],
          signal:'@integer(1, 100)',
          // 'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          'status|1':['启用','禁用'],
          'state2|1':['启用','禁用'],
          'projectAddress|1':['广西壮族自治区南宁市青秀区凤翔路...'],
          name:'@ctitle',
          'workType|1':['新建施工','灭治回访','设备维护','质量保障'],
          'constructionPlan|1':['化学防护','监测控制','化学屏障'],
          'type|1':['安全事项','操作及其他事项'],
          'acceptanceNumber|1':['XJ202005200001','XJ402005200001','XJ302005200001'],
          'workOrderCode|1':['WSG202005200001','WSG4322305200001','WSG4322305200001'],
          'assessment|1':['白蚁防治施工工作服未按规定穿着','白蚁防治药物未按要求配比','装置土层覆盖厚度未达到要求','撬开家具或借用辅助工具未告知']

        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/drug/list/data',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          id: '@id',
          create:'@datetime',
          builtUpArea:'@integer(100, 1000)',
          no:'@guid',
          time:'@date',
          'drugName|1':['20%氯菊酯','15%氯菊酯'],
          builtDownArea:'@integer(100, 1000)',
          voltage:'@float(1, 100,1,2)',
          'constructionUser|1':['肖春天','张夏天','兰秋天','陈冬天'],
          'state|1':['待验收'],
          signal:'@integer(1, 100)',
          // 'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          'status|1':['启用','禁用'],
          'state2|1':['启用','禁用'],
          'projectAddress|1':['广西壮族自治区南宁市青秀区凤翔路...'],
          name:'@ctitle',
          lastTime:'@datetime',
          'workType|1':['新建施工','灭治回访','设备维护','质量保障'],
          'constructionPlan|1':['化学防护','监测控制','化学屏障'],
          'type|1':['新建预防','灭治'],
          'acceptanceNumber|1':['XJ202005200001','XJ402005200001','XJ302005200001'],
          'workOrderCode|1':['WSG202005200001','WSG4322305200001','WSG4322305200001'],
          'assessment|1':['白蚁防治施工工作服未按规定穿着','白蚁防治药物未按要求配比','装置土层覆盖厚度未达到要求','撬开家具或借用辅助工具未告知']

        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/smartDevices/prewarning/data',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          'belongArea|1':['钦州','柳州','桂林','南宁'],
          id: '@id',
          create:'@datetime',
          'planName|1':['南宁监测点预警','钦州监测点预警','通用监测点预警'],
          errorNumber:'@integer(1, 100)',
          no:'@guid',
          'warnGeade|1':['一','二','三','四'],
          time:'@date',
          'drugName|1':['20%氯菊酯','15%氯菊酯'],
          builtDownArea:'@integer(100, 1000)',
          voltage:'@float(1, 100,1,2)',
          'constructionUser|1':['肖春天','张夏天','兰秋天','陈冬天'],
          'state|1':['待验收'],
          signal:'@integer(1, 100)',
          // 'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          'status|1':['启用','禁用'],
          'state2|1':['启用','禁用'],
          'projectAddress|1':['广西壮族自治区南宁市青秀区凤翔路...'],
          name:'@ctitle',
          lastTime:'@datetime',
          'workType|1':['新建施工','灭治回访','设备维护','质量保障'],
          'constructionPlan|1':['化学防护','监测控制','化学屏障'],
          'type|1':['工程预警'],
          'acceptanceNumber|1':['XJ202005200001','XJ402005200001','XJ302005200001'],
          'workOrderCode|1':['WSG202005200001','WSG4322305200001','WSG4322305200001'],
          'assessment|1':['白蚁防治施工工作服未按规定穿着','白蚁防治药物未按要求配比','装置土层覆盖厚度未达到要求','撬开家具或借用辅助工具未告知']

        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/news/data/',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          'belongArea|1':['钦州','柳州','桂林','南宁'],
          'beforeAfterShelf|1':['上架','下架'],
          'author|1':['小明','小红','小刚'],
          id: '@id',
          'title|1':['关于公布2019年度新建房屋白蚁预防工程项目信','关于公布2020第一季度新建房屋白蚁预防工程项目信'],
          create:'@datetime',
          'planName|1':['南宁监测点预警','钦州监测点预警','通用监测点预警'],
          errorNumber:'@integer(1, 100)',
          no:'@guid',
          'warnGeade|1':['一','二','三','四'],
          time:'@date',
          'drugName|1':['20%氯菊酯','15%氯菊酯'],
          builtDownArea:'@integer(100, 1000)',
          voltage:'@float(1, 100,1,2)',
          'constructionUser|1':['肖春天','张夏天','兰秋天','陈冬天'],
          'state|1':['待验收'],
          signal:'@integer(1, 100)',
          // 'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          'status|1':['启用','禁用'],
          'state2|1':['启用','禁用'],
          'projectAddress|1':['广西壮族自治区南宁市青秀区凤翔路...'],
          name:'@ctitle',
          lastTime:'@datetime',
          'workType|1':['新建施工','灭治回访','设备维护','质量保障'],
          'constructionPlan|1':['化学防护','监测控制','化学屏障'],
          'type|1':['工程预警'],
          'acceptanceNumber|1':['XJ202005200001','XJ402005200001','XJ302005200001'],
          'workOrderCode|1':['WSG202005200001','WSG4322305200001','WSG4322305200001'],
          'assessment|1':['白蚁防治施工工作服未按规定穿着','白蚁防治药物未按要求配比','装置土层覆盖厚度未达到要求','撬开家具或借用辅助工具未告知']

        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/sys/data/',
    type: 'get',
    response: config => {
      const data = Mock.mock({
        'items|1-30': [{
          'belongArea|1':['钦州','柳州','桂林','南宁'],
          'belongDepart|1':['钦州白蚁所','柳州白蚁所','桂林白蚁所','南宁白蚁所'],
          'beforeAfterShelf|1':['上架','下架'],
          'role|1':['超级管理员','内勤','外出人员'],
          phone:'@phone',
          id: '@id',
          'tip|1':['负责所有后台模块的所有权限','负责办事分派给施工管理员','负责后台质保管理，以及工程验收'],
          'title|1':['关于公布2019年度新建房屋白蚁预防工程项目信','关于公布2020第一季度新建房屋白蚁预防工程项目信'],
          create:'@datetime',
          'planName|1':['南宁监测点预警','钦州监测点预警','通用监测点预警'],
          errorNumber:'@integer(1, 100)',
          no:'@guid',
          'warnGeade|1':['一','二','三','四'],
          time:'@date',
          'drugName|1':['20%氯菊酯','15%氯菊酯'],
          builtDownArea:'@integer(100, 1000)',
          voltage:'@float(1, 100,1,2)',
          'constructionUser|1':['肖春天','张夏天','兰秋天','陈冬天'],
          'state|1':['待验收'],
          signal:'@integer(1, 100)',
          // 'type|1':['待受理','已受理'],
          buildId:'@id',
          'project|1':['蓝天工程','白云工程','大地工程'],
          'status|1':['启用','禁用'],
          'state2|1':['启用','禁用'],
          'projectAddress|1':['广西壮族自治区南宁市青秀区凤翔路...'],
          name:'@ctitle',
          lastTime:'@datetime',
          'workType|1':['新建施工','灭治回访','设备维护','质量保障'],
          'constructionPlan|1':['化学防护','监测控制','化学屏障'],
          'type|1':['工程预警'],
          'acceptanceNumber|1':['XJ202005200001','XJ402005200001','XJ302005200001'],
          'workOrderCode|1':['WSG202005200001','WSG4322305200001','WSG4322305200001'],
          'assessment|1':['白蚁防治施工工作服未按规定穿着','白蚁防治药物未按要求配比','装置土层覆盖厚度未达到要求','撬开家具或借用辅助工具未告知']

        }]
      })
    
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },


]
  ///monitor/device/data