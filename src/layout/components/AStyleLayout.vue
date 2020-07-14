<template>
  <div class="SelectAttributes">
    <div class="item" :class="{active:isClose===0}">
      <div class="centent">
        <span class="attributeName">配汽水</span>
        <span class="severalItems">请选择1项</span>
      </div>
      <div class="config" @click="openAndClose(0)">
        <i class="el-icon-circle-plus"></i>
        选择加配
      </div>
      <div class="wrap" :class="{close:isClose!==0}">
        <ul class="row configlist">
          <li class="slide col-md-4" v-for="(item,index) in 25" :key="index">
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
              alt
            />
            <p>配可樂</p>
            <p>￥0.00</p>
          </li>
        </ul>
      </div>
      <div class="icon" :class="{isShow:isShowIcon,close:isClose!==0}">
        <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
    <div class="item" :class="{active:isClose===1}">
      <div class="centent">
        <span class="attributeName">配汽水</span>
        <span class="severalItems">请选择1项</span>
      </div>
      <div class="config" @click="openAndClose(1)">
        <i class="el-icon-circle-plus"></i>
        选择加配
      </div>
      <div class="wrap" :class="{close:isClose!==1}">
        <ul class="row configlist">
          <li class="slide col-md-4" v-for="(item,index) in 25" :key="index">
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
              alt
            />
            <p>配可樂</p>
            <p>￥0.00</p>
          </li>
        </ul>
      </div>
      <div class="icon" :class="{isShow:isShowIcon,close:isClose!==1}">
        <i class="el-icon-d-arrow-right"></i>
      </div>
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
    return {}
  },
  mounted() {},
  methods: {
    openAndClose(index) {
      this.isClose = index
      setTimeout(() => {
        if (
          $('.wrap')[index].scrollTop >
          $('.configlist')[index].offsetHeight - $('.wrap')[index].clientHeight
        ) {
          this.isShowIcon = true
        } else {
          this.isShowIcon = false
        }
      }, 300)
    }
  }
}
</script>
<style lang="less">
</style>