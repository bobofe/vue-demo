import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PassDataProp from '@/components/passDataProp/parent'
import PassDataProp1 from '@/components/passDataProp/parent1'
import TimeLine from '@/components/timeLine/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/prop',
      name: 'passDataProp',
      component: PassDataProp
    },
    {
      path: '/prop1',
      name: 'passDataProp1',
      component: PassDataProp1
    },
    {
      path: '/timeLine',
      name: 'timeLine',
      component: TimeLine
    }
  ]
})
