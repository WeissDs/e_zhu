<template>
  <div>
  	<ShopItem v-for="item in $store.state.hotelCollect" :shopData="item" ></ShopItem>
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
