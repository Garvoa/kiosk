<template>
  <div class="styleLayoutwrap">
    <div class="da">
      <el-button class="qq" type="danger" @click="is=!is">切换风格</el-button>
    </div>
    <AStyleLayout v-if="!is" :attrButeDetails="attrButeDetails" />
    <BStyleLaout v-else />
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
      is: true
    }
  },
  mounted() {},

  methods: {}
}
</script>
<style lang="less" >
.styleLayoutwrap {
  width: 100%;
  height: 100%;
  // overflow: auto;
  // overflow-x: hidden;
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
}
</style>