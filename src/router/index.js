import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/index')
const HomeMessage = () => import('../views/home/HomeMessage')
const HomeNews = () => import('../views/home/HomeNews')
const Test1 = () => import('../views/home/HomeTest1')
const Tesk = () => import('../views/tesk/index')
const System = () => import('../views/system/index')
const Profile = () => import('../views/profile/index')

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
    path: '/profile',
    component: Profile,
    meta: {
      title: '待开发',
    }
  }
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
