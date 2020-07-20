<template>
  <div class="myorder">
    <div class="myorderhead">我的订单（堂食）</div>

    <!-- <table class="table table-striped">
          <thead>
            <tr>
              <th>菜品</th>
              <th>数量</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tanmay</td>
              <td>Bangalore</td>
              <td>111</td>
            </tr>
            <tr>
              <td>Sachin</td>
              <td>Mumbai</td>
              <td>111</td>
            </tr>
          </tbody>
    </table>-->
    <div class="row centent">
      <div class="col-md-4">订单内容</div>
      <div class="col-md-4">{{attrButeDetailsList.length}}件</div>
      <div class="col-md-4">￥{{totalPrice}}</div>
    </div>

    <div class="leaveAndOk">
      <el-button type="warning" round @click="toRoute" :disabled="totalPrice>0?false:true">
        <i class="iconfont icon-icon-"></i>
        {{$route.path==="/orderdetails"?'去付款':"确定订单"}}
      </el-button>
      <el-button
        round
        class="reelection btn btn-primary btn-lg show-modal leave"
        type="danger"
        data-toggle="modal"
        data-target="#myModal"
        @click="$switchFrames({text:'离开',fn:leaveCategoryList})"
      >
        <i class="iconfont icon-icon-test"></i> 离开
      </el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  components: {},

  mounted() {},
  methods: {
    payAndOrderdetails() {
      this.$router.push({ path: '/pay' })
    },
    toRoute() {
      if (this.totalPrice > 0) {
        this.$router.push({ path: '/orderdetails' })
      } else {
        this.$switchFrames({ text: '请选择菜品', fn: () => {} })
      }
    },
    leaveCategoryList() {
      this.$router.go(-1)
      // this.$router.replace({ path: '/home' })
    }
  },
  computed: {
    ...mapState({
      attrButeDetailsList: state => state.categoryList.attrButeDetailsList
    }),
    ...mapGetters(['totalPrice'])
  }
}
</script>
<style lang="less" scoped>
.myorder {
  width: 100%;

  box-sizing: border-box;
  padding-top: 4%;

  .myorderhead {
    width: 100%;
    text-align: center;

    // height: 20%;
    padding: 10px;
    background-color: chocolate;
  }
  .centent {
    height: 55%;
    // padding: 2%;
    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
    }
  }
  .leaveAndOk {
    width: 100%;
    // height: 20%;
    button {
      width: 35%;

      font-size: 40px;
      margin: 0;
      &:nth-last-child(2) {
        float: right;
        // border-radius: 50% 50% 0 0 0 0 50% 50%;
      }
    }
  }
}
</style>