<template>
  <div class="SelectAttributes">
    <div
      class="item"
      :class="{active:isClose===attrIndex}"
      v-for="(attrBute,attrIndex) in getModifiersList"
      :key="attrBute.id"
    >
      <div class="centent">
        <span class="attributeName">{{attrBute.name}}</span>
        <span class="severalItems">
          <span class="severalItems">请选择{{attrBute.minsel+'-'+attrBute.maxsel}}项</span>
        </span>
      </div>
      <!-- @click="openAndClose(attrIndex)" -->
      <div class="config" @click="openAndClose(attrIndex)">
        <i class="el-icon-circle-plus"></i>
        选择加配
      </div>
      <div class="wrap" :class="{close:isClose!==attrIndex}">
        <ul class="row configlist">
          <li class="slide col-md-4" v-for="(item,index) in attrBute.moddetails" :key="index">
            <div
              @click="openAttributeModule(item),addAttrBute($event,item,attrBute.maxsel===1?'1':'+',attrIndex,index,attrBute)"
              :style="{border:item.img?'none':'',backgroundColor:item.num>0?'greenyellow':'transparent'}"
            >
              <img :src="item.img" alt v-if="item.img" />
              <p
                @click="item.moditem.menuitem?'':addAttrBute($event,item,'',attrIndex,index,attrBute)"
                class="menuitemName"
                :class="{isactive:item.isActive}"
              >
                <span>{{item.moditem.name}}</span>
              </p>
              <p
                v-if="item.moditem.menuitem&&attrBute.maxsel!==1&& item.num>0?true:false"
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
                v-if="item.moditem&&item.moditem.menuitem"
              >￥{{item.moditem&&item.moditem.menuitem?item.moditem.menuitem.price1:'0'}}</span>
              <!-- showNum(attrIndex) -->
            </div>
          </li>
        </ul>
      </div>
      <div class="icon" :class="{isShow:isShowIcon,close:isClose!==attrIndex}">
        <i class="el-icon-d-arrow-right"></i>
        <i class="el-icon-d-arrow-right"></i>
      </div>
    </div>
    <div class="determine">
      <el-button type="danger" round @click="signOut">退出</el-button>
      <el-button type="success" round @click="toOrderdetails">确定</el-button>
    </div>
    <AttributeModule ref="AttributeModule" />

    <!-- <foldAttriBute>
    <template slot="centent" slot-scope="{attrBute}">
      <span class="attributeName">{{attrBute.name}}</span>
      <span class="severalItems">请选择1项</span>
    </template>
    <template slot="config" >
      <i class="el-icon-circle-plus"></i>
      选择加配
    </template>
    <template slot="wrap" slot-scope="{attrIndex}">

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
import { mapGetters } from 'vuex'
import LayoutMixin from '../mixin'
import AttributeModule from './AttributeModule/AttributeModule'
import { mapState } from 'vuex'
export default {
  // name: 'astyleLayout',
  components: { AttributeModule },
  mixins: [LayoutMixin],
  data() {
    return {}
  },
  mounted() {
    this.addEventIcon()
  },
  methods: {
    openAttributeModule(item) {
      return
      this.$refs.AttributeModule.isShowAttributeInner(item)
    },
    signOut() {
      this.$router.go(-1)
    },
    addEventIcon() {
      $('.wrap').each((index, item) => {
        item.addEventListener('scroll', () => {
          if (
            item.scrollTop >
            $('.configlist')[index].offsetHeight - item.clientHeight - 10
          ) {
            this.isShowIcon = true
          } else {
            this.isShowIcon = false
          }
        })
      })
    },
    openAndClose(index) {
      this.isClose = index
      setTimeout(() => {
        if (
          $('.wrap')[index].scrollTop >
          $('.configlist')[index].offsetHeight - $('.wrap')[index].clientHeight
        ) {
          this.isShowIcon = true
        } else {
          this.isShowIcon = false
        }
      }, 300)
    },
  },
}
</script>
<style lang="less">
.SelectAttributes {
  // height: 50%;

  .item {
    width: 100%;
    border: 1px solid #20b2aa;
    border-radius: 10px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    text-align: left;
    .centent {
      padding: 5px 10px;
      background-color: #20b2aa;
      .attributeName {
        font-size: 30px;
      }
      .severalItems {
        float: right;
        font-size: 25px;
      }
    }
    .config {
      padding: 5px 10px;
      font-size: 30px;
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
            overflow: hidden;
            border-radius: 10px;
            border: 1px solid #000;
            .isactive {
              background-color: greenyellow;
            }

            p {
              margin: 0px;

              span {
                font-size: 30px;
              }

              .number {
                display: inline-block;
                margin: 0px 10px;
                font-size: 30px;
              }
              i {
                font-size: 30px;
              }
            }
            .addNumber {
              display: inline-block;
            }
            .price {
              color: red;
              font-weight: 600;
              font-size: 30px;

              margin-right: 10px;
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