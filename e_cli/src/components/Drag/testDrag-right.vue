<template>
  <div class="table" @click="Child">
    <!-- <label for="input1">姓名: </label><input id="input1" type="text" name="" value="" v-model="cTable.name"  @change="Child"><br/> -->
    <label for="input1">姓名: </label><input id="input1" type="text" name="" value="" v-model="cTable.name"><br/>
    <label for="input2">年龄: </label><input id="input2" type="text" name="" value="" v-model="cTable.age"><br/>
    <textarea name="name" rows="8" cols="80" v-model="cTable.text"></textarea>
  </div>
</template>

<script>
// Object.freeze(this.table)
export default {

  data () {
    let table = {
      name: 1,
      age: 2,
      text: 3
    }
    return { table }
  },
//  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  computed:{
    cTable() {
      let result = this.table
      if(this.fData){
        result = this.fData
      }
      return result
    }
    // 'cTable': {
    //   get: function () {
    //     return this.table
    //   },
    //   set: function (newValue) {
    //     this.table.name = this.fData.name
    //   }
    // }
  },
  methods: {
    Child () {
      this.$emit('addChild', this.table)
    }
  },
  // mounted: {
    
  // },
  props: ['fData']
}

</script>

<style lang="less">
  .table{
    padding: .2rem;
    font-size: .15rem;
    label{ color: red; }
    input{ width: 2rem; height: .2rem; margin-top: .2rem; }
    #input1{ color: blue; }
    textarea{ width: 2.5rem; margin-top: .2rem; }
  }
</style>
