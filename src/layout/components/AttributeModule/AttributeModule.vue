<template>
  <div class="attributeModule" ref="attributeOuter">
    <div class="attributeInner" ref="attributeInner">
      <h2 class="title">请选择</h2>
      <div class="attributeCentent">
        <div class="attributeImg">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1153677118,3123000136&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="CententRight">
          <p>配可口可乐</p>
          <h3 class="title">已选择：{{tags.length}}个</h3>
          <div class="list">
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              :type="tag.type"
              class="attributeTag"
              @close="handleClose(tag)"
            >{{tag.name}}</el-tag>
          </div>
        </div>
      </div>
      <div class="attributeTab">
        <ul class="left">
          <li @click="switchaAttribute(0,'溫度')" :class="{attributeActive:isactive===0}">温度</li>
          <li @click="switchaAttribute(1,'口味')" :class="{attributeActive:isactive===1}">口味</li>
          <li @click="switchaAttribute(2,'加配料')" :class="{attributeActive:isactive===2}">加配料</li>
          <li @click="switchaAttribute(3,'加xxxx')" :class="{attributeActive:isactive===3}">加xxxx</li>
          <li @click="switchaAttribute(4,'加xxx')" :class="{attributeActive:isactive===4}">加xxxx</li>
        </ul>
        <div class="right">
          <p>{{attributeName}}</p>
          <ul class="rightList" ref="rightList">
            <li class="row">
              <div class="col-md-4" @click="addAttribute('多冰')">多冰</div>
              <div class="col-md-4" @click="addAttribute('常溫')">常溫</div>
              <div class="col-md-4" @click="addAttribute('熱')">熱</div>
              <div class="col-md-4" @click="addAttribute('少冰')">少冰</div>
            </li>
            <li class="row">
              <div class="col-md-4" @click="addAttribute('辣')">辣</div>
              <div class="col-md-4" @click="addAttribute('微辣')">微辣</div>
              <div class="col-md-4" @click="addAttribute('多盐')">多盐</div>
              <div class="col-md-4" @click="addAttribute('少盐')">少盐</div>
            </li>
            <li>加配料</li>
            <li>加xxxx</li>
            <li>加xxxx111</li>
          </ul>
        </div>
      </div>
      <div class="attributeBtn">
        <el-button type="success" @click="isShowAttributeInner">确定</el-button>
        <el-button type="danger" @click="isShowAttributeInner">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: 'left',
      activeName: 'second',
      tags: [],
      isactive: 0,
      attributeName: '溫度'
    }
  },
  components: {},
  mounted() {},
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    switchaAttribute(index, name) {
      this.isactive = index
      this.attributeName = name
      this.$refs.rightList.children.forEach(item => {
        item.style.display = 'none'
      })
      this.$refs.rightList.children[index].style.display = 'block'
    },
    addAttribute(name) {
      let flag = true
      this.tags.find(item => {
        if (item.name === name) {
          return (flag = false)
        }
      })
      if (flag) {
        this.tags.push({ name, type: 'success' })
      }
    },
    isShowAttributeInner(index) {
      if (index === 1) {
        this.$refs.attributeOuter.style.display = 'block'
        setTimeout(() => {
          this.$refs.attributeInner.style.transform = 'scale(1)'
        }, 0)
      } else {
        setTimeout(() => {
          this.$refs.attributeOuter.style.display = 'none'
        }, 300)
        this.$refs.attributeInner.style.transform = 'scale(0)'
      }
    }
  }
}
</script>
<style lang="less">
.attributeModule {
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  text-align: center;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0);
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
  }

  .attributeInner {
    width: 100%;
    transform: scale(0);
    transition: 0.3s;
    background-color: white;
    z-index: 1;
    position: relative;
    margin: 40% auto;
    padding: 20px;
    text-align: center;
    z-index: 101;
    .title {
      width: 100%;
      height: 50px;
      background-color: darkorange;
      font-size: 30px;
      font-weight: 600;
      line-height: 50px;
      border-radius: 10px;
      margin: 20px 0 20px 0;
    }
    .attributeCentent {
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      height: 30%;
      border: 1px solid #000;
      border-radius: 10px;
      overflow: hidden;
      padding: 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      h2 {
        font-size: 40px;
        font-weight: 600;
      }
      .attributeImg {
        width: 30%;
        margin-right: 5%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .CententRight {
        width: 65%;
        p {
          width: 100%;
          float: left;
          background-color: white;
          margin: 0;
          padding: 10px;
        }
        h3 {
          float: left;
          margin: 0;
          width: 90%;
          margin: 0 5%;
        }
      }
      .list {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 10px;
        padding: 0px 5%;
        .attributeTag {
          margin: 3% 3% 0% 3%;

          font-size: 30px;
          .el-icon-close {
            font-size: 30px;
          }
        }
      }
    }
    .attributeTab {
      width: 100%;
      max-height: 30%;
      display: flex;

      .left {
        width: 25%;
        height: 100%;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-evenly;
        li {
          padding: 10px;
          border: 1px solid #000;
          flex-shrink: 1;
          border-radius: 10px;
          margin-bottom: 5px;
        }
      }
      .right {
        width: 75%;
        background-color: wheat;
        p {
          background-color: darkorange;
          padding: 5px;
          border-radius: 10px;
          float: left;
          width: 100%;
        }
        .rightList {
          height: 100%;
          li {
            height: 100%;
            display: none;
            div {
              padding: 10px;
              margin-bottom: 10px;
              position: relative;
              &::after {
                content: '';
                width: 90%;
                height: 100%;
                border: 1px solid #000;
                position: absolute;
                top: 0;
                left: 5%;
              }
            }
          }
        }
      }
      .attributeActive {
        background-color: aqua;
      }
    }
    .attributeBtn {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      margin: 20px 0px;
      button {
        width: 40%;
        height: 80px;

        font-size: 30px;
      }
    }
  }
}
</style>