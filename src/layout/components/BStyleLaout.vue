<template>
  <div class="bAttributes" ref="bAttributes">
    <div class="outer" ref="outer">
      <div class="SelectAttributes" ref="SelectAttributes">
        <div
          class="item"
          ref="SelectAttributesItem"
          v-for="(attrBute,attrIndex) in getModifiersList"
          :key="attrBute.id"
          :class="{active:attrIndex===page}"
        >
          <div class="centent">
            <span class="attributeName">{{attrBute.name}}</span>
            <span class="severalItems">请选择{{attrBute.minsel+'-'+attrBute.maxsel}}项</span>
          </div>
          <div class="config">
            <i class="el-icon-circle-plus"></i>
            选择加配
          </div>
          <div class="wrap wrapIsIcon">
            <ul class="row configlist configlistIsCon">
              <li class="slide col-md-4" v-for="(item,index) in attrBute.moddetails" :key="index">
                <div
                  @click="openAttributeModule(item),addAttrBute($event,item,attrBute.maxsel===1?'1':'+',attrIndex,index,attrBute)"
                  :style="{border:item.img?'none':'',backgroundColor:item.num>0?'greenyellow':'transparent'}"
                >
                  <img :src="item.img" alt v-if="item.img" />
                  <p
                    @click="item.moditem&&item.moditem.menuitem?'':addAttrBute($event,item,'',attrIndex,index,attrBute)"
                    class="menuitemName"
                    :class="{isactive:item.isActive}"
                  >
                    <span>{{item.moditem.name}}</span>
                  </p>

                  <p
                    v-if="item.moditem.menuitem &&attrBute.maxsel!==1&&item.num>0?true:false"
                    class="addNumber"
                  >
                    <i
                      class="el-icon-circle-plus"
                      @click="addAttrBute($event,item,'+',attrIndex,index,attrBute)"
                    ></i>
                    <span class="number" v-text="item.num||0"></span>
                    <i
                      class="el-icon-remove"
                      @click="addAttrBute($event,item,'-',attrIndex,index,attrBute)"
                    ></i>
                  </p>
                  <span
                    class="price"
                    v-if="item.moditem.menuitem"
                  >￥{{item.moditem.menuitem?item.moditem.menuitem.price1:'0'}}</span>
                  <!-- showNum(attrIndex) -->
                </div>
              </li>
            </ul>
          </div>
          <div class="iconDiv">
            <i class="el-icon-d-arrow-right"></i>
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="nextAndSignout">
      <el-button type="danger" @click="nextPage('-')">{{page===0?'退出':'上一個'}}</el-button>
      <el-button
        type="success"
        @click="nextPage('+')"
      >{{getModifiersList.length-1===page?'确定':'下一個'}}</el-button>
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

  data() {
    return {
      page: 0,
    }
  },
  mounted() {
    this.isShowIconFn()
  },
  methods: {
    //点击上一页或者下一页，如果page为0时类型是减则回到主菜页，如果是最后一页则跳转并且添加到购物车中
    nextPage(type) {
      if (this.page === 0 && type === '-') {
        this.$router.go(-1)
        return
      }
      if (this.getModifiersList.length - 1 === this.page && type === '+') {
        this.toOrderdetails()
        return
      }
      //如果是加（下一页）的话，则判断当前页是否有必选项，如果不是则可以下一页，有的话判断当前用户选了没，如果没有则弹框提示，如果有则下一页
      if (type === '+') {
        let flag = false //定义个开门装置
        //获取到当前页的所有属性 ，判断当前页的minsel属性是否大于等于1，如果是则是必选项
        if (this.getModifiersList[this.page].minsel >= 1) {
          JSON.parse(
            window.localStorage.getItem('attrButeDetailsList')
          ).attrButeDetails.forEach((item) => {
            if (this.getModifiersList[this.page].modid === item.modid) {
              flag = true //用户选了必选项的情况下才为true
            }
          })
          if (flag) {
            //页码
            this.page++
          } else {
            //弹窗
            this.$bus.$emit(
              'isMsgFlag',
              `${this.getModifiersList[this.page].name}是必选项`
            )
          }
        } else {
          this.page++
        }
      } else {
        this.page--
      }
      this.$nextTick(() => {
        this.isShowIconFn()
      })
    },
    openAttributeModule() {
      this.$refs.AttributeModule.isShowAttributeInner(1)
    },
    //是否显示icon图标
    isShowIconFn() {
      $('.wrapIsIcon').each((index, item) => {
        if (
          $('.wrapIsIcon')[index].offsetHeight >
          $('.configlistIsCon')[index].offsetHeight
        ) {
          $('.iconDiv')[index].className = ' iconDiv isShow '
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.bAttributes {
  overflow: hidden;

  .nextAndSignout {
    margin-top: 40px;
    padding: 30px;
    text-align: center;

    width: 100%;
    position: absolute;
    bottom: 50px;
    left: 0px;
    right: 0px;
    button {
      margin: 0px 30px;
      font-size: 30px;
      width: 200px;
      height: 80px;
    }
  }

  .outer {
    max-height: 1400px;
    max-width: 100%;

    .SelectAttributes {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      // max-height: 1200px;

      position: relative;
      left: 0px;
      .item {
        width: 100%;
        border: 1px solid #20b2aa;
        border-radius: 10px;
        margin-top: 2%;
        position: relative;
        display: none;
        .centent {
          background-color: #20b2aa;
          width: 100%;
          padding: 5px;
          box-sizing: border-box;
          .attributeName {
            font-size: 30px;
          }
        }
        .config {
          width: 100%;
          font-size: 30px;
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
          max-height: 900px;
          transform: translate3d(0, 0, 0);
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
              .addNumber {
                display: inline-block;
              }
            }

            img {
              width: 100%;
            }
          }
        }

        .iconDiv {
          position: absolute;
          bottom: 40%;
          right: -25px;
          font-size: 50px;
          animation: translateIcon 1s infinite;
          font-weight: 700;
          transform: rotate(90deg);
          text-align: right;
        }
        .isShow {
          display: none;
        }

        .closeIcon {
          height: 0px;
          opacity: 0;
          padding: 0;
          margin-bottom: 0px;
        }
      }
      .active {
        display: block;
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