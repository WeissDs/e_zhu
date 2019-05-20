<template>
  <div>
    <div class="price-start-popup">
      <div class="star-select">
        <p>星级</p>
        <div class="star-row">
        <!--星级列表-->
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
        <div style="clear:both;">

        </div>
        <div class="popup-price-bar">
          <!-- <input type="range" min="0" max="1000" id="rangel" value="0"> -->
          <div>{{cRangeValue}}</div>
          <mt-range
            v-model="rangeValue"
            :min="0"
            :max="70"
            :step="1"
            :bar-height="5">
          </mt-range>
        </div>
      </div>
      <div class="popup-bottom">
        <button id="index_popup_re" class="popup-re" @click="refresh()">重置</button>
        <button id="index_popup_sub" class="popup-sub" @click="close()">完成</button>
      </div>
    </div>
    <div class="shad" @click="close"></div>
  </div>
</template>

<script>
export default {
  data(){
  // range滑块mintUI的value值
  let rangeValue = 0
  // range滑块计算后的balue值
  let resultRangeValue = 0
  return { rangeValue, resultRangeValue }
  },
  computed: {
    cRangeValue: {
      get: function(){
        if(this.rangeValue>60){
          this.resultRangeValue=1000
        }else{
          this.resultRangeValue=Math.floor(this.rangeValue/10)*100
        }
        return this.resultRangeValue
      },
      set: function(newVal){
        this.resultRangeValue=newVal
      }
    }
  },
  methods: {
    refresh(){
      console.log(this.resultRangeValue )
      this.rangeValue = 0
      this.resultRangeValue = 0
    },
    // 使用emit 改变父组件的show的值
    close () {
      this.$emit('shadShow', '可以向父组件传参')
    }
  },
  props: ['show'],
  mounted () {
    // console.log(11,this.show1)
  }
}
</script>

<style lang="less">
  /* 弹出层 */
  .shad{ width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: rgba(0,0,0,0.3); z-index: 998; }
  .price-start-popup{ width: 92%; /* height: 4.9rem; */ background-color: #fff; border-radius: 8px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 999;  }
  .price-start-popup p{ font-size: .3rem; color: #000; font-weight: bold; margin: 0 0 .2rem .09rem; }
  /* 弹出层 星级和价格选择 */
  .price-start-popup .star-select{ padding: .3rem; }
  .price-start-popup .price_select{ padding: 0 .3rem; margin-top: .3rem; }
  .price-start-popup .price_select{ padding-top:0; }
  .price-start-popup .price_select .popup-price-section{ height: .8rem; text-align: center; padding-top: .08rem; font-size: 0; }
  .price-start-popup .price_select .popup-price-section::after{ content: ''; height: 0; display: inline-block; clear: both; visibility:hidden;  }
  .price-start-popup .price_select .popup-price-section li{ float: left; margin-left: .3rem; }
  .price-start-popup .price_select .popup-price-section li:nth-child(1){ margin-left: .15rem; }
  .price-start-popup .price_select .popup-price-section li p.red{ color: #dd2726; }
  .price-start-popup .price_select .popup-price-section li span.red{ background-color: #dd2726; }
  .price-start-popup .price_select .popup-price-section li p{ font-size: .24rem; margin: 0; line-height: .3rem; }
  .price-start-popup .price_select .popup-price-section span{ margin-top: .3rem; width: .02rem; height: .2rem; background-color: #000; display: inline-block; }
  .price-start-popup .price_select .popup-price-bar{ border: none; width: 95%; margin: .2rem auto; }

  .price-start-popup .star-item,.price-start-popup .star-item-clear{ width: 1.3rem; height: .6rem; border: 1px solid #d2d2d2; border-radius: 2px; color: #666;margin: 0 .086rem .12rem .086rem; font-size: .26rem; text-align: center; line-height: .6rem; display: inline-block; }
  .price-start-popup .active{ border: 1px solid #dd2726; }
  /* 弹出层 底部 */
  .price-start-popup .popup-bottom{ height: 1.18rem; background-color: #fafafa; border-radius: 0 0 8px 8px;  padding: 0 .3rem; }
  .price-start-popup .popup-bottom .popup-re{ width: 1.38rem; height: .6rem; font-size: .26rem; color: #666; border-radius: 4px; border: 1px solid #d2d2d2; margin-top: .3rem; float: left; }
  .price-start-popup .popup-bottom .popup-sub{ width: 1.38rem; height: .6rem; font-size: .26rem; border-radius: 4px; background-color: #dd2726; color: #fff;  margin-top: .3rem; float: right; }
</style>
