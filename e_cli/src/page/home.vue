<template>
  <div class="home">
    <!--头部导航栏-->
    <!-- <top></top> -->
    <div class="home-back" @click="back"><img src="../../static/img/icon/Icon_back.svg" alt=""></div>
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
        <div class="form-input" id="home_area">
          <label><img src="../../static/img/icon-dai/6-地点.svg"/></label>
          <input type="text" name="areaname" class="hotel_area" readonly="readonly" v-model="inputtext.areaname">
          <span class="now-position"><img src="../../static/img/icon-dai/position.svg" alt="" @click="location"></span>
        </div>
        <div class="form-input">
          <label><img src="../../static/img/icon-dai/1-搜索.svg"/></label>
          <input type="text" name="hotelname" v-model="inputtext.hotelname" @focus="inputActive($event.target.value)" @blur="inputBlur($event.target.value)">
        </div>
        <div class="form-input">
          <label><img src="../../static/img/icon-dai/29-星级.svg"/></label>
          <input type="text" name="price" readonly="readonly" v-model="inputtext.price"  @click.stop="showstar">
        </div>
        <div class="form-input form-submit">
          <input type="submit" value="查 询" @click="gotoHotelList">
        </div>
        <!--input输入栏部分-->
        <div class="">
          <!--占位作用-->
        </div>
        <!--input输入栏部分-->
        <div class="search_form">
          <label class="mui-btn mui-btn-danger">查询</label>
        </div>
      </form>
    </div>
    <!--form 表单数据结束-->
    <div class="home-line"></div>
    <!--商家列表-->
    <div class="home-shopinfo">
      <div class="form-title">
        推荐商家
        <span class="red">hotel loveing</span>
      </div>
      <div class="home-shoplist">
        <shopItem v-for="item in this.$store.state.shopListArr" :key="item.id" :shopData="item"></shopItem>
      </div>

    </div>
    <!--商家列表-->

    <!--隐藏分页数据-->
    <input type="hidden" id="page" value="2" />
    <!--隐藏分页数据-->
    <footnav></footnav>
    <!-- 星级选择 -->
    <!-- 向子组件传递 props -->
    <Star v-if="this.show" @shadShow = "closestar($emit)"></Star>
  </div>
</template>

<script>
import top from '@/components/cmp-top'
import calendar from '@/components/cmp-calendar'
import banner from '@/components/cmp-banner'
import shopItem from '@/components/cmp-home-shoplistItem'
import footnav from '@/components/cmp-footer'
import Star from '@/components/cmp-star-choice'
import router from '../router'
// vuex语法糖
// import { mapActions, mapGetters } from 'vuex'

// import '../common/js/city.js'
export default {
  components: { top, calendar, banner, shopItem, footnav, Star },
  data () {
    let inputtext = {
      areaname: '搜索目的地',
      hotelname: '酒店名称',
      price: '价格/星级'
    }
    let shopListArr = []
    let show = false
    return { inputtext, shopListArr, show }
  },
  methods: {
    // 星级、价格弹出层控制
    showstar () {
      this.show = true
    },
    closestar () {
      this.show = false
    },
    // 工行退出 还未导入工行js
    back () {
    // hybrid_app.back()
    },
    // 提交搜索信息
    submit () {
      console.log(this.inputtext)
    },
    // 查询后跳转hotel-list页面
    gotoHotelList () {
      router.push(`/hotelList/a`)
    },
    // 高德定位
    location () {
      let _this = this
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            _this.inputtext.areaname = result.city
          }
        })
      })
    },
    // 判断酒店名称逻辑
    inputActive (value) {
      if (value === '酒店名称') {
        this.inputtext.hotelname = ''
      }
    },
    inputBlur (value) {
      if (!value) {
        this.inputtext.hotelname = '酒店名称'
      } else {
        this.inputtext.hotelname = value
      }
    },
    // 请求酒店列表
    async getShopList (page = 0) {
      return (await this.axios.get('http://192.168.8.114:8080/#/').data)
    }
  },
  async mounted () {
    let _this = this

    // 在页面挂载完成后，将请求数据穿给data中的属性
    if (_this.getShopList(0).length) {
      _this.shopListArr = await _this.getShopList(0)
    } else {
      // 静态模拟数据放到vuex中了 ajax获取到的值直接存入store
    }
  }
}
</script>

<style lang="less">
@redColor: #FF4356;
@blueColor: #2EB6A8;
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
    width: .6rem;
    height: .6rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    img{
      width: 0.65rem;
      position: absolute;
      left: -.062rem;
      top: -.034rem;
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
  /*title*/
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
  /* 推荐商家开始 */
  .home-shopinfo{
    background-color: #f8f8f8;
    .form-title{
      margin: 0;
      padding: 0.4rem 0 0.4rem 0.45rem;
    }
    .home-shoplist{
      margin-top: -.2rem;
      padding-bottom: 1.4rem;
    }
  }
  /* 推荐商家结束 */
}

</style>
