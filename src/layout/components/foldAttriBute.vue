<template>
  <div class="SelectAttributes">
    <div
      class="item"
      :class="{active:isClose===attrIndex}"
      v-for="(attrBute,attrIndex) in attrButeList"
      :key="attrBute.id"
    >
      <div class="centent">
        <slot name="centent" :attrBute="attrBute"></slot>
      </div>
      <div class="config" @click="openAndClose(attrIndex)">
        <slot name="config"></slot>
      </div>

      <div class="wrap" :class="{close:isClose!==attrIndex}">
        <slot name="wrap"></slot>
      </div>
      <slot name="icon" :attrIndex="attrIndex"></slot>
    </div>
    <slot name="AttributeModule"></slot>
  </div>
</template>
<script>
import LayoutMixin from '../mixin'

import '../css/layout.less'
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
</style>