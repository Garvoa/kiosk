<template>
  <div class="wrap">
    <header>logo/轮播图</header>
    <section>
      <p>請選擇堂食或者外帶</p>
      <div class="choice">
        <el-button type="warning" @click="toCategoryList">堂食</el-button>
        <el-button type="warning" @click="toCategoryList">外帶</el-button>
      </div>
      <button
        type="button"
        class="btn btn-primary btn-lg show-modal leave"
        data-toggle="modal"
        data-target="#myModal"
      >離開</button>
    </section>

    <div class="demo" style="min-height: 550px;">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="modal-box">
              <!-- Button trigger modal -->

              <!-- Modal -->
              <div
                class="modal fade"
                id="myModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                ref="myModalLabel"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body">
                      <div class="icon">!</div>
                      <h3 class="title">提示!</h3>
                      <p class="description">您确定要取消订餐吗？</p>
                      <div class="signout">
                        <button class="subscribe" data-dismiss="modal" @click="toOuterLayer">确定</button>
                        <button class="subscribe" data-dismiss="modal">取消</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {},
  mounted() {},
  methods: {
    toCategoryList() {
      this.$router.push({ path: '/categorylist' })
    },
    toOuterLayer() {
      this.$router.go(-1)
      // this.$router.replace({ path: '/' })
    }
  }
}
</script>
<style lang="less"  scoped>
.wrap {
  font-size: 50px !important;
  font-weight: 700 !important;
  text-align: center;
  overflow-x: hidden;
  header {
    height: 30%;
  }
  section {
    padding: 0px 50px !important;
    height: 70%;
  }
  p {
    // padding: 50px;
    text-align: center;
  }
  .modal-box {
    // display: flex;
    text-align: center;
  }
  .choice {
    width: 100%;
    display: flex;
    height: 60%;
    justify-content: space-evenly;
    button {
      font-size: 50px;
      font-weight: 700;
      width: 35%;
      height: 100%;
      border-radius: 10px;
      text-align: center;
    }
  }
  .leave {
    width: 50%;
    height: 70px;
    font-size: 30px;
    font-weight: 700;
    margin: 30px;
  }
  .modal-dialog {
    margin: 200px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .demo {
    top: 0;
    position: absolute;
    // z-index: -1;
  }
  .modal-dialog .modal-content {
    width: 550px;
  }

  .modal-dialog .modal-content .modal-body .description {
    font-size: 40px !important;
    font-weight: 700 !important;
  }
  .modal-dialog .modal-content .modal-body .subscribe {
    width: 200px;
    height: 70px;
    font-size: 30px;
  }
}
</style>