<template>
  <div class="" style="">
    <!-- <TestDragRight id="oldOne" @click.native="fn($event.target)" @addChild="getChildData"></TestDragRight> -->
    <!-- <TestDragRight id="oldOne" @click.native="fn($event.target)"></TestDragRight> -->
    <div id="box" style="position:absolute; top:0; right: 0;">
      <TestDragRight v-for="item in right" :fData="datas"></TestDragRight>
    </div>

      <!-- <draggable :options="{group:'people',animation:150,ghostClass:'sortable-ghost',chosenClass:'chosenClass',scroll:true,scrollSensitivity:200}"
        v-model="list2"
        @change="change"
        @start="start"
        @end="end"
        :move="move"
        style="display: inline-block; width:190px;height: 200px;background: #eee;overflow: auto">
      <li v-for="(item, index) in list2"
          :class="setclass(item,index)"
          :key="index">
        {{item.name}}
      </li>
    </draggable> -->

    <draggable element="ul"
              v-model="list"
              :move="getdata"
              @update="datadragEnd">
      <li v-for="item in list">{{item.name}}</li>
    </draggable>
  </div>
</template>

<script>
import TestDragRight from '@/components/Drag/testDrag-right.vue'
import draggable from 'vue-draggable'
// var obj = null
// Object.freeze(obj)
export default {
  components: { TestDragRight, draggable },
  data () {
    let right = []
    let datas = null
    let list = [
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        },
      ]
    return { right, datas, list }
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
    },
    // 拖拽
    getdata (evt) {
      console.log(evt.draggedContext.element.id)
    },
    datadragEnd (evt) {
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex)
      console.log(this.tags)
    }
  }
}
</script>

<style lang="less">
  li{
      font-size: .1rem;
      list-style: none;
      width: 5rem;
      color: #fff;
      background-color: #666;
      margin-top: .2rem;
      text-align: center;
  }
</style>
