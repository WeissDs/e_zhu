<template>
  <div>
    <div class="have-no-like" v-if="$store.state.hotelCollect.length==0">
      您还没有收藏任何酒店 !
    </div>
    <ShopItem v-for="(item,index) in hotelCollect" :shopData="item" :key="index"></ShopItem>
    <Foot/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Foot from '../components/cmp-footer.vue'
import ShopItem from '../components/cmp-home-shoplistItem'
export default {
  computed: {
    ...mapState(['hotelCollect'])
  },
  components: { Foot, ShopItem }
}
</script>

<style media="screen">
.have-no-like{
  width: 100%;
  text-align: center;
  padding-top: .5rem;
  font-size: .4rem;
}
</style>
