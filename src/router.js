import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Forms from './views/Forms.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

const router = new Router({ routes: [{
  path: '/',
  name: 'home',
  component: Home,
  beforeEnter: (to, from, next) => {
    console.log('路由-前置-钩子')
    next()
  }
}, {
  path: '/form',
  name: 'forms',
  component: Forms
}, {
  path: '/about/:id',
  name: 'about',
  // 路由级别的代码分离 (懒加载组件)
  // 下列代码会生成一个 (about.[hash].js) 分离代码包
  // 并在当前路由激活时才加载该组件
  component: () => import('./views/About.vue'),
  children: [{
    path: '1',
    component: HelloWorld,
    props: (router) => ({ msg: router.query.msg })
  }]
}] })

router.beforeEach((to, from, next) => { /* 全局前置钩子 */
  console.log('全局-前置-钩子')
  next()
})
router.beforeResolve((to, from, next) => { /* 全局解析守卫 */
  console.log('全局-解析-守卫')
  next()
})
router.afterEach((to, from) => { /* 全局后置钩子 */
  console.log('全局-后置-钩子')
})

export default router
