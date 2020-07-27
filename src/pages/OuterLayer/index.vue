
<template>
  <div>
    <header>
      <img src="../../img/logo.png" alt />
    </header>
    <section>
      <Rotation v-if="isRotation" :isRotation="isRotation" />
      <moduleVideo ref="moduleVideo" :isRotation="isRotation" v-else />
    </section>
    <footer>
      <el-button type="success" class="startcat">
        <i class="iconfont icon-diancan"></i> 開始點餐
      </el-button>
    </footer>
    <el-button class="switchlang" type="warning" @click="switchlang">
      <i class="iconfont icon-world"></i> 中文
    </el-button>
    <div class="mask" @click="toHome"></div>

    <!-- <el-button class="isRotation" @click="isRotationaa">切换</el-button> -->
  </div>
</template>
<script>
import Rotation from '../../components/Rotation'
import moduleVideo from '../../components/moduleVideo'
export default {
  name: 'outerLayer',
  components: { Rotation, moduleVideo },
  data() {
    return {
      isRotation: true
    }
  },
  mounted() {},
  methods: {
    toHome(e) {
      this.$router.push({ path: '/home' })
    },
    switchlang(e) {
      e.stopPropagation()
    },
    isRotationaa() {
      this.isRotation = !this.isRotation
    }
  },
  activated() {
    this.$refs.moduleVideo && this.$refs.moduleVideo.play()
  },
  deactivated() {
    this.$refs.moduleVideo && this.$refs.moduleVideo.pause()
  }
}
</script>
<style lang="less" scoped>
#app {
  margin: 0 auto;
  min-width: 1024px;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 10;
}
header {
  // height: 20%;
  box-sizing: border-box;
  // margin: 30px 0px;
  padding: 50px;
  img {
    width: 100%;

    object-fit: cover;
  }
}
section {
  height: 63%;
  position: relative;
}
footer {
  height: 20%;
  text-align: center;
  box-sizing: border-box;

  position: relative;
  .startcat {
    border: none;
    width: 50%;
    height: 100px;
    padding: 20px;
    font-size: 50px;
    box-shadow: 10px 10px 5px #888888;
    border-radius: 10px;
    background-color: #67c23a;
    animation: startorder 8s infinite;
    position: absolute;
    top: 50px;
    left: 0px;
    right: 0px;

    margin: auto;
  }

  .lang {
    position: absolute;
    bottom: 100px;
    right: 70px;
    font-weight: 600;
    font-size: 30px;
    background-color: #ffa500;
    li {
      padding: 10px 0px;
    }
  }
}
.switchlang {
  position: absolute;
  bottom: 20px;
  right: 0px;
  width: 25%;
  height: 100px;
  font-size: 50px;
  margin: 0px 20px;
  border-radius: 40px;
  font-weight: 600;
  z-index: 11;
}
@keyframes startorder {
  0% {
    background-color: #67c23a;
    // font-size: 25px;

    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    background-color: red;
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    background-color: #67c23a;
    transform: scale(1);
  }
}

.isRotation {
  position: absolute;
  top: 300px;
  right: 0px;
  left: 0px;
  margin: auto;
  width: 20%;
  font-size: 30px;
  background-color: aqua;
}
</style>