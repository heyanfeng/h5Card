<template>
  <div class="card-01">
    <img class="denglong animated fadeInLeft" src="./imgs/denglong.png">
    <img class="shuzhi animated rotateInUpRight" src="./imgs/shuzhi.png">
    <img class="fontImg animated flip" src="./imgs/fontImg.png">
    <img class="circle" src="./imgs/circle.png">
    <img :src="bgImg" class="bg">
    <div class="words animated fadeInUp" v-text="greet">
    </div>
    <div class="shuimo">
      <img class="shuimo1 animated fadeInUp" src="./imgs/shuimo1.png">
      <img class="shuimo2 animated fadeInUp" src="./imgs/shuimo2.png">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['greet', 'bgImg']
  }
</script>
<style scoped>
  @font-face {
    font-family: wenyuejuzhen;
    src: url('font/01.ttf');
  }
  .card-01 {
    width: 100%;
    height: 33.35rem;
  }
  .bg {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .denglong {
    width: 5rem;
    height: 8.85rem;
    position: absolute;
    left: 1rem;
    top: 2rem;
  }
  .shuzhi {
    width: 15rem;
    height: 10.8rem;
    position: absolute;
    right: -2rem;
    top: -1rem;
  }
  .fontImg {
    width: 10rem;
    height: 10.4rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -5rem;
    margin-top: -5.2rem;
  }
  .circle {
    width: 10rem;
    height: 9.9rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -5rem;
    margin-top: -4.95rem;
    animation-delay: 0.5s;
    animation: circleRotate 2s linear infinite;
  }
  @keyframes circleRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .shuimo1 {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
  .shuimo2 {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    z-index: 2;
    animation-delay: 0.5s;
  }
  .words {
    font-family: wenyuejuzhen;
    font-size: 0.7rem;
    text-indent: 2em;
    line-height: 1.5rem;
    padding: 1rem;
    position: absolute;
    bottom: 4rem;
    color: darkgoldenrod;
    animation-duration: 3s;
  }
</style>
