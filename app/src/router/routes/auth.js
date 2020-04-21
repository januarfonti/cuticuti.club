import AdminLayout from '@/views/layouts/Admin.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      public: true, // Allow access to guest user.
      onlyWhenLoggedOut: true,
      layout: AdminLayout
    }
  }
]
