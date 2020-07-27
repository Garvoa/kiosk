<template>
  <div class="SelectAttributes">
    <div
      class="item"
      :class="{active:isClose===attrIndex}"
      v-for="(attrBute,attrIndex) in getModifiersList"
      :key="attrBute.id"
    >
      <div class="centent">
        <slot name="centent" :attrBute="attrBute"></slot>
      </div>
      <div class="config" @click="openAndClose(attrIndex)">
        <slot name="config"></slot>
      </div>

      <div class="wrap" :attrIndex="attrIndex">
        <slot name="wrap"></slot>
      </div>
      <slot name="icon" :attrIndex="attrIndex"></slot>
    </div>
    <slot name="AttributeModule"></slot>
  </div>
</template>
<script>
import LayoutMixin from '../mixin'

import { mapState } from 'vuex'
export default {
  props: {
    addAttribute: Function
  },
  mixins: [LayoutMixin],
  data() {
    return {
      attrBute1: { name: 'fafasa' }
    }
  },
  mounted() {},
  methods: {
    openAttributeModule() {
      this.$refs.AttributeModule.isShowAttributeInner(1)
    }
  }
}
</script>
<style lang="less" scoped>
.configlist {
  li {
    margin: 0;
  }
  .itemAttriBute {
    font-size: 30px;
    text-align: center;

    margin-bottom: 10px;
    p {
      border: 1px solid #000;
      border-radius: 10px;
      padding: 10px;
    }
  }
}
.SelectAttributes {
  height: 50%;

  .item {
    width: 100%;
    border: 1px solid #20b2aa;
    border-radius: 10px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    text-align: left;
    .centent {
      padding: 10px 10px;
      background-color: #20b2aa;

      .severalItems {
        float: right;
      }
    }
    .config {
      padding: 10px 10px;
    }
    .wrap {
      max-height: 650px;
      transition: 0.3s;
      padding: 10px;
      margin-bottom: 20px;
      opacity: 1;
      position: relative;
      width: 100%;
      overflow: auto;

      .configlist {
        width: 98%;
        margin: 0;
        .slide {
          text-align: center;
          margin-bottom: 20px;
          padding: 0px 10px;
          div {
            border-radius: 10px;
            border: 1px solid #000;
            .isactive {
              background-color: greenyellow;
            }

            p {
              margin: 0;
              padding: 5px;
              span {
                font-size: 30px;
              }
              .price {
                color: red;
                font-weight: 600;
              }
              .number {
                display: inline-block;
                margin: 0px 10px;
                font-size: 40px;
              }
              i {
                font-size: 40px;
              }
            }
            img {
              width: 100%;
              height: 150px;
              object-fit: cover;
            }
          }
        }
      }
    }
    .icon {
      position: absolute;
      right: -25px;
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
  .active {
    border: 1px solid #ffd700;
    .centent {
      background-color: #ffd700;
    }
  }
  .determine {
    position: absolute;
    width: 100%;
    left: 0px;
    right: 0px;
    bottom: 20px;
    margin: auto;
    text-align: center;
    button {
      width: 30%;
      font-size: 30px;
      padding: 25px;
      margin: 20px;
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