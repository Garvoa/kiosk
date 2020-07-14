<!--  -->
<template>
  <div>
    <div class="attrButeList">
      <div class="attrButeListhead">请选择套餐项目</div>
      <div class="row entree">
        <div class="col-md-5 foodImg">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=319246966,2664500099&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="col-md-7 foodName">
          <p>猪扒饭</p>
          <el-button>特别要求</el-button>
        </div>
        <div class="col-md-3 price">￥35</div>
      </div>
      <AttriButeLayout />
    </div>
  </div>
</template>

<script>
import AttriButeLayout from '../../layout'
export default {
  components: {
    AttriButeLayout
  },
  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less">
.attrButeList {
  box-sizing: border-box;
  padding: 3%;
  width: 100%;
  height: 100%;

  .attrButeListhead {
    text-align: center;
    // height: 5%;
    padding: 1%;
    box-sizing: border-box;
    background-color: rgb(255, 215, 0);
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .entree {
    position: relative;
    height: 20%;
    .foodImg {
      height: 100%;
      border-radius: 5%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5%;
      }
    }
    .foodName {
      height: 100%;
      position: relative;
      button {
        font-size: 30px;
        position: absolute;
        bottom: 0;
      }
    }
    .price {
      position: absolute;
      right: 5%;
      bottom: 0;
      padding-right: 10px;
      text-align: right;
    }
  }
}

/* @import url(); 引入css类 */
</style>