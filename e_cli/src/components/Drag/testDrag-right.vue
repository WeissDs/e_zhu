<template>
  <div class="table">
    <label for="input1">姓名: </label><input id="input1" type="text" name="" value="" v-model="table.name"  @change="Child"><br/>
    <label for="input2">年龄: </label><input id="input2" type="text" name="" value="" v-model="table.age"><br/>
    <textarea name="name" rows="8" cols="80" v-model="table.text"></textarea>
  </div>
</template>

<script>
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
    'table':function(){
       if(this.fData){
        this.table.age = this.fData.age,
      }
      return table
    }
  },
  methods: {
    Child () {
      this.$emit('addChild', this.table)
    }
  },
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
