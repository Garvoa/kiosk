
export default [
  {
    path: "/home",
    name: 'home',
    component: () => import('../pages/Home')
  },
  {
    path: "/outerlayer",
    name: 'outerLayer',
    component: () => import('../pages/OuterLayer')
  },
  {
    path: "/categorylist",
    component: () => import('../pages/CategoryList')
  },
  {
    path: "/attributelist",
    component: () => import('../pages/AttrButeList')
  },

  {
    path: "/",
    redirect: "/outerlayer"
  }
]