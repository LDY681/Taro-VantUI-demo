<template>
  <view class="index">
    <van-cell 
      is-link 
      title="actionSheet" 
      @click="show = true"
    />
    <my-action-sheet :show="show" />
    <my-button text="点我( •̀ ω •́ )y" />
    <my-image 
      height="100" 
      width="100" 
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
  </view>
</template>

<script>
import './index.less'
import { Cell } from 'vant'
export default {
  components: {
    'van-cell': Cell
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false
    }
  }
}
</script>
<style lang="less">
@import '../../style/var';
.index {
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
}
</style>
