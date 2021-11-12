<template>
  <div class="demo-action-sheet">
    <van-action-sheet
      v-model="show"
      :actions="simpleActions"
      @select="onSelect"
      duration="0.3"
    />
  </div>
</template>

<script>
import Taro from '@tarojs/taro'
import { ActionSheet } from 'vant'

export default {
  name: 'my-action-sheet',
  components: {
    'van-action-sheet': ActionSheet
  },
  props: { 
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    simpleActions() {
      return [
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三' },
      ];
    }
  },
  methods: {
    onSelect(item) {
      this.show.basic = false;
      Taro.showToast({
        title: item.name,
        icon: 'none'
      })
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';
.demo-action-sheet {
  &-content {
    padding: @padding-md @padding-md @padding-md * 10;
  }
}
</style>
