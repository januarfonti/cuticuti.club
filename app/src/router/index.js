import Vue from 'vue'
import Router from 'vue-router'
import TokenService from '../services/storage.service'
import routes from '@/router/routes'

// import { store } from '@/store'
// import { checkIfTokenNeedsRefresh } from '@/utils/utils.js'
// import { checkForUpdates } from '@/utils/updates.js'
// import * as types from '@/store/mutation-types'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes]
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  )
  const loggedIn = !!TokenService.getToken()

  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
    })
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/my-profile')
  }

  next()
})

export default router
