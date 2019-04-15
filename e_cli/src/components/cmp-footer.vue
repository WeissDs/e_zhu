<template>
  <footer class="foot">
    <router-link class="foot-item" to="/">
      <img :src="'home'===this.$router.history.current.name?imageArr[0][1]:imageArr[0][0]" alt="">
      <div>首页</div>
    </router-link>
    <router-link class="foot-item" to="/select">
      <img :src="'select'===this.$router.history.current.name?imageArr[1][1]:imageArr[1][0]" alt="">
      <div>筛选</div>
    </router-link>
    <router-link class="foot-item" to="/me">
      <img :src="'me'===this.$router.history.current.name?imageArr[2][1]:imageArr[2][0]" alt="">
      <div>个人中心</div>
    </router-link>
  </footer>
</template>

<script>
export default {
  data () {
    let imageArr = [
      ['../../static/img/icon-dai/3-首页.svg', '../../static/img/icon-dai/3-首页active.svg'],
      ['../../static/img/icon-dai/1-搜索.svg', '../../static/img/icon-dai/1-搜索active.svg'],
      ['../../static/img/icon-dai/setting (1).svg', '../../static/img/icon-dai/setting (1)active.svg']
    ]
    let showUp = 0
    return { imageArr, showUp }
  }
}
</script>

<style lang="less">
  .foot{
    display: flex;
    width: 100%;
    height: .9rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: .2rem;
    .foot-item{
      text-decoration: none;
      text-align: center;
      flex:1;
      margin-top: .05rem;
      color: #555;
      img{
        width: .5rem;
      }
    }
  }
</style>
