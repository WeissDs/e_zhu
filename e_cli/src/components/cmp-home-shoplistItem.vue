<template>
  <div>

    <div class="shoplist-item" @click="gotoDetail">
      <div class="shoplist-img">
        <img src="../../static/img/timg.jpg" />
      </div>
      <div class="shoplist-content">
        <p>
          {{shopData.name}}
          <span>
            <img src="../../static/img/icon/facilities_1.svg" alt="">
            <img src="../../static/img/icon/facilities_2.svg" alt="">
            <img src="../../static/img/icon/facilities_3.svg" alt="">
            <img src="../../static/img/icon/facilities_4.svg" alt="">
            <img src="../../static/img/icon/facilities_8.svg" alt="">
          </span>
        </p>
        <p><span>{{shopData.price}}</span> 起</p>
        <p>约<span>{{shopData.locarion}}</span>km</p>

      </div>
    </div>
  </div>
</template>

<script>
/*jshint esversion: 6 */
import router from '../router'
export default {
  data () {
    let id = '222'

    return { id }
  },
  methods: {
    // 点击shoplist，跳转到 shop详情
    gotoDetail (id) {
      router.push(`/detail/${this.id}`)
    }
  },
  props: ['shopData']
}
</script>

<style lang="less">
@font-face{
  font-family: PingFangSC;
  src: url(../../static/font/PingFangSC-Medium.woff.ttf)
}
.shoplist-item {
  width: 90%;
  margin: .2rem auto 0;
  border: 1px solid #F1F1F6;
  border-radius: 5px;
  box-shadow: 0 5px 20px #ccc;
  .shoplist-img {
    width: 100%;
    height: 2.6rem;
    overflow: hidden;
    border-radius: 5px;
    img{
      width: 100%;
    }
  }
  .shoplist-content {
    font-size: .5rem;
    font-family: PingFangSC;
    color: #222;
  }
}
</style>
