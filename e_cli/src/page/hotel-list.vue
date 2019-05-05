<template>
  <div>
    <Top v-show="show"></Top>
    <div class="hotel-list">
      <ShopList/>
      <ShopList/>
      <ShopList/>
    </div>
  </div>
</template>

<script>
import Top from '@/components/cmp-top'
import ShopList from '@/components/cmp-home-shoplistItem.vue'
import router from '../router'
export default {
  components: { ShopList, Top },
  data () {
    let show = true;
    return {show}
  },
  methods: {
  },
  async mounted () {
    let _this = this;
    window.onscroll = function() {
      let scrollT = document.documentElement.scrollTop
      if (scrollT>=100) {
        _this.show = false;
      }else{
        _this.show = true;
      }
    }
  }
}
</script>
<style lang="less">
  .hotel-list{ margin-top: .9rem; }
</style>
