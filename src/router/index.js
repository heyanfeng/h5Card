import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import cardDetails from '@/components/card-details/card-details.vue'
import showCard from '@/components/show-card/show-card.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cardDetails',
      name: 'cardDetails',
      component: cardDetails
    },
    {
      path: '/showCard',
      name: 'showCard',
      component: showCard
    }
  ]
})
