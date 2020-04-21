import BlankLayout from '@/views/layouts/Blank.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      public: true,
      layout: BlankLayout
    }
  }
]
