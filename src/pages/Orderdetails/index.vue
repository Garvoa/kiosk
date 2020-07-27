<template>
  <div class="orderDetailsOuter">
    <!-- 重新点单 -->
    <div class="again">
      <NoticeBar :options="options"></NoticeBar>
      <el-button
        type="danger"
        round
        class="btn btn-lg show-modal leave"
        data-toggle="modal"
        data-target="#myModal"
        @click=" $switchFrames({text:`重新點餐`,fn:orderAgain}) "
      >
        <i class="iconfont icon-zhongxin" style="font-size:30px"></i> 重新点餐
      </el-button>
    </div>
    <!-- 订单详情区域 -->
    <div class="orderdetailsContent">
      <div class="row contentTitle">
        <div class="col-md-8" style="text-align:left;padding-left:30px">已选项目</div>
        <div class="col-md-2">数量</div>
        <div class="col-md-2 price">金额</div>
      </div>
      <!-- <div class="setmealType">中式套餐</div> -->
      <ul class="orderDetailsList">
        <li class="orderDetailsItem" v-for="(item,index) in attrButeDetailsList" :key="index">
          <div class="col-md-8 itemLeft">
            <i
              @click=" $switchFrames({text:`刪除`,fn:removeItem(item)}) "
              class="btn btn-lg show-modal leave el-icon-delete"
              data-toggle="modal"
              data-target="#myModal"
            ></i>
            <div style="width:100%">
              <h2 style="margin:0">{{item.mainFood}} ￥{{item.mainFoodPrice}}</h2>
              <p
                v-for="(attrBute,index) in item.attrButeDetails"
                :key="index"
                class="attrButeMsg row"
              >
                <span class="col-md-5">{{attrBute.name}}</span>
                <span class="col-md-2">*{{attrBute.num}}</span>
                <span class="col-md-2">￥{{attrBute.price}}</span>
                <el-button
                  type="warning"
                  @click="modifyAttriBute(item,attrBute)"
                  class="col-md-3"
                >修改</el-button>
              </p>
            </div>
          </div>

          <div class="col-md-2 num">
            <i class="el-icon-remove" @click="plusAndRemove('-',item)"></i>

            <span>{{item.num}}</span>
            <i class="el-icon-circle-plus" @click="plusAndRemove('+',item)"></i>
          </div>
          <div class="col-md-2 price">
            <span>￥{{item.totalAmount}}</span>
          </div>
          <p class="line"></p>
        </li>
      </ul>
    </div>
    <!-- 推荐食品区域 -->
    <div class="recommend">
      <h2>推荐食品</h2>
      <ul class="recommendList row">
        <li class="recommendListItem col-md-3">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1099997888,4014530132&fm=26&gp=0.jpg"
            alt
          />
          <div>
            冰镇奶茶
            <p></p>
            <span>￥12.00</span>
          </div>
        </li>
        <li class="recommendListItem col-md-3">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2884233501,4281866316&fm=26&gp=0.jpg"
            alt
          />
          <div>
            果汁
            <p></p>
            <span>￥12.00</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部订单区域 -->
    <Myorder class="myorder" :toPay="toPay" />
    <StateFrames />
  </div>
