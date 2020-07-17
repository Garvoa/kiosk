<template>
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
              <div class="modal-dialog" role="document" style=" width: 50%;">
                <div class="modal-content">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="modal-body">
                    <div class="icon">!</div>
                    <h3 class="title">提示!</h3>
                    <p class="description">您确定要{{$store.state.objFrames.text}}吗？</p>
                    <div class="signout">
                      <button
                        class="subscribe"
                        data-dismiss="modal"
                        @click="$store.state.objFrames.fn"
                      >确定</button>
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
</template>
<script>
export default {
  components: {},
  mounted() {
    console.log(this.$store)
  },
  methods: {}
}
</script>
<style lang="less">
.demo {
  top: 0;
  position: absolute;
}
.modal-box .modal-dialog {
  margin: 200px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
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
.modal-box .modal-dialog .modal-content .modal-body .subscribe {
  font-size: 30px;
}
</style>