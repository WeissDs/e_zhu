<template>
  <div class="hotel-list-outbox">
    <Top v-show="show"></Top>
    <Calendar></Calendar>
    <mt-navbar>
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container>
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="hotel-list">
      <ShopList v-for=""/>
      <ShopList/>
      <ShopList/>
    </div>
  </div>
</template>

<script>
import Top from '@/components/cmp-top'
import Calendar from '@/components/cmp-calendar.vue'
import ShopList from '@/components/cmp-shoplist-shoplistItem.vue'

export default {
  components: { ShopList, Top, Calendar },
  data () {
    let show = true
    return {show}
  },
  methods: {
  },
  async mounted () {
    let _this = this
    window.onscroll = function () {
      let scrollT = document.documentElement.scrollTop
      if (scrollT >= 100) {
        _this.show = false
      } else {
        _this.show = true
      }
    }
  }
}
</script>
<style lang="less">
  .hotel-list-outbox{
    width: 100%;
    background-color: #f5f9fc;
  }
  .calendar-outbox{ margin-top: .9rem; }
</style>
