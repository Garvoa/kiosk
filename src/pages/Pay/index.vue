<template>
  <div class="paywrap">
    <div class="logo">
      <img src="../../img/logo.png" alt />
    </div>

    <div class="tranfromPay" ref="tranfromPay">
      <div class="payType row">
        <div class="payTypeTop">
          <p>请选择付款方式</p>
          <p>付款金额：￥{{totalPrice}}</p>
        </div>
        <div class="payTypeList">
          <div
            class="col-md-12 payItem"
            @click="tranlatePay(item,index)"
            v-for="(item,index) in arr"
            :key="index"
            :style="{backgroundColor:item.color}"
          >
            <img :src="item.img" alt />
          </div>
        </div>
      </div>
      <div class="payIng">
        <p>{{item.msg}}</p>
        <img style="width:70%" :src="item.img" alt />
        <div class="payWalkingLanternWrap">
          <div class="payWalkingLantern"></div>
        </div>
        <p class="payPrice">付款金额：￥{{totalPrice}}</p>
      </div>
      <div class="payDetails">
        <p>你的订单已发送</p>
        <p>请拿好号码牌就座</p>
        <div class="oddNumbers">
          <span>单号：xxxx</span>
          <span>送餐号码：xxxx</span>
        </div>
      </div>
    </div>

    <div class="payBottom">
      <el-button type="danger" round @click="toOrderdetails">{{state}}</el-button>
    </div>
  </div>
</template>
<script>
import { getPay, getPayOrder } from '../../api'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'pay',
  components: {},
  mounted() {
    console.log(process.env.NODE_ENV)
    let payWalkingLantern = $('.payWalkingLantern')[0]
    setInterval(() => {
      this.flag++
      if (this.flag == 300) {
        this.flag = 0
      }

      payWalkingLantern.style.transform = `translateX(${-this.flag}px)`
    }, 1000 / 60)
    this.$refs.tranfromPay.style.transform = `translateX(${
      -this.translateX - 5
    }px)`
  },
  data() {
    return {
      translateX: 0,
      flag: 0,
      arr: [
        {
          msg: '请扫描您的手机上的支付宝支付条款付款',
          img: `${
            process.env.NODE_ENV === 'development'
              ? 'http://192.168.5.4:8081'
              : ''
          }img/alipay_logo.png`,
          color: '#ffffff',
        },
        {
          msg: '请扫描您的手机上的微信支付条款付款',
          img: `${
            process.env.NODE_ENV === 'development'
              ? 'http://192.168.5.4:8081'
              : ''
          }img/p6_053.png`,
          color: '#22AC38',
        },
        {
          msg: '请使用visa信用卡支付',
          img: `${
            process.env.NODE_ENV === 'development'
              ? 'http://192.168.5.4:8081'
              : ''
          }img/Visa_card.png`,
          color: '#00a516',
        },
        {
          msg: '请使用八达通刷卡支付',
          img: `${
            process.env.NODE_ENV === 'development'
              ? 'http://192.168.5.4:8081'
              : ''
          }img/p6_031.png`,
          color: '#e17a4d',
        },
      ],
      item: {},
      state: '返回',
    }
  },
  methods: {
    toOrderdetails() {
      if (this.state === '离开') {
        new Promise((relove, reject) => {
          relove(this.$store.commit('DELETEATTRBUTEDETALSLIST'))
          ;(this.translateX = 0), (this.flag = 0), (this.state = '返回')
          window.localStorage.removeItem('type')
          window.localStorage.removeItem('item')
          window.localStorage.removeItem('follow')
          window.localStorage.removeItem('attrButeDetailsList')
        }).then(() => {
          this.$router.push({ path: '/' })
          window.location.reload()
        })

        return
      } else if (this.translateX !== 0) {
        this.translateX = 0
        this.$refs.tranfromPay.style.transform = `translateX(${-this
          .translateX}px)`
      } else {
        this.$router.go(-1)
      }
    },

    tranlatePay(item, index) {
      this.item = item
      this.translateX = this.$refs.tranfromPay.offsetWidth / 3
      console.log(this.paydetail, 111)
      let paypagedetailList = {
        ...this.paydetail.paydetail.paypagedetailList[index],
        orderid: this.paydetail.orderId,
        total: this.totalPrice,
      }

      getPayOrder(paypagedetailList).then((res) => {
        if (res.code === 200) {
          this.$refs.tranfromPay.style.transform = `translateX(${
            -this.translateX + 10
          }px)`

          setTimeout(() => {
            this.$refs.tranfromPay.style.transform = `translateX(${
              -this.translateX * 2 + 15
            }px)`
            this.state = '离开'
          }, 1000)
        }
      })
    },
  },
  computed: {
    ...mapGetters(['totalPrice']),
    ...mapState({
      paydetail: (state) => state.pay.paydetail,
    }),
  },
}
</script>
<style lang="less" >
.paywrap {
  overflow: hidden;
}
.logo {
  width: 100%;
  padding: 50px;
  text-align: center;
  img {
    width: 100%;
  }
}
.tranfromPay {
  display: flex;
  position: relative;
  width: 300%;
  height: 60%;
  max-height: 70%;
  justify-content: space-evenly;
  transition: all 0.2888s ease;
  transform: translate3d(0, 0, 0);

  .payIng {
    width: 32%;
    position: relative;
    overflow: hidden;

    border-radius: 30px;
    p {
      margin: 60px 0px;
      font-size: 50px;
    }
    text-align: center;
    .payPrice {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
    .payWalkingLanternWrap {
      width: 700px;
      height: 50px;
      border: 1px solid;

      overflow: hidden;
      position: absolute;
      margin: auto;
      right: 0px;
      left: 0px;
      bottom: 200px;
    }
    .payWalkingLantern {
      width: 1000px;
      height: 50px;
      background: repeating-linear-gradient(
        135deg,
        black 0px,
        black 10px,
        white 10px,
        white 20px
      );
    }
  }
  .payDetails {
    width: 32%;

    border-radius: 30px;
    padding-top: 100px;
    p {
      font-size: 50px;
    }
    span {
      font-size: 30px;
      display: block;
    }
    .oddNumbers {
      margin: 100px 0px;
    }
  }
  text-align: center;
}
.payType {
  width: 32%;
  border: 1px solid #000;
  // margin: 0 auto;
  background-color: #fffacd;
  border-radius: 30px;
  padding-bottom: 20px;
  padding: 10px;
  .payTypeList {
    height: 100%;
    .payItem {
      margin-top: 30px;
      border: 1px solid #000;
      border-radius: 30px;
      // background-color: #00ced1;
      // width: 100%;
      // height: 100%;
      img {
        // height: 20%;
      }
    }
  }
  .payTypeTop {
    margin-bottom: 10px;
    // background-color: #dddddd;
    width: 100%;
    float: left;
    // border-bottom: 1px solid #000;
  }
  p {
    font-size: 50px;
    font-weight: 700;
  }
  img {
    height: 200px;
  }
}
.payBottom {
  width: 100%;
  height: 20%;
  text-align: center;
  margin-top: 20px;
  position: absolute;
  bottom: 0px;
  button {
    width: 50%;
    height: 30%;
    font-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>