<template>
  <div class="orderDetailsOuter">
    <div class="again">
      <el-button
        type="danger"
        round
        class="btn btn-lg show-modal leave"
        data-toggle="modal"
        data-target="#myModal"
        @click=" $switchFrames({text:`重新點餐`,fn:orderAgain}) "
      >重新点餐</el-button>
    </div>
    <div class="orderdetailsContent">
      <div class="row contentTitle">
        <div class="col-md-7" style="text-align:left;padding-left:30px">已选项目</div>
        <div class="col-md-3">数量</div>
        <div class="col-md-2 price">金额</div>
      </div>
      <!-- <div class="setmealType">中式套餐</div> -->
      <ul class="orderDetailsList">
        <li class="orderDetailsItem" v-for="(item,index) in attrButeDetailsList" :key="index">
          <div class="col-md-7 itemLeft">
            <i
              @click=" $switchFrames({text:`刪除`,fn:removeItem(item)}) "
              class="btn btn-lg show-modal leave el-icon-delete-solid"
              data-toggle="modal"
              data-target="#myModal"
            ></i>
            <div>
              <h2 style="margin:0">{{item.mainFood}} ￥{{item.mainFoodPrice}}</h2>
              <p v-for="(attrBute,index) in item.attrButeDetails" :key="index" class="attrButeMsg">
                {{attrBute.name}}
                <span>*{{attrBute.num}}</span>
                <span>{{attrBute.price}}</span>
                <el-button type="warning" @click="modifyAttriBute(item)">修改</el-button>
              </p>
            </div>
          </div>

          <div class="col-md-3 num">
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
    <Myorder class="myorder" />
    <StateFrames />
  </div>
</template>
<script>
import Myorder from '../../components/Myorder'
import { mapState } from 'vuex'
import StateFrames from '../../components/StateFrames'
export default {
  components: { Myorder },
  mounted() {},
  methods: {
    plusAndRemove(type, item) {
      let total = item.totalAmount
      if (item.num !== 1) {
        total = item.totalAmount / item.num
      }
      if (type === '+') {
        item.num++

        item.totalAmount = total * item.num
      } else if (item.num > 1) {
        item.num--

        item.totalAmount = total * item.num
      }
    },
    removeItem(AttriButeItem) {
      return () => {
        this.$store.commit('DELETEATTRBUTEDETALSITEM', AttriButeItem)
      }
    },
    orderAgain() {
      this.$store.commit('DELETEATTRBUTEDETALSLIST')
    },
    modifyAttriBute(item) {
      console.log(item)
      this.$router.replace({ path: '/attributelist', query: { item } })
    }
  },
  computed: {
    ...mapState({
      attrButeDetailsList: state => state.categoryList.attrButeDetailsList
    })
  },
  watch: {
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
    text-align: right;
    padding-bottom: 20px;
    width: 100%;
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
        padding: 10px;
        .itemLeft {
          display: flex;
          i {
            font-size: 30px;
            margin: 20px 10px;
          }
          .attrButeMsg {
            width: 100%;
            font-size: 20px;
            margin-top: 10px;
            span {
              display: inline-block;
              margin: 0px 10px;
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
          width: 100%;
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
    bottom: 20px;
    left: 0;
    padding: 3%;
    height: 20%;
  }
}
</style>