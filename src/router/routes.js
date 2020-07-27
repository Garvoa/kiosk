
export default [
  //主页
  {
    path: "/home",
    name: 'home',
    component: () => import('../pages/Home')
  },
  //最外层
  {
    path: "/outerlayer",
    name: 'outerLayer',
    component: () => import('../pages/OuterLayer')
  },
  //主菜页
  {
    path: "/categorylist",
    component: () => import('../pages/CategoryList')
  },
  //配菜属性页
  {
    path: "/attributelist",
    component: () => import('../pages/AttrButeList')
  },
  //订单详情
  {
    path: "/orderdetails",
    component: () => import('../pages/Orderdetails')
  },

  //支付页
  {
    path: "/pay",
    component: () => import('../pages/Pay')
  },

  {
    path: "/",
    redirect: "/outerlayer"
  }
]