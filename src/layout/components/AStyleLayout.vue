<template>
  <div class="SelectAttributes">
    <div
      class="item"
      :class="{active:isClose===attrIndex}"
      v-for="(attrBute,attrIndex) in attrButeList"
      :key="attrBute.id"
    >
      <div class="centent">
        <span class="attributeName">{{attrBute.name}}</span>
        <span class="severalItems">请选择1项</span>
      </div>
      <div class="config" @click="openAndClose(attrIndex)">
        <i class="el-icon-circle-plus"></i>
        选择加配
      </div>
      <div class="wrap" :class="{close:isClose!==attrIndex}">
        <ul class="row configlist">
          <li
            class="slide col-md-4"
            v-for="(item,index) in attrBute.list"
            :key="index"
            @click="openAttributeModule"
          >
            <img :src="item.img" alt />

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
          </li>
        </ul>
      </div>
      <div class="icon" :class="{isShow:isShowIcon,close:isClose!==attrIndex}">
        <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
    <div class="determine">
      <el-button type="danger" round @click="signOut">退出</el-button>
      <el-button type="success" round @click="toOrderdetails">确定</el-button>
    </div>
    <AttributeModule ref="AttributeModule" />
    <!-- <div class="item" :class="{active:isClose===1}">
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
  <foldAttriBute>
    <template slot="centent" slot-scope="{attrBute}">
      <span class="attributeName">{{attrBute.name}}</span>
      <span class="severalItems">请选择1项</span>
    </template>
    <template slot="config">
      <i class="el-icon-circle-plus"></i>
      选择加配
    </template>
    <template slot="wrap">
      <ul class="row configlist">
        <li
          class="slide col-md-4"
          v-for="(item,index) in 10"
          :key="index"
          @click="openAttributeModule"
        >
          <img :src="item.img" alt />

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
        </li>
      </ul>
    </template>

    <template slot="icon" slot-scope="attrIndex">
      <div class="icon" :class="{isShow:isShowIcon,close:isClose!==attrIndex}">
        <i class="el-icon-d-arrow-right"></i>
      </div>
    </template>
    <template slot="AttributeModule">
      <AttributeModule ref="AttributeModule" />
    </template>
    </foldAttriBute>-->
  </div>
</template>
<script>
// import foldAttriBute from './foldAttriBute'

import LayoutMixin from '../mixin'
import AttributeModule from './AttributeModule/AttributeModule'
import '../css/layout.less'
import { mapState } from 'vuex'
export default {
  // name: 'astyleLayout',
  components: { AttributeModule },
  // props: { totalAmount, attrButeDetails },
  mixins: [LayoutMixin],
  props: { attrButeDetails: Array },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    openAttributeModule() {
      this.$refs.AttributeModule.isShowAttributeInner(1)
    },
    signOut() {
      console.log(1)
      this.$router.go(-1)
    },
    toOrderdetails() {
      console.log(this.$store.state.attrBute.isAdd)
      if (this.$store.state.attrBute.isAdd) {
        this.$store.commit(
          'UPDATE_ATTRBUTEDETALSLIST',
          JSON.parse(window.localStorage.getItem('attrButeDetailsList'))
        )
      } else {
        console.log(
          JSON.parse(window.localStorage.getItem('attrButeDetailsList'))
        )
        this.$store.commit(
          'MODIFYATTRBUTEDETALSITEM',
          JSON.parse(window.localStorage.getItem('attrButeDetailsList'))
        )
      }

      this.$router.replace({
        path: '/categoryList'
        // query: {
        //   totalAmount: this.totalAmount + this.$route.query.price,
        //   attrButeDetails: this.attrButeDetails
        // }
      })
      //   this.$store.commit('UPDATE_ATTRBUTEDETALSLIST', {
      //     totalAmount: this.totalAmount + this.$route.query.price,
      //     attrButeDetails: this.attrButeDetails
      //   })
      //   this.$router.replace({
      //     path: '/categoryList'
      //   })
    }
  }
}
</script>
<style lang="less">
</style>