<template>
  <div class="demo-button">
    <van-button type="primary" icon="plus" :text="text" />
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'my-button',
  components: {
    'van-button': Button
  },
  props: { 
    text: {
      type: String,
      default: "Plain Text"
    }
  },
};
</script>

<style lang="less">
@import '../../style/var';
.demo-button {
  .van-button {
    &--large {
      margin-bottom: @padding-md;
    }
    &--small,
    &--normal:not(:last-child) {
      margin-right: @padding-md;
    }
  }
  .van-doc-demo-block {
    padding: 0 @padding-md;
  }
  .van-doc-demo-block__title {
    padding-left: 0;
  }
  &-row {
    margin-bottom: @padding-sm;
  }
}
</style>
