<template>
  <div class="styleLayoutwrap">
    <el-button class="qq" type="danger" @click="is=!is">切换风格</el-button>
    <AStyleLayout v-if="is" />
    <BStyleLaout v-else :tranlateXAttrModule="tranlateXAttrModule" />
  </div>
</template>
<script>
import AStyleLayout from './components/AStyleLayout'
import BStyleLaout from './components/BStyleLaout'

export default {
  components: { AStyleLayout, BStyleLaout },
  props: {
    tranlateXAttrModule: Function
  },
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
  height: 75%;
  .qq {
    margin-top: 30px;
    width: 200px;
    height: 70px;
    font-size: 30px;
  }
}
</style>