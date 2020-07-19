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
          <p>{{this.$route.query.name}}</p>
          <!-- <el-button>特别要求</el-button> -->
          <ul>
            <li v-for="(item,index) in attrButeDetails" :key="index">
              <span>{{item.name}}</span>
              <span>*{{item.num}}</span>
            </li>
          </ul>
        </div>
        <div
          class="col-md-3 price"
          style="font-size:30px"
        >总金额 ￥{{this.$route.query.price||40+totalAmount}}</div>
      </div>
    </div>

    <AttriButeLayout />
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
      attrButeDetails: [],
      totalAmount: 0
    }
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch('reqMenumodInfo')
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
    })
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