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
      >重新點單</el-button>
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
              :class="{active1:active===index}"
              @click="isActive(index,item.name)"
              v-for="(item,index) in  arr"
              :key="index"
            >
              <img :src="item.src" alt />
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="col-md-9 right">
          <p class="category1Name">{{name}}</p>

          <div id="wrapperRight">
            <div class="wrapperOuter">
              <ul ref="rowRight" class="rowRight">
                <li ref="item0">
                  <div
                    class="col-md-4 rightlist"
                    v-for="(item,index) in 20"
                    :key="index"
                    @click="toAttriButeList"
                  >
                    <div class="item">
                      <img
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594382405955&di=7a062ff045b2ebb222e302a043b31bbe&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190519%2Fe5dc5d755d0643819c09dc40e67b5a80.jpeg"
                        alt
                      />
                      <p>
                        <span>猪扒饭</span>
                        <span style="display:block">￥180</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li ref="item1">
                  <div class="col-md-4 rightlist" v-for="(item,index) in 20" :key="index">
                    <div class="item">
                      <img
                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1623532870,314241626&fm=26&gp=0.jpg"
                        alt
                      />
                      <p>
                        <span>牛扒饭</span>
                        <span style="display:block">￥200</span>
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
    <div class="myorder">
      <div class="myorderhead">我的订单（堂食）</div>

      <!-- <table class="table table-striped">
          <thead>
            <tr>
              <th>菜品</th>
              <th>数量</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tanmay</td>
              <td>Bangalore</td>
              <td>111</td>
            </tr>
            <tr>
              <td>Sachin</td>
              <td>Mumbai</td>
              <td>111</td>
            </tr>
          </tbody>
      </table>-->
      <div class="row centent">
        <div class="col-md-4">订单内容</div>
        <div class="col-md-4">0件</div>
        <div class="col-md-4">￥0.00</div>
      </div>

      <div class="leaveAndOk">
        <el-button type="warning" round>确定订单</el-button>
        <el-button type="danger" round>离开</el-button>
      </div>
    </div>
    <!-- 模态框 -->
    <div class="demo" style="min-height: 550px;">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="modal-box">
              <!-- Button trigger modal -->
              <!-- Modal -->
              <div
                class="modal fade"
                id="myModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                ref="myModalLabel"
              >
                <div class="modal-dialog" role="document" style=" width: 50%;">
                  <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body">
                      <div class="icon">!</div>
                      <h3 class="title">提示!</h3>
                      <p class="description">您确定要取消订餐吗？</p>
                      <div class="signout">
                        <button class="subscribe" data-dismiss="modal">确定</button>
                        <button class="subscribe" data-dismiss="modal">取消</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IScroll from 'iscroll/build/iscroll-probe'
