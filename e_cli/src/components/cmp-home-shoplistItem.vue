<template>
  <div>
    <div class="shoplist-item">
      <div class="shoplist-img">
        <img src="../../static/img/timg.jpg" />
      </div>
      <div class="shoplist-content">
        <span></span>
        <p><p/>
        <p></p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .qiao_shop_content span{
    color: #333;
    font-size: 14px;
  }
  .shoplist-item {
    width: 90%;
    display: flex;
    margin: .2rem auto 0;
    border-bottom: 1px solid #F1F1F6;
    .shoplist-img {
      width: 100%;
      margin-left: 5px;
      height: 2.6rem;
      overflow: hidden;
      border-radius: 5px;
      img{
        width: 100%;
      }
    }
    .shoplist-content {}
  }
</style>
