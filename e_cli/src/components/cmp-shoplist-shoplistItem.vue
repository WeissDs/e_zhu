<template>
  <div>
    <div class="shoplist-item">
      <div class="shoplist-img">
        <img src="../../static/img/timg.jpg" />
      </div>
      <div class="shoplist-content">
        <p class="hotel-name">{{shopData? shopData.name : '还没有name'}}</p>
        <p class="star">
          <img src="../../static/img/icon-dai/star.svg">
          <img src="../../static/img/icon-dai/star.svg">
          <img src="../../static/img/icon-dai/star.svg">
          <img src="../../static/img/icon-dai/star.svg">
        </p>
        <p class="hotel-facilities">
          <img src="../../static/img/icon/facilities_1.svg" alt="">
          <img src="../../static/img/icon/facilities_2.svg" alt="">
          <img src="../../static/img/icon/facilities_3.svg" alt="">
          <img src="../../static/img/icon/facilities_4.svg" alt="">
          <img src="../../static/img/icon/facilities_8.svg" alt="">
        </p>
        <p>地址地址地址地址地址地址地址地址</p>
        <p class="hotel-price"><span>￥</span><span>{{shopData?shopData.price:'还没有name'}}</span> 起</p>
        <p class="hotel-location">约 <span>{{shopData?shopData.location:''}}</span> km</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ['shopData']
}
</script>

<style media="screen" lang="less">
.shoplist-item{

}
</style>
