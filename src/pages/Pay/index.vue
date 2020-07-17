<template>
  <div>
    <div class="logo">
      <h1>logo</h1>
    </div>

    <div class="payType row">
      <div class="payTypeTop">
        <p>请选择付款方式</p>
        <p>付款金额：￥29.00</p>
      </div>
      <div class="col-md-6">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3171727821,492894276&fm=26&gp=0.jpg"
          alt
        />
      </div>
      <div class="col-md-6">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594877882984&di=ca1071539a173ed8bd5ec16f0c521283&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffinance%2Ftransform%2F635%2Fw405h230%2F20180822%2FZ7PI-hhzsnec2354850.jpg"
          alt
        />
      </div>
      <div class="col-md-6">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1605905633,937417500&fm=26&gp=0.jpg"
          alt
        />
      </div>
      <div class="col-md-6">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594878881935&di=beff33521d6c2aabe2985ac69f86b75f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc1ad18250039ae251801ee9a0397802ad6c253a1a61a-ED6jpV_fw658"
          alt
        />
      </div>
    </div>
    <div class="payBottom">
      <el-button type="danger" round>
        <i></i>返回
      </el-button>
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
<style lang="less" >
.logo {
  width: 100%;
  height: 20%;
  text-align: center;
}

.payType {
  width: 90%;
  border: 1px solid #000;
  margin: 0 auto;
  border-radius: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  text-align: center;
  .payTypeTop {
    margin-bottom: 10px;
    background-color: #dddddd;
  }
  p {
    font-size: 50px;
  }

  img {
    height: 200px;
  }
}
.payBottom {
  width: 100%;
  height: 30%;
  text-align: center;
  margin-top: 20px;
  position: relative;
  button {
    width: 50%;
    height: 20%;
    font-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>