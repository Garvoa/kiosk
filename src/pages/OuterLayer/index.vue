
<template>
  <div @click="toHome">
    <header>
      <h1>和平饭店logo</h1>
    </header>
    <section>
      <!-- <Rotation /> -->
      <moduleVideo ref="moduleVideo" :toHome="toHome" />
    </section>
    <footer>
      <el-button type="success" class="startcat">開始點餐</el-button>
      <el-button class="switchlang" type="warning" @click="switchlang">
        <i class="el-icon-s-tools icon"></i> 中文
      </el-button>
    </footer>
  </div>
</template>
<script>
import Rotation from '../../components/Rotation'
import moduleVideo from '../../components/moduleVideo'
export default {
  name: 'outerLayer',
  components: { Rotation, moduleVideo },
  mounted() {},
  methods: {
    toHome(e) {
      this.$router.push({ path: '/home' })
    },
    switchlang(e) {
      e.stopPropagation()
    }
  },
  activated() {
    this.$refs.moduleVideo.play()
  },
  deactivated() {
    this.$refs.moduleVideo.pause()
  }
}
</script>
<style lang="less" scoped>
#app {
  margin: 0 auto;
  min-width: 1020px;
  max-width: 1024px;
}
header {
  padding: 40px;
  h1 {
    text-align: center;
    padding: 20px;
  }
}
section {
  height: 1400px;
  position: relative;
}
footer {
  text-align: center;
  padding: 140px;
  position: relative;
  .startcat {
    border: none;
    width: 50%;
    height: 80px;
    padding: 20px;
    font-size: 30px;
    box-shadow: 10px 10px 5px #888888;
    border-radius: 10px;
    background-color: #67c23a;
    animation: startorder 4s infinite;
  }
  .switchlang {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 20%;
    height: 70px;
    font-size: 30px;
    margin: 20px;

    border-radius: 40px;
    font-weight: 600;
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
</style>