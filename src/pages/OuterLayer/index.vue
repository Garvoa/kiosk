
<template>
  <div @click="toHome">
    <header>
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594990138492&di=0f5670d1a42616214ea1f7f30905c5ec&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2892372298%2C3590958393%26fm%3D214%26gp%3D0.jpg"
        alt
      />
    </header>
    <section>
      <!-- <Rotation /> -->
      <moduleVideo ref="moduleVideo" :toHome="toHome" />
    </section>
    <footer>
      <el-button type="success" class="startcat">
        <i class="iconfont icon-diancan"></i> 開始點餐
      </el-button>
      <el-button class="switchlang" type="warning" @click="switchlang">
        <i class="iconfont icon-world"></i> 中文
      </el-button>
    </footer>
    <div class="mask"></div>
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
  min-width: 1024px;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
header {
  height: 20%;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
section {
  height: 56%;
  position: relative;
}
footer {
  height: 24%;
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
    animation: startorder 4s infinite;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
  }
  .switchlang {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 25%;
    height: 100px;
    font-size: 50px;
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