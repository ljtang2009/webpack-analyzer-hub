const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') }
      { path: '', redirect: 'analyze' },
      { path: 'analyze', component: () => import('src/pages/Analyze.vue') },
      { path: 'compare', component: () => import('src/pages/Compare.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/transition/page1',
    component: () => import('src/pages/transition/page1'),
  },
]

export default routes
