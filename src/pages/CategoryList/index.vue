<template>
  <div class="categorywrap">
    <!-- 头部 -->
    <div class="categoryheader">
      <div class="time">{{hour}}{{time}}</div>
      <el-button
        class="reelection btn btn-primary btn-lg show-modal leave"
        type="danger"
        round
        data-toggle="modal"
        data-target="#myModal"
        @click=" $switchFrames({text:`重新點餐`,fn:orderAgain}) "
        :disabled="totalPrice>0?false:true"
      >
        <i class="iconfont icon-zhongxin"></i> 重新點單
      </el-button>
    </div>
    <!-- 轮播图 -->
    <div class="rotation">
      <Rotation />
    </div>
    <!-- 菜品列表 -->
    <section>
      <div class="row rowLeft">
        <div class="col-md-3 left" id="wrapper">
          <ul class="list-group">
            <li
              class="list-group-item"
              ref="leftItem"
              :class="{active1:active===index}"
              @click="isActive(index,item.name)"
              v-for="(item,index) in  menupageList || 20"
              :key="index"
              :style="item.objectCSS"
            >
              <img src="../../img/u=185888452,394183420&fm=26&gp=0.jpg" alt />
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="col-md-9 right">
          <p class="category1Name">{{name}}</p>

          <div id="wrapperRight" ref="wrapperRight">
            <div class="wrapperOuter">
              <ul ref="rowRight" class="rowRight">
                <li
                  :ref="`item${index}`"
                  v-for="(menupage,index) in menupageListRight"
                  :key="index"
                >
                  <div
                    class="col-md-4 rightlist"
                    v-for="(item,index) in menupage || 20"
                    :key="index"
                    @click="toAttriButeList(item)"
                  >
                    <div class="item">
                      <img
                        :src="item.imgurl?`http://127.0.0.1:8080/static/images/item/${item.imgurl}`:'img/no07.jpg'"
                        alt
                      />
                      <p>
                        <span style="display:block" class="itemName">
                          <!-- <i class="el-icon-circle-plus-outline" style="float:left"></i> -->
                          {{item.name===""?111:item.name}}
                        </span>

                        <span>￥{{item.menuitem?item.menuitem.price1:'111'}}</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 购物车订单 -->

    <Myorder :leaveCategoryList="leaveCategoryList" style="height:20%" />
    <!-- 模态框 -->
    <StateFrames />
    <!-- <div class="roll">
      <span>
        <br />滑
        <br />动
        <br />查
        <br />看
        <br />更
        <br />多
        <br />👇
      </span>
    </div>-->
  </div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'
