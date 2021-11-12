<template>
  <div class="demo-image">
    <van-row>
      <van-image 
        :width="width" 
        :height="height"
        :src="src"
      />
    </van-row>
  </div>
</template>

<script>
import { Row, Image } from 'vant'

export default {
  name: "my-image",
  components: {
    'van-row': Row,
    'van-image': Image
  },
  props: {
    height: {
      type: String,
      default: "100"
    },
    width: {
      type: String,
      default: "100"
    },
    src: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';
.demo-image {
  overflow-x: hidden;
  background-color: @white;
  .van-row {
    padding: 0 @padding-md;
  }
  .van-col {
    margin-bottom: 20px;
  }
  .text {
    margin-top: 5px;
    color: @gray-7;
    font-size: 14px;
    text-align: center;
  }
}
</style>
