import ajax from "./ajax"
import mockAjax from "./mockAjax"
import qs from "qs"
//获取轮播图数据
export const getBannerList = () => ajax.get('/API/banner/list')

//獲取輪播圖詳細信息
export const getBannerDetails = (position) => ajax.get(`/dev-api/API/banner/${position}`)

//獲取菜單頁面詳細信息
export const getMenupageInfo = () => ajax.get('/API/menupage/getInfo')

//獲取菜單選項詳細信息


export const getMenumodInfo = (query) => mockAjax({
  url: `/API/menumod/query`,
  method: 'get',



})
