<template>
  <div class="bAttributes" ref="bAttributes">
    <div class="outer" ref="outer">
      <div class="movetemplate" ref="movetemplate">
        <div class="SelectAttributes" ref="selectAttributes">
          <div class="item" v-for="(attrBute,attrIndex) in attrButeList" :key="attrBute.id">
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
                <!-- <li class="slide col-md-4" v-for="(item,index) in attrBute.list" :key="index">
                  <img :src="item.img" :style="{width:item.img?'100%':'0px'}" alt />

                  <div>
                    <p>
                      <span>{{item.item}}</span>
                      <span class="price">￥{{item.price}}</span>
                    </p>
                    <p v-if="!item.img">
                      <i class="el-icon-circle-plus" @click="addAttrBute(item,'+')"></i>
                      <span class="number">{{item.num||0}}</span>
                      <i class="el-icon-remove" @click="addAttrBute(item,'-')"></i>
                      <i></i>
                    </p>
                  </div>
                </li>-->
              </ul>
            </div>
            <div class="icon" :class="{isShow:isShowIcon}">
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </div>
          <!-- <div class="item">
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
                    <span>配可樂</span>
                    <span>￥0.00</span>
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
                    <span>配可樂</span>
                    <span>￥0.00</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="icon" :class="{isShow:isShowIcon}">
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </div>-->
        </div>
        <div class="SelectAttributes">
          <!-- <div class="item" v-for="(attrBute,attrIndex) in attrButeList" :key="attrBute.id">
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
                    <span>配可樂</span>
                    <span>￥0.00</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="icon" :class="{isShow:isShowIcon}">
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </div>-->
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
                    <span>配可樂</span>
                    <span>￥0.00</span>
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
                    <span>配可樂</span>
                    <span>￥0.00</span>
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
      this.isActive = index
      let translateX = -this.$refs.selectAttributes.offsetWidth * index
      this.$refs.movetemplate.style.transform = `translateX(${translateX}px)`
    },
    openAttributeModule() {
      this.$refs.AttributeModule.isShowAttributeInner(1)
    }
  }
}
</script>
<style lang="less" scoped>
.bAttributes {
  // height: 100%;
  overflow: hidden;

  .nextAndSignout {
    margin-top: 40px;
    padding: 30px;
    text-align: center;
    float: left;
    width: 100%;
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
    // height: 80%;
    transition: 0.5s;
    width: 1000%;
    // overflow: hidden;
    .movetemplate {
      height: 100%;
      width: 100%;
      // overflow: hidden;
      // transform: translateY(-500px);
      display: flex;
      transition: 0.5s;
      .SelectAttributes {
        // display: flex;
        // padding: 0px 10px;
        width: 10%;
        .item {
          width: 100%;
          border: 1px solid #20b2aa;
          border-radius: 10px;
          margin-top: 2%;
          position: relative;
          // height: 50%;
          max-height: 600px;

          .centent {
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

            padding: 10px;
            box-sizing: border-box;
          }
          .wrap {
            // height: 68%;
            transition: 0.3s;
            opacity: 1;
            position: relative;
            width: 100%;
            overflow: auto;
            max-height: 500px;
            .row {
              padding: 0;
              margin: 0;
            }
            .configlist {
              width: 98%;
            }
            .slide {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin-bottom: 20px;

              div {
                background-color: #dddddd;
                width: 100%;
                padding: 10px;
                span {
                  font-size: 30px;
                }
              }

              img {
                width: 100%;
              }
            }
          }

          .icon {
            position: absolute;
            bottom: 40%;
            right: 0px;
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