import Rotation from '../../components/Rotation'
import Myorder from '../../components/Myorder'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { Rotation, Myorder },
  name: 'categoryList',
  data() {
    return {
      time: this.$moment().format('LTS'), //时间
      hour: '', //时辰
      active: 0,
      scrollFlag: false,
      iscrollRight: null,
      name: '', //大类标题
      leftTime: null, //定时器
      top: 0, //大类的translate的top值
    }
  },
  mounted() {
    this.date()

    //滚动条
  },
  // activated() {
  //   this.date()
  // },
  // deactivated() {
  //   this.timer = null
  // },
  methods: {
    date() {
      //时间
      setInterval(() => {
        this.time = this.$moment().format('LTS')
        let time = Number(this.time.split(':')[0])
        if (time >= 0 && time < 4) {
          this.hour = '凌晨'
        } else if (time >= 4 && time < 7) {
          this.hour = '早上'
        } else if (time >= 7 && time < 11) {
          this.hour = '上午'
        } else if (time >= 11 && time < 13) {
          this.hour = '中午'
        } else if (time >= 13 && time < 18) {
          this.hour = '下午'
        } else if (time >= 18 && time < 23) {
          this.hour = '晚上'
        }
      }, 1000)
    },
    //切换菜品列表
    isActive(index, name) {
      if (!this.iscrollRight) return
      this.scrollFlag = true
      let offsetTop = -this.$refs[`item${index}`][0].offsetTop
      this.iscrollRight.$offsetTop = offsetTop
      this.iscrollRight.$index = index
      this.iscrollRight.scrollTo(0, offsetTop, 500)
      // this.leftScroll(index)
      this.active = index
      this.name = name
      console.log(offsetTop)
    },
    //清空Window缓存
    orderAgain() {
      this.$store.commit('DELETEATTRBUTEDETALSLIST')
      window.localStorage.removeItem('attrButeDetailsList')
      window.localStorage.removeItem('item')
      window.localStorage.removeItem('follow')
    },
    //移动大类的translate
    moveLeft() {
      this.leftTime = setInterval(() => {
        if (-this.top === this.iscroll.maxScrollY) {
          this.leftTimeFlag = true
        } else if (this.top === 0) {
          this.leftTimeFlag = false
        }
        if (this.leftTimeFlag) {
          this.top--
        } else {
          this.top++
        }
        this.iscroll.scrollTo(0, -this.top, 500)
      }, 1000 / 60)
    },

    //路由跳转到配菜页
    toAttriButeList(item) {
      const { itemid, menuitem } = item
      let searchData = {
        itemid,
        isselfmodifier: menuitem.isselfmodifier,
        familyid: menuitem.familyid,
      }
      this.$store.dispatch('reqMenumodInfo', searchData).then((result) => {
        if (result.code === 200) {
          //设置followy以及item属性
          this.$store.commit('UPDATE_MENUMOND_ONFO', result.data)
          if (window.localStorage.getItem('item')) {
            let storageItem = window.localStorage.getItem('item') * 1 + 1
            window.localStorage.setItem('item', storageItem)
            window.localStorage.setItem('follow', storageItem)
          } else {
            window.localStorage.setItem('item', 1)
            window.localStorage.setItem(
              'follow',
              window.localStorage.getItem('item')
            )
          }
          this.$router.push({
            path: '/attributelist',
            query: {
              name: item.name,
              price: item.menuitem.price1,
              searchData,
              img: item.imgurl,

              orderitemhisItem: {
                ...item.menuitem,
                price: item.menuitem.price1,
                qty: 1,
                item: window.localStorage.getItem('item') * 1,
              },
            },
          })
        }
      })
    },
    //大类点击移动主菜的translate
    leftScroll(index) {
      if (this.iscroll.y > this.iscroll.maxScrollY) {
        this.iscroll.scrollTo(
          0,
          -this.$refs.leftItem[0].offsetHeight * index,
          500
        )
        this.iscroll.$index = index
      }
    },
    leaveCategoryList() {
      this.$router.go(-1)
    },
  },
  computed: {
    ...mapState({
      menupageList: (state) => state.categoryList.menupageList,
    }),
    ...mapGetters(['menupageListRight', 'totalPrice']),
  },
  watch: {
    //初始化滚动条
    menupageList: {
      handler() {
        this.$nextTick(() => {
          this.iscroll = new IScroll('#wrapper', {
            mouseWheel: true,
            scrollbars: 'custom',
            scrollY: true,

            startY: 0,
          })
          this.iscroll.on('beforeScrollStart', () => {
            console.log(11)
            clearInterval(this.leftTime)
          })
          this.iscroll.on('scrollEnd', () => {
            // this.top = -this.iscroll.y
            // setTimeout(() => {
            //   this.moveLeft()
            // }, 2000)
          })
        })
        this.name = this.menupageList[0].name
      },
      immediate: true,
    },
    //初始化滚动条
    menupageListRight: {
      handler() {
        this.$nextTick(() => {
          this.iscrollRight = new IScroll('#wrapperRight', {
            mouseWheel: true,
            scrollbars: 'custom',
            scrollY: true,
            startY: 0,
            probeType: 3,
          })
          this.moveLeft()
          this.iscrollRight.on('scroll', () => {
            clearInterval(this.leftTime)
            var timer = null
            if (!this.iscrollRight) return
            if (!this.$refs.item1 || this.scrollFlag) return

            for (
              let index = 0;
              index < this.menupageListRight.length;
              index++
            ) {
              let top = this.$refs[`item${index + 1}`]
                ? -this.$refs[`item${index + 1}`][0].offsetTop
                : this.$refs[`item${index - 1}`][0].offsetTop

              if (
                this.iscrollRight.y <=
                  -this.$refs[`item${index}`][0].offsetTop &&
                this.iscrollRight.y >= top
              ) {
                this.name = this.menupageList[index].name
                this.active = index
                this.leftScroll(index)
                if (this.iscroll.$index > index) {
                  console.log(this.iscroll.$index)
                  this.iscroll.scrollTo(
                    0,
                    -this.$refs.leftItem[0].offsetHeight * index,
                    500
                  )
                }
              }

              if (
                this.iscrollRight.y <=
                -this.$refs[`item${this.menupageListRight.length - 1}`][0]
                  .offsetTop
              ) {
                this.active = this.menupageListRight.length - 1
              }
              if (
                this.iscrollRight.maxScrollY +
                  this.$refs.wrapperRight.offsetHeight / 3 >=
                parseInt(this.iscrollRight.y)
              ) {
                this.name = this.menupageListRight[
                  this.menupageListRight.length - 1
                ].name
                this.active = this.menupageListRight.length - 1
                this.name = this.menupageList[
                  this.menupageListRight.length - 1
                ].name
              }
            }
          })
          this.iscrollRight.on('scrollEnd', () => {
            this.top = -this.iscroll.y

            if (!this.$refs.item1 || !this.scrollFlag) return
            let offsetTop = this.iscrollRight.$offsetTop

            this.iscrollRight.scrollTo(0, offsetTop, 500)
          })
          this.iscrollRight.on('beforeScrollStart', () => {
            this.scrollFlag = false
            clearInterval(this.leftTime)
          })
        })
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    this.iscrollRight.destroy()
    this.iscroll.destroy()
    clearInterval(this.leftTime)
  },
}
</script>


<style lang="less" scoped>
* {
  touch-action: none;
}
.categorywrap {
  width: 100%;
  min-width: 1024px;
  margin: 0 auto;
  overflow: hidden;
}
.categoryheader {
  position: relative;
  // background-color: rgb(240, 106, 11);
  background-color: rgba(255, 204, 0, 0.8);
  height: 5%;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .time {
    font-size: 30px;
  }
  .reelection {
    height: 70%;
    position: absolute;
    background-color: rgba(50, 59, 90);
    right: 2%;
    font-size: 30px;
    font-weight: 600;
    i {
      font-size: 30px;
    }
  }
}
section {
  height: 55%;
  text-align: right;
  .className {
    width: 70%;
    height: 80px;
    background-color: #e6a23c;
    display: inline-block;
    text-align: center;
    margin: 20px;
    line-height: 80px;
    border-radius: 20px;
  }
  .rowLeft {
    height: 100%;
    margin: 10px;
    .left {
      overflow: hidden;
      height: 100%;
      position: relative;
      width: 25%;
      .list-group {
        position: relative;
        .list-group-item {
          margin: 0px 0px 20px 0px;
          width: 100%;
          img {
            width: 100%;
            height: 150px;
            padding: 10px;
            object-fit: cover;
          }
        }
      }
    }
    .right {
      min-width: 75%;
      height: 100%;
      #wrapperRight {
        width: 100%;
        // height: 1034px;
        height: calc(100% - 50px);
        overflow: hidden;
        position: relative;
      }
      .rowRight {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        min-width: 100%;
        padding: 0;
        position: relative;
        li {
          width: 100%;
          min-height: 100%;
          position: relative;
          // margin-bottom: 30px;
          img {
            width: 100%;
            // min-height: 150px;
            // padding: 10px;
            height: 200px;
            object-fit: cover;
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 5px;
            width: 90%;
            height: 1px;
            right: 0;
            left: 0;
            margin: auto;
            border-bottom: 5px dashed #000;
          }
        }
      }

      .rightlist {
        padding: 0;
        display: flex;
        justify-content: center;
      }
      .item {
        width: 90%;
        padding: 5%, 0%;
        margin-bottom: 10%;
        border-radius: 5%;
        // background-color: #ffb6c1;
        text-align: center;

        img {
          border-radius: 5%;
          width: 100%;
        }
        p {
          span {
            font: bold 20px monospaced;
          }
          .itemName {
            margin-bottom: 10px;
            font: bold 20px monospaced;
          }
          i {
            font: bold 20px monospaced;
          }
        }
      }
    }
    text-align: center;
    .category1Name {
      width: 90%;
      background-color: rgba(255, 204, 0, 0.8);
      box-sizing: content-box;
      border-radius: 10px;
      display: inline-block;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
    }
  }
  .list-group-item {
    text-align: center;
    border-radius: 20px;
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
  }
  .list {
    float: left;
    width: 20%;
    height: 100%;
    margin: 30px;
    text-align: center;
  }
  .active1 {
    background-color: rgba(255, 204, 0, 0.8) !important;
  }
}

