<template>
  <header id="header" class="cmp-top">
    <!-- <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button> -->
    <a class="el-icon-arrow-left"></a>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
  export default {
    data () {
      let title = '酒店助手'

      return { title }
    }
  }
</script>

<style lang="less">
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
    height: .7rem;
    font-size: .18rem;
    text-align: center;
    font-family: '微软雅黑';
    font-weight: normal;
    background-color: rgba(200,0,20,0.6);
    color: #eee;
    position: fixed;
    top: 0;
    z-index: 999;
    a{
      left: 0;
      font-size: .5rem;
      .y-center
    }
    h1{
      .center
    }
  }
</style>
