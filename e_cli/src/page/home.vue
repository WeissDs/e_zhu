<template>
  <div class="home">
    <!--头部导航栏-->
    <!-- <top></top> -->
    <div class="home-back"><img src="../../static/img/icon/Icon_back.svg" alt=""></div>
    <!--轮播图-->
    <!-- 遮罩 -->
    <banner></banner>
    <!--form 表单提交数据开始-->
    <div class="form-title">
      酒店预订
      <span class="red">hotel booking</span>
    </div>
    <div class="home-form-warp">
      <form @submit.prevent="submit">
        <!-- 时间选择 代码 -->
        <calendar></calendar>
        <!-- 时间选择 代码 -->
        <div class="form-input">
          <label><img src="../../static/img/icon-dai/6-地点.svg"/></label>
          <input type="text" name="areaname" class="hotel_area" readonly="readonly" v-model="inputtext.areaname">
          <span class="now-position"><img src="../../static/img/icon-dai/position.svg" alt=""></span>
        </div>
        <div class="form-input">
          <label><img src="../../static/img/icon-dai/1-搜索.svg"/></label>
          <input type="text" name="hotelname" v-model="inputtext.hotelname">
        </div>
        <div class="form-input">
          <label><img src="../../static/img/icon-dai/29-星级.svg"/></label>
          <input type="text" name="price" readonly="readonly" v-model="inputtext.price">
        </div>
        <div class="form-input form-submit">
          <input type="submit" value="提 交">
        </div>
        <!--input输入栏部分-->
        <div class="">
          <!--占位作用-->
        </div>
        <!--input输入栏部分-->
        <div class="search_form">
          <label class="mui-btn mui-btn-danger">查询</label>
        </div>
        <input type="hidden" name="price" id="search_price" />
        <input type="hidden" name="level" id="search_level" />
        <input type="hidden" name="areaid" id="areaid" />
      </form>
    </div>
    <!--form 表单数据结束-->
    <div class="home-line"></div>
    <!--商家列表-->
    <div class="home-shopinfo">
      <div class="form-title">
        推荐商家
        <!-- <span class="red">hotel loveing</span> -->
      </div>
      <div class="home-shoplist">
        <shopItem></shopItem>
        <shopItem></shopItem>
        <shopItem></shopItem>
        <shopItem></shopItem>
      </div>
    </div>
    <!--商家列表-->

    <!--隐藏分页数据-->
    <input type="hidden" id="page" value="2" />
    <!--隐藏分页数据-->
  </div>
</template>

<script>
// import {Carousel} from 'element-ui'
// this.ues(ElementUI)
import top from '@/components/cmp-top.vue'
import calendar from '@/components/cmp-calendar'
import banner from '@/components/cmp-banner.vue'
import shopItem from '@/components/cmp-home-shoplistItem.vue'
export default {
  components: { top, calendar, banner, shopItem },
  data () {
    let inputtext = {
      areaname: '搜索目的地',
      hotelname: '酒店名称',
      price: '价格/星级'

    }
    return { inputtext }
  },
  methods: {
    submit () {
      console.log(this.inputtext)
    }
  }
}
</script>

<style lang="less">
@redColor: #FF4356;
@font-face{
  font-family: PingFangSC;
  src: url(../../static/font/PingFangSC-Medium.woff.ttf)
}

.home{
  /* 返回按鈕 */
  .home-back{
    position: absolute;
    z-index: 4;
    top: .2rem;
    left: .3rem;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    img{
      width: 0.8rem;
      position: absolute;
      left: -.08rem;
      top: -.05rem;
    }
  }
  /*分割线*/
  .home-line{
    width: 98%;
    background-color: #eee;
    box-shadow: 0px 2px 5px #eee;
    height: .025rem;
    margin: .4rem auto 0;
  }
  /*酒店预订title*/
  .form-title{
    font-size: .35rem;
    font-weight: bold;
    color: #555;
    margin: .4rem 0 .4rem .45rem;
    .red{
      color: @redColor;
    }
  }
  /* 表单部分开始 */
  .home-form-warp{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: relative;
    font-size:0;
    background-color: #fff;
    margin-top: .4rem;
    
    /*input初始化*/
    .input-init{
      border: none;
      width: 100%;
      height: .7rem;
      font-size: .34rem;
      font-family: PingFangSC;
      border-radius: .04rem;
      outline: none
    }
    /*input输入类*/
    .form-input{
      margin-left: auto;
      margin-right: auto;
      margin-top: .2rem;
      width: 87%;
      height: .7rem;
      position: relative;
      .now-position{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: .3rem;
        img{
          width: .43rem;
        }
      }
    }
    .form-input input{
      .input-init;
      padding-left: .7rem;
      color: #555;
      background-color: #f1f1f1;
    }
    /*input提交*/
    .form-input.form-submit input{
      .input-init;
      padding-left: 0;
      background-color: @redColor;
      color: #fff;
      margin-top: .15rem;
    }
    /*input中的icon*/
    .form-input label{
      position: absolute;
      left: .2rem;
      top: 50%;
      transform: translateY(-50%);
      img{
        width: .43rem;
      }
    }
  }
  /* 表单部分结束 */
  .home-shoplist{
    margin-top: -.4rem;
  }
}

</style>
