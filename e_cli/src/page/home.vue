<template>
  <div class="home">
    <!--头部导航栏-->
    <top></top>
    <!--轮播图-->
    <!-- 遮罩 -->
    
    <banner></banner>
    <!--form 表单提交数据-->
    <div class="home-form-warp">
      <div class="form-title">
        酒店预订
        <span class="red">hotel booking</span>
      </div>
      <form id="">
        <div class="line"></div>
        <!-- 时间选择 代码 -->
        <calendar class="home-calendar"></calendar>
        <!-- 时间选择 代码 -->
        <div class="line"></div>

        <div class="form-input position" @click='fn()'>
          <label><img src="../../static/img/icon/index_location.svg" width="20"/></label>
          <input type="text" id="areaname" class="mui-input hotel_area" value="我的位置" readonly="readonly">
        </div>
        <div class="form-input">
          <label><img src="../../static/img/icon/index_search.svg"width="20" /></label>
          <input type="text" name="title" id="qiao_hotel_name" value="酒店名称">
        </div>
        <div class="form-input">
          <label><img src="../../static/img/icon/index_price.svg" width="20"/></label>
          <input type="text" id="qiao_show_price" readonly="readonly" value="价格/星级">
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
    <!--form 表单数据-->

    <!--商家列表-->
    <div class="qiao_inut_shopinfo">
      <div class="qiao_shop_list">
        <p>推荐商家</p>
      </div>
      <div class="qiao_shop_content">
        <div class="qiao_shop_item">
          <!--酒店列表-->
        </div>
      </div>
      <div class="loading_more">
        <p>点击加载更多</p>
      </div>
    </div>
    <!--商家列表-->

    <!--隐藏分页数据-->
    <input type="hidden" id="page" value="2" />
    <!--隐藏分页数据-->

    <!-- 城市选择 开始 -->
    <div id="home_city" class="city_show">
      <div class="home_nav">
        <header id="header" class="mui-bar mui-bar-nav">
          <a class="qiao_back_out mui-icon mui-icon-left-nav mui-pull-left " style="color: white;"></a>
          <h1 class="mui-title">酒店助手</h1>
        </header>
      </div>
      <!--显示点击的是哪一个字母-->
      <!--<div id="showLetter" class="showLetter"><span>A</span></div>-->
      <!--城市索引查询-->
      <div class="letter"></div>
      <div class="container"></div>
    </div>
    <!-- 城市选择 结束 -->

    <!--价格/星级-->
    <div class="price-start-popup">
      <div class="star-select">
        <p>星级</p>
        <div class="mui-row">
          <!--星际列表-->
        </div>
      </div>
      <div class="price_select">
        <p>价格</p>
        <ul class="popup-price-section">
          <li>
            <p class="red">不限</p>
            <span class="red"></span>
          </li>
          <li>
            <p>100</p>
            <span></span>
          </li>
          <li>
            <p>200</p>
            <span></span>
          </li>
          <li>
            <p>300</p>
            <span></span>
          </li>
          <li>
            <p>400</p>
            <span></span>
          </li>
          <li>
            <p>500</p>
            <span></span>
          </li>
          <li>
            <p>600</p>
            <span></span>
          </li>
          <li>
            <p class="red">1000</p>
            <span class="red"></span>
          </li>
        </ul>
        <div class="mui-input-row mui-input-range popup-price-bar">
          <input type="range" min="0" max="1000" id="rangel" value="0">
        </div>
      </div>
      <div class="popup-bottom">
        <button id="index_popup_re" class="popup-re">重置</button>
        <button id="index_popup_sub" class="popup-sub">完成</button>
      </div>
    </div>
    <!--价格/星级-->

    <!--底部菜单栏-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" id="qiao_index">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" id="qiao_select">
        <span class="mui-icon mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">筛选</span>
      </a>
      <a class="mui-tab-item" id="qiao_me">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">个人中心</span>
      </a>
    </nav>
  </div>
</template>

<script>
// import {Carousel} from 'element-ui'
// this.ues(ElementUI)
import top from '@/components/cmp-top.vue'
import calendar from '@/components/cmp-calendar'
import banner from '@/components/cmp-banner.vue'
export default {
components: { top, calendar, banner },
methods: {
  fn(){
    alert(11111)
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
  
  /* 表单部分开始 */
  .home-form-warp{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: relative;
    font-size:0;
    background-color: #fff;
    margin-top: .4rem;
    /*时间选择*/
    .home-calendar{
      /* margin-top: .3rem; */
    }
    /*分割线*/
    .line{
      width: 87%;
      background-color: #ddd;
      height: .02rem;
      margin: .2rem auto 0;
    }
    /*酒店预订title*/
    .form-title{
      font-size: .35rem;
      font-weight: bold;
      color: #555;
      margin-left: .45rem;
      .red{
        color: @redColor;
      }
    }
    /*input*/
    .form-input{
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      height: 1rem;
      position: relative;
      /* border-bottom: 1px solid #999; */
    }
    .form-input input{
      border: none;
      width: 100%;
      height: 1rem;
      font-size: .3rem;
      /* font-weight: bold; */
      font-family: PingFangSC;
      color: #333;
      padding-left: .9rem;
    }
    .form-input label{
      position: absolute;
      left: .5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  /* 表单部分结束 */
}

</style>
