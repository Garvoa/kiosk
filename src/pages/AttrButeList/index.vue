<!--  -->
<template>
  <div class="attrButeList" ref="attrButeList">
    <div class="attrButehead">
      <div class="attrButeListhead">请选择套餐项目</div>
      <div class="row entree">
        <div class="col-md-5 foodImg">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=319246966,2664500099&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="col-md-7 foodName">
          <p>{{$route.query.item?$route.query.item.mainFood:$route.query.name}}</p>
          <!-- <el-button>特别要求</el-button> -->
          <ul>
            <li v-for="(item,index) in attrButeDetails" :key="index">
              <span>{{item.name}}</span>
              <span>*{{item.num}}</span>
            </li>
          </ul>
        </div>
        <div class="col-md-3 price" style="font-size:30px">
          总金额 ￥{{$route.query.item
          ? $route.query.item.totalAmount+totalAmount:$route.query.price+totalAmount}}
        </div>
      </div>
    </div>

    <AttriButeLayout :attrButeDetails="attrButeDetails" />
  </div>
</template>

<script>
import AttriButeLayout from '../../layout'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'attributelist',
  components: {
    AttriButeLayout
  },
  data() {
    return {
      totalAmount: 0,
      attrButeDetails: []
    }
  },
  methods: {
    reset() {
      this.totalAmount = 0
      this.attrButeDetails = []
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.attrButeDetails = this.$route.query.item
      ? this.$route.query.item.attrButeDetails
      : []
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // this.$store.dispatch('reqMenumodInfo')
    this.$bus.$on('addAndDEL', attrObj => {
      let flag = false
      let attrIndex
      let price = 0
      if (this.attrButeDetails.length > 0) {
        this.attrButeDetails.forEach((item, index) => {
          if (item.name === attrObj.name) {
            attrIndex = index
            flag = true
          }
        })
      }
      if (flag && this.attrButeDetails.length > 0) {
        this.attrButeDetails[attrIndex].num = attrObj.num
      } else {
        this.attrButeDetails.push(attrObj)
      }
      this.attrButeDetails = this.attrButeDetails.filter((item, index) => {
        price += item.num * item.price
        return item.num !== 0
      })

      this.totalAmount = price
      if (this.$store.state.attrBute.isAdd) {
        window.localStorage.setItem(
          'attrButeDetailsList',
          JSON.stringify({
            totalAmount: this.totalAmount + this.$route.query.price,
            attrButeDetails: this.attrButeDetails,
            mainFood: this.$route.query.name,
            mainFoodPrice: this.$route.query.price,
            num: 1,
            id: parseInt(Date.now() / 20202020)
          })
        )
      } else {
        window.localStorage.setItem(
          'attrButeDetailsList',
          JSON.stringify({
            totalAmount: this.totalAmount + this.$route.query.item.totalAmount,
            attrButeDetails: this.attrButeDetails,
            mainFood: this.$route.query.item.mainFood,
            mainFoodPrice: this.$route.query.item.mainFoodPrice,
            num: this.$route.query.item.num,
            id: this.$route.query.item.id
          })
        )
      }
    })
    console.log(this.$store.state.attrBute.isAdd)
    if (this.$store.state.attrBute.isAdd) {
      window.localStorage.setItem(
        'attrButeDetailsList',
        JSON.stringify({
          totalAmount: this.totalAmount + this.$route.query.price,
          attrButeDetails: this.attrButeDetails,
          mainFood: this.$route.query.name,
          mainFoodPrice: this.$route.query.price,
          num: 1,
          id: ''
        })
      )
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.path === '/orderdetails') {
      next(vm => {
        vm.$store.state.attrBute.isAdd = false
      })
    } else {
      next(vm => {
        vm.$store.state.attrBute.isAdd = true
      })
    }
  }
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
    .attrButeListhead {
      text-align: center;
      // height: 5%;
      padding: 1%;
      box-sizing: border-box;
      background-color: rgb(255, 215, 0);
      margin-bottom: 20px;
      border-radius: 20px;
    }
    .entree {
      position: relative;
      height: 300px;
      overflow: auto;
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
        height: 100%;
        position: relative;
        button {
          font-size: 30px;
          position: absolute;
          bottom: 0;
        }
        span {
          display: inline-block;
          margin: 0px 20px;
        }
        li {
          font-size: 30px;
        }
      }
      .price {
        position: absolute;
        right: 5%;
        bottom: 0;
        padding-right: 10px;
        text-align: right;
      }
    }
  }
}

/* @import url(); 引入css类 */
</style>