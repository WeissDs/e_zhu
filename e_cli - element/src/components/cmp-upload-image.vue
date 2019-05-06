<template>
  <header class="me-header">
    <a class="me-back"><img src="./img/icon/me_back.svg" alt=""></a>
    <h2>个人中心</h2>
    <a id="person_set" class="me-setting"><img src="./img/icon/me_setting.svg" alt=""></a>
  </header>

  <div class="me-content">
    <div class="person-info">
      <!--<img src="img/me_banner.png" alt="">-->
      <!-- <div class="person-img"><img id="qiao_head_img" src="./img/timg.jpg" alt=""></div> -->
      <div class="person-img"><img id="qiao_head_img" src="" data-preview-src="" data-preview-group="1"  alt=""></div>
      <div class="person-content">
        <p id="dai_username"></p>
        <p id="dai_usermark"></p>
      </div>
    </div>

    <div class="me-orders">
      <div>
        <a id="dai_me_orders">
          <p class="v-middle">订单管理</p>
          <img src="img/icon/me_orders.svg" alt="">
        </a>
      </div>
      <div class="me-orders-box">
        <a id="dai_me_backout">
          <p>我的撤销单</p>
          <img src="img/icon/me_re.svg" alt="">
        </a>
        <a id="dai_me_waiting">
          <p>待入住</p>
          <img src="img/icon/me_waiting_check_i.svg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  .mui-bar-tab .mui-tab-item.mui-active {
    color: #FE0638;
  }
  
  .me-header{ width: 100%; height: .88rem; background-color: rgba(0,0,0,0.2); position: fixed; z-index: 3; }
  .me-header .me-back{ display: inline-block; line-height: 0; position: absolute; left: .09rem; top: 50%; transform: translateY(-50%);}
  .me-header a img{ height: .6rem;}
  .me-header h2{ font-size: .36rem; color: #fff; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-weight:normal;
   }
  .me-header .me-setting{ display: inline-block; line-height: 0; position: absolute; right: .09rem; top: 50%; transform: translateY(-50%);}

  
  .me-content .person-info{ position: relative; height: 3.74rem; background:#269EDB;}
  .me-content .person-info img{ width: 100%; }
  .me-content .person-info .person-img{ width: 1.35rem; height: 1.35rem; border-radius: 50%; overflow: hidden; position: absolute; left: 50%; top: 46%; transform: translate(-50%, -50%); border: 1px solid #fff; }
  .me-content .person-info .person-img img{ width: 100%; height: 100%; }
  .me-content .person-info .person-content{ width: 100%; text-align: center; position: absolute; bottom: .5rem; }
  .me-content .person-info .person-content p{ line-height: .35rem; color: #fff; margin-bottom: 0; }
  .me-content .person-info .person-content p:nth-child(1){ font-size: .3rem; }
  .me-content .person-info .person-content p:nth-child(2){ font-size: .24rem; }
  
  .me-content .me-orders a{ display: inline-block; position: relative; }
  .me-content .me-orders p{ color: #fff;  position: absolute; top: 50%; transform: translateY(-50%); }
  .me-content .me-orders img{ color: #fff; top: 50%;  position: absolute; transform: translateY(-50%); }

  .me-content .me-orders{ width: 100%; padding: 0 .24rem; margin-top: .27rem; }
  .me-content .me-orders div:nth-child(1){ width: 100%; height: 2.52rem; }
  .me-content .me-orders div:nth-child(1) a{ width: 100%; height: 2.52rem; background-color: #ec394e; border-radius: 12px; }
  .me-content .me-orders div:nth-child(1) a p{ font-size: .6rem; left: .26rem; }
  .me-content .me-orders div:nth-child(1) a img{ width: 1.6rem; right: .6rem;  }
  .me-content .me-orders div:nth-child(2){ margin-top:.22rem; display: flex; justify-content: space-between; }
  .me-content .me-orders div:nth-child(2) a:nth-child(1){ width: 4.72rem; height: 3.02rem; background-color: #a372da; border-radius: 12px 0 0 12px; }
  .me-content .me-orders div:nth-child(2) a:nth-child(1) p{ font-size: .48rem; left: .26rem; }
  .me-content .me-orders div:nth-child(2) a:nth-child(1) img{ width: 1.3rem; right: .54rem; }
  .me-content .me-orders div:nth-child(2) a:nth-child(2){ width: 2.2rem; height: 3.02rem; background-color: #72e1dd; border-radius: 0 12px 12px 0; }
  .me-content .me-orders div:nth-child(2) a:nth-child(2) p{ top: 65%; left: 50%; transform: translate(-50%, -50%); }
  .me-content .me-orders div:nth-child(2) a:nth-child(2) img{ width: 1rem; top: 40%; left: 50%; transform: translate(-50%, -50%); }
</style>
