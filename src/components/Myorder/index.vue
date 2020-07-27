<template>
  <div class="myorder">
    <div class="myorderhead">我的订单（{{type}}）</div>

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
      <el-button
        v-show="$route.path==='/orderdetails'"
        round
        type="danger"
        @click="leaveCategoryList(1)"
      >
        <i class="iconfont icon-icon-test"></i>
        返回菜单
      </el-button>
      <el-button
        v-show="$route.path!=='/orderdetails'"
        round
        class="reelection btn btn-primary btn-lg show-modal leave"
        type="danger"
        data-toggle="modal"
        data-target="#myModal"
        @click="$switchFrames({text:'离开',fn:leaveCategoryList})"
      >
        <i class="iconfont icon-icon-test"></i>
        离开
      </el-button>
      <el-button type="warning" round @click="toRoute" :disabled="totalPrice>0?false:true">
        <i class="iconfont icon-icon-"></i>
        {{$route.path==="/orderdetails"?'去付款':"确定订单"}}
      </el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  components: {},
  props: { toPay: Function },
  data() {
    return {
      type: window.localStorage.getItem('type')
    }
  },
  created() {},
  mounted() {
    if (!window.localStorage.getItem('type')) {
      window.localStorage.setItem('type', this.$route.query.type)
      this.type = this.$route.query.type
    } else {
      this.type = window.localStorage.getItem('type')
    }
  },
  methods: {
    toRoute() {
      if (this.$route.path === '/orderdetails') {
        this.$router.push({ path: '/pay' })
        this.toPay()
      } else {
        this.$router.push({ path: '/orderdetails' })
      }
    },
    leaveCategoryList(val) {
      if (val === 1) {
        this.$router.replace({ path: '/categorylist' })
      } else {
        new Promise((resolve, reject) => {
          resolve(this.$store.commit('DELETEATTRBUTEDETALSLIST'))
          window.localStorage.removeItem('attrButeDetailsList')
          window.localStorage.removeItem('type')
        }).then(() => {
          this.$router.replace({ path: '/' })
          window.localStorage.removeItem('item')
          window.localStorage.removeItem('follow')
          window.localStorage.removeItem('attrButeDetailsList')
        })
      }
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
  width: 100% !important;
  position: relative;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  background-color: white;
  box-sizing: border-box;
  // padding-top: 4%;
  transform: translateZ(0);
  .myorderhead {
    width: 100%;
    text-align: center;
    font-size: 30px;
    padding: 10px;
    background-color: chocolate;
    border-radius: 10px;
  }
  .centent {
    height: 48%;
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
    height: 25%;
    display: flex;
    justify-content: space-between;
    button {
      width: 35%;
      font-size: 40px;
      margin: 0;
    }
  }
}
</style>