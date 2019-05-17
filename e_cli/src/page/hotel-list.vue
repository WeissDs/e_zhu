<template>
  <div class="hotel-list-outbox">
    <Top v-show="show"></Top>
    <Calendar></Calendar>
    <div class="hotel-list">
      <ShopList/>
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
