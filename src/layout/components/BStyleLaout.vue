<template>
  <div class="bAttributes" ref="bAttributes">
    <div class="outer" ref="outer">
      <div class="movetemplate" ref="movetemplate">
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
              <ul class="row configlist">
                <li
                  class="slide col-md-4"
                  v-for="(item,index) in 25"
                  :key="index"
                  @click="openAttributeModule"
                >
                  <img
                    src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
                    alt
                  />
                  <div>
                    <p>配可樂</p>
                    <p>￥0.00</p>
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
              <span class="attributeName">配汽水</span>
              <span class="severalItems">请选择1项</span>
            </div>
            <div class="config">
              <i class="el-icon-circle-plus"></i>
              选择加配
            </div>
            <div class="wrap">
              <ul class="row configlist">
                <li
                  class="slide col-md-4"
                  v-for="(item,index) in 25"
                  :key="index"
                  @click="openAttributeModule"
                >
                  <img
                    src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
                    alt
                  />
                  <div>
                    <p>配可樂</p>
                    <p>￥0.00</p>
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
              <span class="attributeName">配汽水</span>
              <span class="severalItems">请选择1项</span>
            </div>
            <div class="config">
              <i class="el-icon-circle-plus"></i>
              选择加配
            </div>
            <div class="wrap">
              <ul class="row configlist">
                <li
                  class="slide col-md-4"
                  v-for="(item,index) in 25"
                  :key="index"
                  @click="openAttributeModule"
                >
                  <img
                    src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
                    alt
                  />
                  <div>
                    <p>配可樂</p>
                    <p>￥0.00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="icon" :class="{isShow:isShowIcon}">
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </div>
        </div>
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
              <ul class="row">
                <li class="slide col-md-4" v-for="(item,index) in 25" :key="index">
                  <img
                    src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
                    alt
                  />
                  <div>
                    <p>配可樂</p>
                    <p>￥0.00</p>
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
              <span class="attributeName">配汽水</span>
              <span class="severalItems">请选择1项</span>
            </div>
            <div class="config">
              <i class="el-icon-circle-plus"></i>
              选择加配
            </div>
            <div class="wrap">
              <ul class="row configlist">
                <li class="slide col-md-4" v-for="(item,index) in 25" :key="index">
                  <img
                    src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
                    alt
                  />
                  <div>
                    <p>配可樂</p>
                    <p>￥0.00</p>
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
    </div>
    <div class="nextAndSignout">
      <el-button type="danger" @click="nextPage(0)">{{isActive===0?'退出':'上一個'}}</el-button>
      <el-button type="success" @click="nextPage(1)">下一個</el-button>
    </div>
    <AttributeModule ref="AttributeModule" />
  </div>
</template>
<script>
import LayoutMixin from '../mixin'
import AttributeModule from './AttributeModule/AttributeModule'
export default {
  components: { AttributeModule },
  mixins: [LayoutMixin],
  props: { tranlateXAttrModule: Function },
  data() {
    return {
      isActive: 0
    }
  },
  mounted() {},
  methods: {
    nextPage(index) {
      // this.$router.replace({ path: `/attributelist/${index}` })
      // this.tranlateXAttrModule(index)
      this.isActive = index
      // let translateX = -this.$refs.bAttributes.offsetWidth
      // this.$refs.bAttributes.style.transform = `translateX(${translateX}px)`
      this.$router.push({ path: '/orderdetails' })
    },
    openAttributeModule() {
      this.$refs.AttributeModule.isShowAttributeInner(1)
    }
  }
}
</script>
<style lang="less" scoped>
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
  .outer {
    height: 80%;
    transition: 0.5s;
    overflow: hidden;
    .movetemplate {
      width: 100%;
      height: 100%;

      // transform: translateY(-500px);
      transition: 0.5s;
      .SelectAttributes {
        height: 100%;

        .item {
          width: 100%;
          border: 1px solid #20b2aa;
          border-radius: 10px;
          margin-top: 2%;
          position: relative;
          height: 31.333%;

          .centent {
            height: 15%;
            background-color: #20b2aa;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            .severalItems {
              float: right;
            }
          }
          .config {
            width: 100%;
            height: 15%;
            padding: 10px;
            box-sizing: border-box;
          }
          .wrap {
            height: 68%;
            transition: 0.3s;
            opacity: 1;
            position: relative;
            width: 100%;
            overflow: auto;
            .row {
              padding: 0;
              margin: 0;
            }
            .slide {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin-bottom: 20px;
              div {
                background-color: #dddddd;
                width: 70%;
                p {
                  margin: 0;
                  text-align: center;
                }
              }

              img {
                width: 70%;
              }
            }
          }

          .icon {
            position: absolute;
            bottom: 40%;
            right: 20px;
            font-size: 50px;
            animation: translateIcon 1s infinite;
            font-weight: 700;
            transform: rotate(90deg);
          }
          .isShow {
            display: none;
          }

          .close {
            height: 0px;
            opacity: 0;
            padding: 0;
            margin-bottom: 0px;
          }
        }
        .active {
          border: 1px solid #ffd700;
          .centent {
            background-color: #ffd700;
          }
        }
      }
    }
  }
}

@keyframes translateIcon {
  0% {
    transform: rotate(90deg) translateX(0px);
  }

  50% {
    transform: rotate(90deg) translateX(20px);
  }

  100% {
    transform: rotate(90deg) translateX(0px);
  }
}
</style>