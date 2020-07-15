<template>
  <div class="orderDetailsOuter">
    <div class="again">
      <el-button type="danger" round>重新点餐</el-button>
    </div>
    <div class="orderdetailsContent">
      <div></div>
      <div class="row">
        <div class="col-md-7">已选项目</div>
        <div class="col-md-3">数量</div>
        <div class="col-md-2">金额</div>
      </div>
      <div class="setmealType">中式套餐</div>
    </div>
    <Myorder />
  </div>
</template>
<script>
import Myorder from '../../components/Myorder'
export default {
  components: { Myorder },
  mounted() {},
  methods: {}
}
</script>
<style lang="less" >
.orderDetailsOuter {
  width: 100%;
  height: 100%;
  padding: 3%;
  .again {
    text-align: right;
    padding-bottom: 20px;
    button {
      width: 20%;
      height: 80px;
      font-size: 30px;
      font-weight: 600;
      color: black;
    }
  }
  .orderdetailsContent {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    .row {
      margin: 0;
      div {
        padding: 0;
      }
    }
    .setmealType {
      width: 95%;
      background-color: gold;
      margin: 0 auto;
    }
  }
}
</style>