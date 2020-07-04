import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/index',
    component: () => import('@/views/dashboard/index'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '白蚁智慧防控',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '白蚁智慧防控', icon: 'dashboard' }
    }]
  },

  {
    path: '/base',
    component: Layout,
    name: '基础管理',
    meta: { title: '基础管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'controlOrg',
        name: '防治单位管理',
        component: () => import('@/views/base/controlOrg/index'),
        meta: { title: '防治单位管理', icon: 'table' }
      },
      {
        path: 'buildOrg',
        name: '建设单位管理',
        component: () => import('@/views/base/buildOrg/index'),
        meta: { title: '建设单位管理', icon: 'tree' }
      },
      {
        path: 'department',
        name: '部门管理',
        component: () => import('@/views/base/department/index'),
        meta: { title: '部门管理', icon: 'tree' }
      },
      {
        path: 'personnel',
        name: '人员管理',
        component: () => import('@/views/base/personnel/index'),
        meta: { title: '人员管理', icon: 'tree' }
      },
      {
        path: 'duty',
        name: '职务管理',
        component: () => import('@/views/base/duty/index'),
        meta: { title: '职务管理', icon: 'tree' }
      },
      {
        path: 'project',
        name: '工程管理',
        component: () => import('@/views/base/project/index'),
        meta: { title: '工程管理', icon: 'tree' }
      },
      {
        path: 'building',
        name: '楼栋管理',
        component: () => import('@/views/base/building/index'),
        meta: { title: '楼栋管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    name: '用户管理',
    meta: { title: '用户管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'personnel',
        name: '个人用户管理',
        component: () => import('@/views/user/personnel/index'),
        meta: { title: '个人用户管理', icon: 'table' }
      },
      {
        path: 'buildUser',
        name: '建设单位用户管理',
        component: () => import('@/views/user/buildUser/index'),
        meta: { title: '建设单位用户管理', icon: 'tree' }
      },
      {
        path: 'buildAudit',
        name: '建设单位认证审核',
        component: () => import('@/views/user/buildAudit/index'),
        meta: { title: '建设单位认证审核', icon: 'tree' }
      }
    ]
  },
  {
    path: '/material',
    component: Layout,
    name: '材料受理管理',
    meta: { title: '材料受理管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'newAccept',
        name: '新建预防受理',
        component: () => import('@/views/material/newAccept/index'),
        meta: { title: '新建预防受理', icon: 'table' }
      },
      {
        path: 'newAudit',
        name: '新建预防审核',
        component: () => import('@/views/material/newAudit/index'),
        meta: { title: '新建预防审核', icon: 'tree' }
      },
      {
        path: 'destroyAccept',
        name: '白蚁灭治受理',
        component: () => import('@/views/material/destroyAccept/index'),
        meta: { title: '白蚁灭治受理', icon: 'tree' }
      },
      {
        path: 'template',
        name: '材料模板管理',
        component: () => import('@/views/material/template/index'),
        meta: { title: '材料模板管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/departmentDispatch',
    component: Layout,
    name: '部门分派管理',
    meta: { title: '部门分派管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'prevent',
        name: '新建预防',
        component: () => import('@/views/departmentDispatch/prevent/index'),
        meta: { title: '新建预防', icon: 'table' }
      },
      {
        path: 'destroy',
        name: '白蚁灭治',
        component: () => import('@/views/departmentDispatch/destroy/index'),
        meta: { title: '白蚁灭治', icon: 'tree' }
      }
    ]
  },
  {
    path: '/roadworkDispatch',
    component: Layout,
    name: '分派施工管理员',
    meta: { title: '分派施工管理员', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'newPrevent1',
        name: '新建预防_部1',
        component: () => import('@/views/roadworkDispatch/newPrevent1/index'),
        meta: { title: '新建预防_部1', icon: 'table' }
      },
      {
        path: 'destroy1',
        name: '白蚁灭治_部1',
        component: () => import('@/views/roadworkDispatch/destroy1/index'),
        meta: { title: '白蚁灭治_部1', icon: 'tree' }
      },
      {
        path: 'newPrevent2',
        name: '新建预防_部2',
        component: () => import('@/views/roadworkDispatch/newPrevent2/index'),
        meta: { title: '新建预防_部1', icon: 'table' }
      },
      {
        path: 'destroy2',
        name: '白蚁灭治_部2',
        component: () => import('@/views/roadworkDispatch/destroy2/index'),
        meta: { title: '白蚁灭治_部1', icon: 'tree' }
      }
    ]
  },
  {
    path: '/roadwork',
    component: Layout,
    name: '施工管理',
    meta: { title: '施工管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'formulate',
        name: '新建预防施工方案制定',
        component: () => import('@/views/roadwork/formulate/index'),
        meta: { title: '新建预防施工方案制定', icon: 'table' }
      },
      {
        path: 'review',
        name: '新建预防施工方案评审',
        component: () => import('@/views/roadwork/review/index'),
        meta: { title: '新建预防施工方案评审', icon: 'tree' }
      }
    ]
  },
  {
    path: '/workOrder',
    component: Layout,
    name: '工单管理',
    meta: { title: '工单管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'newWorkOrder',
        name: '新建施工工单管理',
        component: () => import('@/views/workOrder/newWorkOrder/index'),
        meta: { title: '新建施工工单管理', icon: 'table' }
      },
      {
        path: 'destroyCallback',
        name: '灭治回访工单管理',
        component: () => import('@/views/workOrder/destroyCallback/index'),
        meta: { title: '灭治回访工单管理', icon: 'tree' }
      },
      {
        path: 'destroyRoadwork',
        name: '灭治施工工单管理',
        component: () => import('@/views/workOrder/destroyRoadwork/index'),
        meta: { title: '灭治施工工单管理', icon: 'tree' }
      },
      {
        path: 'equipment',
        name: '设备维护工单管理',
        component: () => import('@/views/workOrder/equipment/index'),
        meta: { title: '设备维护工单管理', icon: 'tree' }
      },
      {
        path: 'quality',
        name: '质量保障工单管理',
        component: () => import('@/views/workOrder/quality/index'),
        meta: { title: '质量保障工单管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/warranty',
    component: Layout,
    name: '质保管理',
    meta: { title: '质保管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'newAcceptance',
        name: '新建预防工程验收',
        component: () => import('@/views/warranty/newAcceptance/index'),
        meta: { title: '新建预防工程验收', icon: 'table' }
      },
      {
        path: 'warrantyAssess',
        name: '质保评估项管理',
        component: () => import('@/views/warranty/warrantyAssess/index'),
        meta: { title: '质保评估项管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/search',
    component: Layout,
    name: '查询管理',
    meta: { title: '查询管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'project',
        name: '工程查询',
        component: () => import('@/views/search/project/index'),
        meta: { title: '工程查询', icon: 'table' }
      },
      {
        path: 'building',
        name: '楼栋查询',
        component: () => import('@/views/search/building/index'),
        meta: { title: '楼栋查询', icon: 'tree' }
      }
    ]
  },
  {
    path: '/drug',
    component: Layout,
    name: '药品管理',
    meta: { title: '药品管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'drugList',
        name: '药品列表',
        component: () => import('@/views/drug/drugList/index'),
        meta: { title: '药品列表', icon: 'table' }
      }
    ]
  },
  {
    path: '/deviceWarning',
    component: Layout,
    name: '智能设备预警管理',
    meta: { title: '智能设备预警管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'incident',
        name: '预警事件管理',
        component: () => import('@/views/deviceWarning/incident/index'),
        meta: { title: '预警事件管理', icon: 'table' }
      },
      {
        path: 'monitoringPoint',
        name: '监测点预警设置',
        component: () => import('@/views/deviceWarning/monitoringPoint/index'),
        meta: { title: '监测点预警设置', icon: 'tree' }
      },
      {
        path: 'grade',
        name: '工程预警等级设置',
        component: () => import('@/views/deviceWarning/grade/index'),
        meta: { title: '工程预警等级设置', icon: 'tree' }
      }
    ]
  },
  {
    path: '/monitoringPoint',
    component: Layout,
    name: '监测点管理',
    meta: { title: '监测点管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'manage',
        name: '设备管理',
        component: () => import('@/views/monitoringPoint/manage/index'),
        meta: { title: '设备管理', icon: 'table' }
      },
      {
        path: 'data',
        name: '设备数据',
        component: () => import('@/views/monitoringPoint/data/index'),
        meta: { title: '设备数据', icon: 'tree' }
      }
    ]
  },
  {
    path: '/news',
    component: Layout,
    name: '资讯通知管理',
    meta: { title: '资讯通知管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'message',
        name: '资讯管理',
        component: () => import('@/views/news/message/index'),
        meta: { title: '资讯管理', icon: 'table' }
      },
      {
        path: 'inform',
        name: '系统通知',
        component: () => import('@/views/news/inform/index'),
        meta: { title: '系统通知', icon: 'tree' }
      }
    ]
  },
  {
    path: '/sys',
    component: Layout,
    name: '系统管理',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'staff',
        name: '员工管理',
        component: () => import('@/views/sys/staff/index'),
        meta: { title: '员工管理', icon: 'table' }
      },
      {
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/sys/role/index'),
        meta: { title: '角色管理', icon: 'tree' }
      },
      {
        path: 'data',
        name: '数据字典管理',
        component: () => import('@/views/sys/data/index'),
        meta: { title: '数据字典管理', icon: 'tree' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
