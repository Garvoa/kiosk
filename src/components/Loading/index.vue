<template>
  <div id="loading">
    <img
      src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=211042939,507414138&fm=26&gp=0.jpg"
      alt
    />
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less">
#loading {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(0.8);
  }
}
</style>