</template>
<script>
import NoticeBar from '../../components/NoticeBar'
import Myorder from '../../components/Myorder'
import { mapState, mapGetters } from 'vuex'
import StateFrames from '../../components/StateFrames'
import { getPay, getPayType } from '../../api'
export default {
  name: 'orderdetails',
  components: { Myorder, NoticeBar },
  data() {
    return {
      options: {
        text: '好消息！好消息！这是一个很棒的kiosk！', // 通知内容
        icon:
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=236296424,1105446647&fm=26&gp=0.jpg', // 左侧图标(不需要icon不传)
        iconSize: '100px', // icon大小（正方形默认16px）
        size: '30px', // 通知内容文字大小（默认16px）
        color: '#1989fa', // 通知内容文字颜色(默认#f60)
        backround: '#fff7cc', //背景颜色(默认#fff7cc)
        delay: '1000', // 动画延迟时间(默认一秒后开始滚动，单位毫秒)
        speed: '50' // 滚动速率默认50 (px/s)
      }
    }
  },
  mounted() {},
  methods: {
    //增加或减少数量
    plusAndRemove(type, item) {
      console.log(item)
      let total = item.totalAmount
      if (item.num !== 1) {
        total = item.totalAmount / item.num
      }
      if (type === '+') {
        item.num++

        // item.ordermodhisItem.price *= item.num
        // item.orderitemhisItem.price *= item.num
        item.orderitemhisItem.qty = item.num
        item.ordermodhisItem.qty = item.num
        item.totalAmount = total * item.num
      } else if (item.num > 1) {
        item.num--
        item.attrButeDetails.forEach(attrButeDetailsitem => {
          attrButeDetailsitem.ordermodhisItem.qty = item.num
          //  attrButeDetailsitem.ordermodhisItem.price *= item.num
        })
        item.totalAmount = total * item.num
      }
    },
    removeItem(AttriButeItem) {
      return () => {
        this.$store.commit('DELETEATTRBUTEDETALSITEM', AttriButeItem)
      }
    },
    //重新点餐，清理缓存中的数据
    orderAgain() {
      this.$store.commit('DELETEATTRBUTEDETALSLIST')
      window.localStorage.removeItem('attrButeDetailsList')

      window.localStorage.removeItem('item')
      window.localStorage.removeItem('follow')
    },
    //修改配菜属性
    modifyAttriBute(item, attrBute) {
      console.log(item, attrBute)
      this.$router.replace({
        path: '/attributelist',
        query: { item, attrBute }
      })
    },
    //新增订单，跳转支付页
    toPay() {
      let ordermodhisList = []
      let orderitemhisList = []
      let shopid
      console.log(this.$store.state.categoryList.attrButeDetailsList)
      this.$store.state.categoryList.attrButeDetailsList.forEach(
        attrButeDetailsitem => {
          orderitemhisList.push(attrButeDetailsitem.orderitemhisItem)
          attrButeDetailsitem.attrButeDetails.forEach(item => {
            orderitemhisList.push(item.ordermodhisItem)
          })
          shopid = attrButeDetailsitem.orderitemhisItem.shopid
        }
      )
      console.log(this.$store.state.categoryList.attrButeDetailsList)
      const promsie1 = getPay({
        ordermodhisList,
        orderitemhisList,
        ordermainhis: {
          typeid: window.localStorage.getItem('type') === '外带' ? 1 : 0,
          ordtotal: this.totalPrice,
          subtotal: this.totalPrice,
          shopid
        },
        orderpayhis: {}
      })
      const promsie2 = getPayType()
      Promise.all([promsie1, promsie2]).then(res => {
        if (res[0].code === 200 && res[1].code === 200) {
          this.$store.commit('UPDATA_PAY_TYPE_LIST', {
            paydetail: res[1].data[0],
            orderId: res[0].data
          })
        }
      })
    }
  },
  computed: {
    ...mapState({
      attrButeDetailsList: state => state.categoryList.attrButeDetailsList
    }),
    ...mapGetters(['totalPrice'])
  },
  watch: {
    // 监听订单内容，如果删除所有则跳转到主菜页
    attrButeDetailsList(val) {
      if (val.length === 0) {
        this.$router.replace({ path: '/categorylist' })
      }
    }
  }
}
</script>
<style lang="less" >
.orderDetailsOuter {
  width: 100%;
  height: 100%;
  padding: 3%;
  min-width: 1024px;

  .again {
    margin-bottom: 5px;
    text-align: right;
    padding-bottom: 20px;
    width: 100%;
    position: relative;
    .walkingLantern {
      display: inline-block;
      position: absolute;
      height: 50%;
      right: 0px;
      left: 0px;
      text-align: center;
      margin: auto;
      bottom: 0px;
      top: 0px;
      font-size: 30px;
      color: red;
    }
    button {
      width: 20%;
      height: 80px;
      font-size: 30px;
      font-weight: 600;
      color: black;
    }
  }
  .orderdetailsContent {
    width: 100%;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    overflow: auto;
    max-height: 50%;
    min-height: 35%;

    /*滚动条样式*/
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 7px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }

    .contentTitle {
      width: 100%;
      background-color: coral;
      border-radius: 10px;
      padding: 5px;
      // min-width: 1024px;
      box-sizing: border-box;
      margin: 0px 0px 10px 0px;
      div {
        text-align: center;
        font-size: 30px;
      }
    }
    .row {
      div {
        padding: 0;
      }
      .price {
        text-align: center;
      }
    }
    .setmealType {
      width: 95%;
      background-color: gold;
      margin: 0 auto;
    }
    .orderDetailsList {
      .orderDetailsItem {
        overflow: hidden;
        position: relative;
        padding-bottom: 20px;
        margin-top: 10px;
        .itemLeft {
          display: flex;
          i {
            font-size: 40px;
            height: 80px;
            padding: 5px;
            color: red;
          }
          .attrButeMsg {
            width: 100%;
            font-size: 20px;
            margin-top: 10px;
            span {
              font-size: 30px;
              padding: 0;
              text-align: center;
            }
          }
        }

        .price {
          text-align: center;
          font-size: 30px;
        }
        .num {
          text-align: center;
          i {
            font-size: 30px;
          }
          span {
            font-size: 30px;
            display: inline-block;
            margin: 0px 10px;
          }
        }
        .line {
          position: absolute;
          width: 90%;
          height: 1px;
          background-color: black;
          bottom: 0;
          right: 0;
          left: 0;
          margin: auto;
        }
      }
    }
  }
  .recommend {
    width: 100%;
    height: 20%;
    // background-color: aqua;
    padding: 10px 20px;
    margin-top: 20px;
    h2 {
      font-size: 50px;
      font-weight: 600;
      float: left;
      width: 100%;
    }
    .recommendList {
      margin: 0;
      height: 100%;
      .recommendListItem {
        border-radius: 10px;
        border: 1px solid #000;
        margin-left: 20px;
        padding: 0;
        img {
          border-radius: 10px;
          width: 100%;
          height: 200px;
        }
        div {
          text-align: center;
        }
      }
    }
  }
  .myorder {
    position: absolute;

    height: 20%;
  }
}
</style>