import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/find',
		  name: 'find',
		  component: ()=>import('@/components/find')
		},
		{
		  path: '/my',
		  name: 'my',
		  component: ()=>import('@/components/my')
		},
  ]
})
