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
      <div class="col-md-4">0件</div>
      <div class="col-md-4">￥0.00</div>
    </div>

    <div class="leaveAndOk">
      <el-button type="warning" round>确定订单</el-button>
      <el-button type="danger" round>离开</el-button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  methods: {}
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

    height: 20%;
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
    height: 20%;
    button {
      width: 35%;
      height: 100%;
      font-size: 30px;
      margin: 0;
      &:nth-last-child(2) {
        float: right;
        // border-radius: 50% 50% 0 0 0 0 50% 50%;
      }
    }
  }
}
</style>