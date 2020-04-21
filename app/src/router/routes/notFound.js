import BlankLayout from '@/views/layouts/Blank.vue'

export default [
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "not-found" */ '@/views/PageNotFound.vue'),
    meta: {
      public: true,
      layout: BlankLayout
    }
  }
]
