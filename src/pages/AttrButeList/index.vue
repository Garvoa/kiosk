<!--  -->
<template>
  <div class="attrButeList" ref="attrButeList">
    <div class="attrButehead">
      <div class="attrButeListhead">请选择套餐项目</div>
      <!-- 点餐详情区域 -->
      <div class="row entree">
        <div class="col-md-4 foodImg">
          <img
            :src="$route.query.img?`http://192.168.5.3:8080/static/images/item/${$route.query.img}`:'../../img/no07.jpg'"
            alt
          />
        </div>
        <div class="mainfood">{{$route.query.item?$route.query.item.mainFood:$route.query.name}}</div>
        <div class="col-md-8 foodName">
          <!-- <el-button>特别要求</el-button> -->
          <ul class="attrButeDetailsList row">
            <li v-for="(item,index) in attrButeDetails" :key="index">
              <span class="col-md-6">{{item.name}}</span>
              <span class="col-md-2">*{{item.num}}</span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 price" style="font-size:30px">
          总金额 ￥{{$route.query.item
          ? $route.query.item.totalAmount*1+totalAmount:$route.query.price*1+totalAmount}}
        </div>
      </div>
      <div class="icon" :class="{isShow:isHideIcon}">
        <i class="el-icon-d-arrow-right"></i>
        <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
    <!-- 风格设置，选择配菜区域 -->
    <AttriButeLayout :attrButeDetails="attrButeDetails" />
  </div>
</template>

