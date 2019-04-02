<template>
  <div>
    <!-- <div class="cover"></div> -->
    <el-carousel :interval="6000" height="4rem" class="banner">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.idView" class="" alt="">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      imgList: [
        {id: 0, idView: require('../../static/img/nik-lanus-41808-unsplash.jpg')},
        {id: 1, name: '详情', idView: require('../../static/img/photo-1520285774798-2f1616131a68.jpg')},
        {id: 2, name: '推荐', idView: require('../../static/img/photo-1527142879-95b61a0b8226.jpg')}
      ]
    }
  }
}
</script>

<style lang='less'>
.cover{ 
  width: 100%;
  height: 4rem;
  position: absolute;
  z-index: 3;
  background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2),rgba(0,0,0,0));
}
.banner{
  img {
    width: 100%;
  }
  .el-input__inner{
    width: 3rem;
  }
}
</style>
