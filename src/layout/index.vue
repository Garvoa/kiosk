<template>
  <div class="styleLayoutwrap">
    <div class="da">
      <el-button class="qq" type="danger" @click="is=!is">切换风格</el-button>
    </div>
    <AStyleLayout v-if="is" :attrButeDetails="attrButeDetails" />
    <BStyleLaout v-else />
    <div class="popUp" v-show="isMsgFlag">
      <div class="popUpinner">
        <p>温馨提示</p>
        <p>{{msg}}</p>
        <el-button type="warning" @click="isMsgFlag=false">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import AStyleLayout from './components/AStyleLayout'
import BStyleLaout from './components/BStyleLaout'

export default {
  components: { AStyleLayout, BStyleLaout },
  props: { attrButeDetails: Array },
  data() {
    return {
      is: true,
      msg: 'xxxxxxxxxxx',
      isMsgFlag: false,
    }
  },
  mounted() {
    this.$bus.$on('isMsgFlag', (msg) => {
      this.msg = msg
      this.isMsgFlag = !this.isMsgFlag
    })
  },
}
</script>
<style lang="less" >
.styleLayoutwrap {
  width: 100%;
  height: 100%;
  max-height: 95%;
  .da {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
  .qq {
    float: left;
    margin-top: 30px;
    width: 200px;
    height: 70px;
    font-size: 30px;
  }
  .popUp {
    position: absolute;
    top: 0px;

    width: 100%;
    height: 100%;
    background-color: rgba((0), 0, 0, 0.5);

    padding: 10px;
    display: flex;
    justify-content: center;

    align-items: center;
    .popUpinner {
      width: 50%;
      min-height: 15%;
      background-color: wheat;
      text-align: center;
      border-radius: 20px;
      p {
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        padding: 20px;
        white-space: normal;
      }
      button {
        span {
          font-size: 30px;
        }
      }
    }
  }
}
</style>