<script>
import AttriButeLayout from '../../layout'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'attributelist',
  components: {
    AttriButeLayout,
  },
  data() {
    return {
      totalAmount: 0, //总价格
      attrButeDetails: [], // //属性列表
      isHideIcon: true, //是否显示icon图标
      id: parseInt(
        Date.now() / Math.floor(Math.random() * 20202020 + 20212021)
      ), //唯一的配菜id
    }
  },
  methods: {
    //重置
    reset() {
      this.totalAmount = 0 //总价格
      this.attrButeDetails = [] //属性列表
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.reset()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    //添加或者修改属性
    this.$bus.$on('addAndDEL', (attrObj) => {
      let flag = false
      let attrIndex
      let price = 0
      //过滤，如果传过来的对象的maxsel最大值等于1，说明只能选一个，需要把之前选过的过滤掉
      if (attrObj.maxsel === 1) {
        this.attrButeDetails = this.attrButeDetails.filter(
          (item, index, arr) => {
            if (item.maxsel !== 1 && item.modid !== attrObj.modid) {
              return item
            }
          }
        )
      }
      //如果当长度大于0的时候 设置开关，并且获取到对应的下标，说明此时这个数组中和attrObj这个对象有相同的，我们不添加重复，而是改变它的数量
      if (this.attrButeDetails.length > 0) {
        this.attrButeDetails.forEach((item, index) => {
          if (item.name === attrObj.name) {
            attrIndex = index
            flag = true
          }
        })
      }
      // 当条件满足的情况下，说明只加数量，不满足的话就插入一个新的对象
      if (flag && this.attrButeDetails.length > 0) {
        this.attrButeDetails[attrIndex].num = attrObj.num
      } else {
        this.attrButeDetails.push(attrObj)
      }

      //过滤，加上总价格
      this.attrButeDetails = this.attrButeDetails.filter((item, index) => {
        price += item.num * item.price
        if (attrObj.isActive !== undefined && !attrObj.isActive) {
          return item.name !== attrObj.name
        } else {
          return item.num !== 0
        }
      })

      this.totalAmount = price

      //有query参数说明是新添加的，没有id默认生成一个新的id
      if (!this.$route.query.item) {
        window.localStorage.setItem(
          'attrButeDetailsList',
          JSON.stringify({
            totalAmount: this.totalAmount + this.$route.query.price, //总价格
            attrButeDetails: this.attrButeDetails, //配菜数组
            mainFood: this.$route.query.name, //主菜的名称
            mainFoodPrice: this.$route.query.price, // 主菜的价格
            num: 1, //总数量默认
            id: this.id, //生成的随机id
            searchData: this.$route.query.searchData,
            orderitemhisItem: this.$route.query.orderitemhisItem, //主菜对象
            ordermodhisItem: attrObj.ordermodhisItem, //配菜对象
          })
        )
      } else {
        //没有说明是修改的，修改的是有自己的id
        window.localStorage.setItem(
          'attrButeDetailsList',
          JSON.stringify({
            totalAmount: this.totalAmount + this.$route.query.item.totalAmount,
            attrButeDetails: this.attrButeDetails,
            mainFood: this.$route.query.item.mainFood,
            mainFoodPrice: this.$route.query.item.mainFoodPrice,
            num: this.$route.query.item.num,
            id: this.$route.query.item.id,
            searchData: this.$route.query.item.searchData,
            orderitemhisItem: this.$route.query.item.orderitemhisItem,
            ordermodhisItem: attrObj.ordermodhisItem,
          })
        )
      }
    })
  },
  //路由守卫，如果上一次路由来自订单详情页，发送请求请求当前的属性页，数据回显，如果不是默认初始化数据
  beforeRouteEnter(to, from, next) {
    if (from.path === '/orderdetails') {
      next((vm) => {
        vm.$store
          .dispatch('reqMenumodInfo', vm.$route.query.item.searchData)
          .then((result) => {
            if (result.code === 200) {
              const { modifiers } = result.data
              vm.$route.query.item.attrButeDetails.map((attrBute) => {
                if (attrBute.num) {
                  result.data.modifiers[attrBute.page].moddetails[
                    attrBute.index
                  ].num = attrBute.num
                } else if (attrBute.isActive) {
                  result.data.modifiers[attrBute.page].moddetails[
                    attrBute.index
                  ].isActive = attrBute.isActive
                }
              })

              vm.$store.commit('UPDATE_MENUMOND_ONFO', result.data)
            }
          })

        vm.attrButeDetails = vm.$route.query.item.attrButeDetails
      })
    } else {
      next((vm) => {
        vm.id = parseInt(
          Date.now() / Math.floor(Math.random() * 20202020 + 20212021)
        )

        window.localStorage.setItem(
          'attrButeDetailsList',
          JSON.stringify({
            totalAmount: vm.totalAmount + vm.$route.query.price,
            attrButeDetails: vm.attrButeDetails,
            mainFood: vm.$route.query.name,
            mainFoodPrice: vm.$route.query.price,
            num: 1,
            id: vm.id,
            searchData: vm.$route.query.searchData,
            orderitemhisItem: vm.$route.query.orderitemhisItem,
            ordermodhisItem: vm.$route.query.ordermodhisItem,
          })
        )
      })
    }
  },
  computed: {
    ...mapGetters(['getModifiersList']),
  },
  watch: {
    //icon图标显示隐藏
    attrButeDetails() {
      this.$nextTick(() => {
        if (
          $('.foodName')[0].clientHeight <
          $('.attrButeDetailsList')[0].offsetHeight
        ) {
          this.isHideIcon = false
        } else {
          this.isHideIcon = true
        }
        console.log(
          $('.foodName')[0].clientHeight,
          $('.attrButeDetailsList')[0].offsetHeight
        )
      })
    },
  },
  beforeRouteLeave(to, from, next) {
    // this.reset()
    this.$destroy()
    next()
  },
  beforeDestroy() {
    this.$bus.$off('addAndDEL')
  },
}
</script>
<style lang="less">
.attrButeList {
  box-sizing: border-box;
  padding: 3%;
  width: 100%;
  height: 100%;
  transition: 0.2s;
  .attrButehead {
    float: left;
    width: 100%;
    position: relative;
    width: 100%;
    margin: 0 auto;
    .attrButeListhead {
      text-align: center;
      // height: 5%;
      font-size: 30px;
      padding: 1%;
      box-sizing: border-box;
      background-color: rgb(255, 215, 0);
      margin-bottom: 20px;
      border-radius: 20px;
    }
    .entree {
      position: relative;
      height: 300px;
      // overflow: auto;
      border: 1px solid #000;
      padding: 15px 0px;
      border-radius: 10px;
      margin: 0;
      .foodImg {
        height: 100%;
        border-radius: 5%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5%;
        }
      }
      .foodName {
        height: 80%;
        // position: relative;
        overflow: auto;
        .attrButeDetailsList {
          margin: 0;
        }
        button {
          font-size: 30px;
          position: absolute;
          bottom: 0;
        }

        li {
          font-size: 30px;
        }
      }
      .price {
        position: absolute;
        right: 15px;
        top: 15px;
        // bottom: 15px;
        padding-right: 10px;
        text-align: right;
        color: red;
        font-weight: 700;
      }
      .mainfood {
        // position: absolute;
        font-size: 30px;
        float: left;
        height: 20%;
        // left: 0px;
        // right: 0px;
        // top: 15px;
        // bottom: 0px;
        // margin: auto;
        // width: 10%;
        // width: 10%;
      }
    }
    .icon {
      position: absolute;
      right: 0px;
      bottom: 40%;
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
/* @import url(); 引入css类 */
</style>