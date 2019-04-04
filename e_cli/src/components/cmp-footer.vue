<template>
  <footer class="foot">
    <router-link class="foot-item" to="/" @click="returnRed">
      <img :src="imageArr[0]" alt="">
      <div>首页</div>
    </router-link>
    <router-link class="foot-item" to="/select">
      <img :src="imageArr[1]" alt="">
      <div>筛选</div>
    </router-link>
    <router-link class="foot-item" to="/me">
      <img :src="imageArr[2]" alt="">
      <div>个人中心</div>
    </router-link>
  </footer>
</template>

<script>
export default {
  data () {
    let imageArr = [
      ['../../static/img/icon-dai/3-首页.svg'],
      ['../../static/img/icon-dai/1-搜索.svg'],
      ['../../static/img/icon-dai/setting (1).svg']
    ]
    let showUp = 0
    return { imageArr, showUp }
  },
  methods: {
    returnRed () {
      alert(this.$router)
    }
  }
};
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
