<template>
  <div class="simple-header">
    <van-icon name="arrow-left" @click="goBack" />
    <div class="simple-header-name">{{name}}</div>
    <van-icon name="weapp-nav" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../common/style/mixin';
  .simple-header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .fj();
    .wh(100%, 44px);
    line-height: 44px;
    padding: 0 10px;
    .boxSizing();
    color: #252525;
    background-color: #fff;
    border-bottom: 1px solid #dcdcdc;
    font-size: 14px;
    .van-icon {
      line-height: 44px;
    }
  }
</style>