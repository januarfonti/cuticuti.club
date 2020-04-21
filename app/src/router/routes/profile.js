import AdminLayout from '@/views/layouts/Admin.vue'

export default [
  {
    path: '/my-profile',
    name: 'my-profile',
    component: () =>
      import(/* webpackChunkName: "my-profile" */ '@/views/MyProfile.vue'),
    meta: {
      public: false, // Allow access to only loggedin user.
      layout: AdminLayout
    }
  }
]
