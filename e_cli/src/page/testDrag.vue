<template>
  <div class="" style="">
    <!-- <TestDragRight id="oldOne" @click.native="fn($event.target)" @addChild="getChildData"></TestDragRight> -->
    <TestDragRight id="oldOne" @click.native="fn($event.target)"></TestDragRight>
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
    // fn(e){
    //   console.log(this.datas)
    //   this.right.push(1)
    // },
    // getChildData(msg){
    //   this.datas = msg
    // },
    fn (e) {
      let a = e.cloneNode(true)
      console.log(a)
      let b = document.getElementById('box')
      b.appendChild(a)
    }
  }
}
</script>
