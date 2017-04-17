<template>
  <div class="card-02">
    <img src="./imgs/topImg.png" class="topImg animated slideInDown">
    <img src="./imgs/middleImg.png" class="middleImg animated flip">
    <img src="./imgs/tagImg.png" class="tagImg animated bounceInRight">
    <img src="./imgs/bottomImg.png" class="bottomImg animated slideInUp">
    <img src="./imgs/bg.jpg" class="bg">
    <div class="words animated zoomInUp" v-text="greet">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['greet']
  }
</script>
<style scoped>
  .card-02 {
    width: 18.75rem;
    height: 33.35rem;
  }
  .card-02 img {
    position: absolute;
  }
  .card-02 .bg{
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .card-02 .topImg {
    top: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    animation-delay: 1s;
  }
  .card-02 .middleImg {
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 10rem;
    transform: translateY(-50%);
    margin-left: -5rem;
    animation-duration: 1s;
  }
  .card-02 .tagImg {
    top: 40%;
    left: 50%;
    z-index: 1;
    width: 12.5rem;
    transform: translateY(-50%);
    margin-left: -6.25rem;
    animation-delay: 2s;
  }
  .card-02 .bottomImg {
    bottom: 0;
    width: 100%;
    height: auto;
    animation-delay: 1s;
  }
  .card-02 .words {
    position: absolute;
    font-size: 0.7rem;
    text-indent: 2em;
    bottom: 4.5rem;
    padding-left: 5rem;
    line-height: 1.5rem;
    right: 0.5rem;
    color: sienna;
    animation-delay: 2s;
  }
</style>
