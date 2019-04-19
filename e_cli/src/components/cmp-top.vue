<template>
  <header id="header" class="cmp-top">
    <!-- <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button> -->
    <a class="el-icon-arrow-left" @click="goback"></a>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data () {
    let title = '酒店助手'

    return { title }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
  @font-face{
    font-family: PingFangSC;
    src: url(../../static/font/PingFangSC-Medium.woff.ttf)
  }
  .center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .y-center{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .cmp-top {
    width: 100%;
    height: 1.2rem;
    font-size: .2rem;
    text-align: center;
    font-family: PingFangSC;
    font-weight: normal;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 4;
    a{
      left: .3rem;
      font-size: .5rem;
      .y-center;
    }
    h1{
      .center;
    }
  }
</style>
