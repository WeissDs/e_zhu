<template>
  <div @click="gotoDetail('11111')">
    <div class="serrch-shoplist-item">
      <div class="shoplist-img">
        <img src="../../static/img/timg.jpg" />
      </div>
      <div class="shoplist-content">
        <div class="">
          <p class="hotel-name">
            {{shopData? shopData.name : '某某某某酒店'}}
          </p>
          <span class="star">
            <img src="../../static/img/icon-dai/star.svg">
            <img src="../../static/img/icon-dai/star.svg">
            <img src="../../static/img/icon-dai/star.svg">
            <img src="../../static/img/icon-dai/star.svg">
          </span>
        </div>
        <p class="hotel-facilities">
          <img src="../../static/img/icon/facilities_1.svg" alt="">
          <img src="../../static/img/icon/facilities_2.svg" alt="">
          <img src="../../static/img/icon/facilities_3.svg" alt="">
          <img src="../../static/img/icon/facilities_4.svg" alt="">
          <img src="../../static/img/icon/facilities_8.svg" alt="">
        </p>
        <p  class="hotel-location-name">地址地址地址地址地址地址地址地址</p>
        <p class="hotel-price"><span>￥</span><span>{{shopData?shopData.price:'200'}}</span> 起</p>
        <p class="hotel-location">约 <span>{{shopData?shopData.location:'300'}}</span> km</p>

      </div>
    </div>
  </div>
</template>

<script>
// import router from '../router'
export default {
methods: {
  gotoDetail(id){
    // 不引入router， 用vue的全局对象也可以
    this.$router.push(`detail/${id}`)
  }
},
props: ['shopData']
}
</script>

<style media="screen" lang="less">
@textColor2: #888;
.serrch-shoplist-item{
  position: relative;
  width: 100%;
  height: 2.2rem;
  margin: 0 auto;
  background-color: #fff;
  padding: .1rem;
  overflow: hidden;
  color: #888;
  font-size: .24rem;
  .shoplist-img{
    width: 1.7rem;
    height: 100%;
    background-color: yellow;
    float: left;
    overflow: hidden;
    border-radius: 6px;
    margin-right: .2rem;
    img{
      height: 100%;
      width: auto;
    }
  }
  .shoplist-content{
    .hotel-name{
      display: inline-block;
      color: #000;
      font-size: .34rem;
      font-weight: bold;
    }
    .star{
      img{
        width: .2rem;
      }
    }
    .hotel-facilities{
      img{
        width: .22rem;
      }
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
    .hotel-location-name{
      position: absolute;
      left: 2rem;
      bottom: .65rem;
    }
    .hotel-location{
      position: absolute;
      bottom: .1rem;
      left: 2rem;
      color: @textColor2;
      font-size: .25rem;
      span{
        color: #2EB6A8;
        font-size: .3rem;
        font-weight: bold;
      }
    }
  }
}
</style>
