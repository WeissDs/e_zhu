<template>
  <div>
    <div class="have-no-like" v-if="$store.state.hotelCollect.length==0">
      您还没有收藏任何酒店 !
    </div>
    <ShopItem v-for="(item,index) in $store.state.hotelCollect" :shopData="item" :key="index"></ShopItem>
    <Foot/>
  </div>
</template>

<script>
import Foot from '../components/cmp-footer.vue'
import ShopItem from '../components/cmp-home-shoplistItem'
export default {
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
