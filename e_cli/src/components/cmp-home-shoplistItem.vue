<template>
  <div>
    <div class="shoplist-item" @click="gotoDetail(shopData.id)">
      <div class="shoplist-img">
        <img src="../../static/img/timg.jpg" />
      </div>
      <div class="shoplist-content">
        <p class="hotel-name">{{shopData? shopData.name : '还没有name'}}</p>
        <p class="hotel-facilities">
          <img src="../../static/img/icon/facilities_1.svg" alt="">
          <img src="../../static/img/icon/facilities_2.svg" alt="">
          <img src="../../static/img/icon/facilities_3.svg" alt="">
          <img src="../../static/img/icon/facilities_4.svg" alt="">
          <img src="../../static/img/icon/facilities_8.svg" alt="">
        </p>
        <p class="hotel-price"><span>￥</span><span>{{shopData?shopData.price:'还没有name'}}</span> 起</p>
        <p class="hotel-description" style="">酒店描述*酒店描述*酒店描述*酒店描述*酒店描述*酒店描述*酒店描述酒店描述*酒店描述*酒店描述*酒店描述*酒店描述*酒店描述*酒店描述</p>
        <p class="hotel-location">约 <span>{{shopData?shopData.location:''}}</span> km</p>

      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  methods: {
    // 点击shoplist，跳转到 shop详情
    gotoDetail (id) {
      router.push(`/detail/${id}`)
    }
  },
  props: ['shopData']
}
</script>

<style lang="less">
@textColor2: #888;
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
  font-size: 0;
  background-color: #fff;
  position: relative;
  /* 展示图 */
  .shoplist-img {
    width: 100%;
    height: 2.6rem;
    overflow: hidden;
    border-radius: 5px;
    img{
      width: 100%;
    }
  }
  /* 文字部分 */
  .shoplist-content {
    padding: .2rem;
    font-size: .4rem;
    font-family: PingFangSC;
    color: #222;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    /* 酒店名 限制一行展示 */
    .hotel-name{
      width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* 酒店描述 限制展示两行 */
    .hotel-description{
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: @textColor2;
      font-size: .3rem;
    }
    .hotel-facilities{
      margin-top: -.1rem;
      img{ width: .22rem }
    }
    .hotel-price {
      position: absolute;
      bottom: .1rem;
      right: .2rem;
      /* span:nth-child(1){
        color: #FF4356;
      } */
      span:nth-child(2){
        font-size: .3rem;
        font-weight: bold;
      }
      font-size: .25rem;
      color: @textColor2;
    }
    .hotel-location{
      color: @textColor2;
      font-size: .25rem;
      margin-top: .6rem;
      span{
        color: #2EB6A8;
        font-size: .3rem;
        font-weight: bold;
      }
    }
  }
}
</style>