.rotation {
  height: 20%;
}
.myorder {
  width: 100%;

  box-sizing: border-box;
  padding-top: 4%;

  .myorderhead {
    width: 100%;
    text-align: center;

    height: 50px;
    line-height: 50px;

    background-color: chocolate;
  }
  .centent {
    height: 50%;
    // padding: 2%;
    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
    }
  }
  .leaveAndOk {
    width: 100%;
    height: 25%;
    button {
      width: 35%;
      height: 100%;
      font-size: 35px;
      margin: 0;
      i {
        font-size: 35px;
      }
      &:nth-last-child(2) {
        float: right;
      }
    }
  }
}
.roll {
  position: absolute;
  transform: rotate(180deg);
  font-size: 40px;
  font-weight: 700;
  animation: translateIcon 1s infinite;
  left: 25%;
  // z-index: -10;
  top: 50%;
  // &::after {
  //   content: '👇';
  // }
}

@media screen and (max-height: 1400px) {
  .rotation {
    display: none;
  }

  .categoryheader {
    height: 10%;
  }

  .myorder {
    height: 35%;
  }

  .category1Name {
    height: 10%;

    transform: scaleX(0.8);
  }

  .myorderhead {
    height: 30% !important;
  }

  .centent {
    height: 40% !important;
  }

  .rowRight {
    transform: scale(0.8);
    top: -360px;
    position: relative;
  }

  .list-group-item {
    transform: scale(0.8);
    /* top: -360px; */
    position: relative;
  }

  .leaveAndOk {
    height: 25% !important;
  }
}
@keyframes translateIcon {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(50px);
  }

  100% {
    transform: translateY(0px);
  }
}
@media screen and (min-height: 1400px) and (max-height: 1980px) {
  .categoryheader {
    height: 5%;
  }

  .category1Name {
    height: 5%;
  }

  .myorder {
    height: 20%;
  }
}
</style>