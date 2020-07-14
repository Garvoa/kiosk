<template>
  <div class="bAttributes">
    <div class="aa" ref="outer">
      <div class="SelectAttributes" ref="aa">
        <div class="item">
          <div class="centent">
            <span class="attributeName">配汽水</span>
            <span class="severalItems">请选择1项</span>
          </div>
          <div class="config">
            <i class="el-icon-circle-plus"></i>
            选择加配
          </div>
          <div class="wrap">
            <ul class="configlist">
              <li class="slide" v-for="(item,index) in 25" :key="index">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
                  alt
                />
                <p>配可樂</p>
                <p>￥0.00</p>
              </li>
            </ul>
          </div>
          <div class="icon" :class="{isShow:isShowIcon}">
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </div>
        <div class="item">
          <div class="centent">
            <span class="attributeName">加汤</span>
            <span class="severalItems">请选择1项</span>
          </div>
          <div class="config">
            <i class="el-icon-circle-plus"></i>
            选择加配
          </div>
          <div class="wrap">
            <ul class="configlist">
              <li class="slide" v-for="(item,index) in 25" :key="index" style="width:20%">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594641456911&di=72310474280b01427564df9de0eeb3e1&imgtype=0&src=http%3A%2F%2Fnews.hainan.net%2FEditor%2FUploadFile08%2F2010w12r20f%2F201012201682912.jpg"
                  alt
                />
                <p>乌鸡汤</p>
                <div class="price">
                  <p>￥2.00</p>
                  <p>
                    <i class="el-icon-remove"></i>
                    <span>0</span>
                    <i class="el-icon-circle-plus"></i>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="icon" :class="{isShow:isShowIcon}">
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </div>
        <div class="item">
          <div class="centent">
            <span class="attributeName">加汤</span>
            <span class="severalItems">请选择1项</span>
          </div>
          <div class="config">
            <i class="el-icon-circle-plus"></i>
            选择加配
          </div>
          <div class="wrap">
            <ul class="configlist">
              <li class="slide" v-for="(item,index) in 25" :key="index" style="width:20%">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594641456911&di=72310474280b01427564df9de0eeb3e1&imgtype=0&src=http%3A%2F%2Fnews.hainan.net%2FEditor%2FUploadFile08%2F2010w12r20f%2F201012201682912.jpg"
                  alt
                />
                <p>乌鸡汤</p>
                <div class="price">
                  <p>￥2.00</p>
                  <p>
                    <i class="el-icon-remove"></i>
                    <span>0</span>
                    <i class="el-icon-circle-plus"></i>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="icon" :class="{isShow:isShowIcon}">
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="SelectAttributes">
        <div class="item">
          <div class="centent">
            <span class="attributeName">配汽水</span>
            <span class="severalItems">请选择1项</span>
          </div>
          <div class="config">
            <i class="el-icon-circle-plus"></i>
            选择加配
          </div>
          <div class="wrap">
            <ul class="configlist">
              <li class="slide" v-for="(item,index) in 25" :key="index">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
                  alt
                />
                <p>配可樂</p>
                <p>￥0.00</p>
              </li>
            </ul>
          </div>
          <div class="icon" :class="{isShow:isShowIcon}">
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </div>
        <div class="item">
          <div class="centent">
            <span class="attributeName">加汤</span>
            <span class="severalItems">请选择1项</span>
          </div>
          <div class="config">
            <i class="el-icon-circle-plus"></i>
            选择加配
          </div>
          <div class="wrap">
            <ul class="configlist">
              <li class="slide" v-for="(item,index) in 25" :key="index" style="width:20%">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594641456911&di=72310474280b01427564df9de0eeb3e1&imgtype=0&src=http%3A%2F%2Fnews.hainan.net%2FEditor%2FUploadFile08%2F2010w12r20f%2F201012201682912.jpg"
                  alt
                />
                <p>乌鸡汤</p>
                <div class="price">
                  <p>￥2.00</p>
                  <p>
                    <i class="el-icon-remove"></i>
                    <span>0</span>
                    <i class="el-icon-circle-plus"></i>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="icon" :class="{isShow:isShowIcon}">
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="nextAndSignout">
      <el-button type="danger" @click="nextPage(0)">{{isActive===0?'退出':'上一個'}}</el-button>
      <el-button type="success" @click="nextPage(1)">下一個</el-button>
    </div>
  </div>
</template>
<script>
import LayoutMixin from '../mixin'
import '../css/layout.less'
export default {
  components: {},
  mixins: [LayoutMixin],
  data() {
    return {
      isActive: 0
    }
  },
  mounted() {},
  methods: {
    nextPage(index) {
      this.isActive = index
      console.log(this.$refs.aa.offsetWidth)
      let translateX = -this.$refs.aa.offsetWidth * index
      this.$refs.outer.style.transform = `translateX(${translateX}px)`
    }
  }
}
</script>
<style lang="less">
.bAttributes {
  height: 100%;
  overflow: hidden;
  .nextAndSignout {
    margin-top: 40px;
    padding: 30px;
    text-align: center;
    button {
      margin: 0px 30px;
      font-size: 30px;
      width: 200px;
      height: 80px;
    }
  }
  .active {
    transition: 1s;
    transform: translateX(-110%);
  }
  .aa {
    height: 80%;
    // display: flex;
    // width: 200%;
    transition: 0.5s;
    // justify-content: space-between;
  }

  // overflow: hidden;

  .item {
    height: 33.333%;
    // height: 50%;
    // max-height: 530px;
    padding-bottom: 10px;
  }
}
</style>