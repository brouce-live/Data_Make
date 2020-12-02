import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/index')
const HomeMessage = () => import('../views/home/HomeMessage')
const HomeNews = () => import('../views/home/HomeNews')
const Test1 = () => import('../views/home/HomeTest1')
const Tesk = () => import('../views/tesk/index')
const System = () => import('../views/system/index')
const Success = () => import('../views/success/index')
const Build = () => import('../views/build/index')
const Information = () => import('../views/build/Information')
const Instruct = () => import('../views/build/Instruct')
const Notice = () => import('../views/build/Notice')
const Account = () => import('../views/build/Account')

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '任务信息'
    },
    children:[
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
      {
        path: 'test1',
        component: Test1
      }
    ]
  },
  {
    path: '/tesk',
    component: Tesk,
    meta: {
      title: '工作管理'
    }
  },
  {
    path: '/system',
    component: System,
    meta: {
      title: '系统设置'
    }
  },
  {
    path: '/success',
    component: Success,
    meta: {
      title: '完成',
    }
  },
  {
    path: '/build',
    component: Build,
    meta: {
      title: '新建',
    }
  },
  {
    path: '/information',
    component: Information,
    meta: {
      title: '新建信息',
    }
  },
  {
    path: '/notice',
    component: Notice,
    meta: {
      title: '发起通报',
    }
  },
  {
    path: '/instruct',
    component: Instruct,
    meta: {
      title: '发起指令',
    }
  },
  {
    path: '/account',
    component: Account,
    meta: {
      title: '发起台账',
    }
  },
]

const router = new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
  }
)

router.beforeEach((to, from, next) =>{
    document.title = to.matched[0].meta.title
    next()
  }
)

export default router
