<template>
  <div class="styleLayoutwrap">
    <!-- <AStyleLayout /> -->
    <BStyleLaout />
  </div>
</template>
<script>
import AStyleLayout from './components/AStyleLayout'
import BStyleLaout from './components/BStyleLaout'

export default {
  components: { AStyleLayout, BStyleLaout },
  mounted() {},

  methods: {}
}
</script>
<style lang="less" >
.styleLayoutwrap {
  width: 100%;
  height: 75%;
}
</style>