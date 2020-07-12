<!--  -->
<template>
  <div>
    <div class="attrButeList">
      <div class="attrButeListhead">请选择套餐项目</div>
      <div class="row entree">
        <div class="col-md-5 foodImg">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=319246966,2664500099&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="col-md-7 foodName">
          <p>猪扒饭</p>
          <el-button>特别要求</el-button>
        </div>
        <div class="col-md-3 price">￥35</div>
      </div>
      <div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1" class>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less">
.attrButeList {
  box-sizing: border-box;
  padding: 3%;
  width: 100%;
  height: 100%;
  .attrButeListhead {
    text-align: center;
    // height: 5%;
    padding: 1%;
    box-sizing: border-box;
    background-color: chocolate;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .entree {
    position: relative;
    height: 20%;
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
/* @import url(); 引入css类 */
</style>