import Rotation from '../../components/Rotation'
export default {
  components: { Rotation },
  name: 'categoryList',
  data() {
    return {
      time: this.$moment().format('LTS'), //时间
      hour: '', //时辰
      active: 0,
      scrollFlag: false,
      iscrollRight: null,
      name: '老猪肘饭', //大类标题
      arr: [
        {
          src:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=267745403,3446800744&fm=26&gp=0.jpg',
          name: '老猪肘饭'
        },
        {
          src:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1623532870,314241626&fm=26&gp=0.jpg',
          name: '牛扒豆腐饭'
        },
        {
          src:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1381169593,1815594047&fm=26&gp=0.jpg',
          name: '爆炒榴莲'
        },
        {
          src:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1844127766,1762333748&fm=26&gp=0.jpg',
          name: '清蒸红烧肉'
        },
        {
          src:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1381169593,1815594047&fm=26&gp=0.jpg',
          name: '水煮鱼饭'
        },
        {
          src:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594375761686&di=08c6c9d53983afe7f3255a100f2bd82e&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F24%2F26%2F33%2Fpic_lib%2Fwm%2F004.jpg',
          name: '金牌精選'
        }
      ]
    }
  },
  mounted() {
    this.date()

    //滚动条
    this.$nextTick(() => {
      this.iscroll = new IScroll('#wrapper', {
        mouseWheel: true,
        scrollbars: 'custom',
        scrollY: true,
        interactiveScrollbars: true,
        startY: 0
      })
      this.iscrollRight = new IScroll('#wrapperRight', {
        mouseWheel: true,
        scrollbars: 'custom',
        scrollY: true,

        startY: 0,
        probeType: 3,
        mouseWheel: true
      })
      this.iscrollRight.on('scroll', () => {
        if (!this.$refs.item1) return

        if (this.scrollFlag) return
        if (this.iscrollRight.y > -this.$refs.item1.offsetTop * 0.5) {
          this.active = 0
        } else if (this.iscrollRight.y <= -this.$refs.item1.offsetTop) {
          this.name = 1
          this.active = 1
        }
      })
      this.iscrollRight.on('scrollEnd', () => {
        if (!this.scrollFlag) return
        this.iscrollRight.scrollTo(0, this.iscrollRight.$offsetTop, 500)
      })
      this.iscrollRight.on('beforeScrollStart', () => {
        this.scrollFlag = false
      })
      this.iscrollRight.on('scrollCancel', () => {
        console.log(1)
      })
    })
  },
  activated() {
    this.date()
  },
  deactivated() {
    this.timer = null
  },
  methods: {
    date() {
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
      const offsetTop = -this.$refs[`item${index}`].offsetTop
      this.iscrollRight.$offsetTop = offsetTop

      this.iscrollRight.scrollTo(0, offsetTop, 500)
      this.active = index
      this.name = name
    },
    //路由跳转
    toAttriButeList() {
      this.$router.push({ path: '/attributelist' })
    }
  }
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
  // padding: 2%;
  position: relative;
  background-color: #e6a23c;
  // height: 5%;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .reelection {
    height: 70%;
    position: absolute;
    top: 15%;
    right: 2%;
    font-size: 30px;
    font-weight: 600;
  }
}
section {
  height: 55%;
  text-align: right;
  overflow: hidden;
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
        // height: 2000px;
        .list-group-item {
          margin: 0px 0px 20px 0px;
          width: 90%;
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
        height: 1034px;
        overflow: hidden;
        position: relative;
      }
      .rowRight {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        min-width: 100%;
        padding: 0;
      }

      .rightlist {
        padding: 0;
        display: flex;
        justify-content: center;
        // background-color: #acabaa;
      }
      .item {
        width: 90%;
        padding: 5%, 0%;
        margin-bottom: 10%;
        border-radius: 5%;
        background-color: #acabaa;
        text-align: center;
        img {
          border-radius: 5%;
          width: 100%;
        }
      }
    }
    text-align: center;
    .category1Name {
      width: 90%;
      background-color: #acabaa;
      box-sizing: content-box;
      border-radius: 10px;
      display: inline-block;
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
    background: linear-gradient(to bottom, #acabaa 0%, #ffffff 100%);
  }
}
.demo {
  top: 0;
  position: absolute;
  // z-index: -1;
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

    height: 20%;
    padding: 10px;
    background-color: chocolate;
  }
  .centent {
    height: 55%;
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
    height: 20%;
    button {
      width: 35%;
      height: 100%;
      font-size: 30px;
      margin: 0;
      &:nth-last-child(2) {
        float: right;
        // border-radius: 50% 50% 0 0 0 0 50% 50%;
      }
    }
  }
}

.modal-dialog {
  margin: 200px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.modal-dialog .modal-content {
  width: 550px;
}

.modal-dialog .modal-content .modal-body .description {
  font-size: 40px !important;
  font-weight: 700 !important;
}
.modal-dialog .modal-content .modal-body .subscribe {
  width: 200px;
  height: 70px;
  font-size: 30px;
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