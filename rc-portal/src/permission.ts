import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.requiresAuth) {
    next({ name: 'login' })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
