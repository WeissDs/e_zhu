<template>
  <div>
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
