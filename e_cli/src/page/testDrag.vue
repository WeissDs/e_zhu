<template>
  <div class="" style="">
    <TestDragRight @click.native="fn($event.target)" @addChild="getChildData"></TestDragRight>
    <div id="box" style="position:absolute; top:0; right: 0;">
      <TestDragRight v-for="item in right" :fData="datas"></TestDragRight>
    </div>
  </div>
</template>

<script>
import TestDragRight from '@/components/Drag/testDrag-right.vue'
// var obj = null
// Object.freeze(obj)
export default {
  components: { TestDragRight },
  data () {
    let right = []
    let datas = null
    return { right, datas }
  },
  methods: {
    fn(e){
      console.log(this.datas)
      this.right.push(1)
    },
    getChildData(msg){
      this.datas = msg
    }
  }
}
</script>
