import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Yohan from '@/components/Yohan'
import Artajasa from '@/components/ArtajasaPaymentPage'
import Permata from '@/components/PermataPaymentPage'
import WizzardPage from '@/components/WizzardPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld      
    // component: WizzardPage
  },
  {
    path: '/yohan',
    name: 'Yohan',
    component: Yohan
  },
  {
    path: '/permata-payment-page',
    name: 'PermataPaymentPage',
    component: Permata,
    props: true
  },
  {
    path: '/artajasa-payment-page',
    name: 'ArtajasaPaymentPage',
    component: Artajasa,
    props: true
  }
]
})
