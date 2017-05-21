<template>
  <div class="card-03">
    <img src="./imgs/topLeft.png" class="topLeft animated slideInDown">
    <img src="./imgs/topLeftLine.png" class="topLeftLine animated slideInDown">
    <img src="./imgs/topRight.png" class="topRight animated slideInRight">
    <img src="./imgs/circle.png" class="middleCircle animated rollIn">
    <img src="./imgs/cloud1.png" class="cloud1 animated fadeInRight">
    <img src="./imgs/cloud1.png" class="cloud2 animated fadeInRight">
    <img src="./imgs/cloud2.png" class="cloudBig animated fadeInRight">
    <img src="./imgs/color2.png" class="color2Img animated fadeIn">
    <img src="./imgs/color1.png" class="color1Img animated fadeIn">
    <img src="./imgs/bottomFlower.png" class="bottomFlower animated slideInLeft">
    <img src="./imgs/bottomleft.png" class="bottomLeft animated slideInUp">
    <img src="./imgs/flower1.png" class="flower1Img animated slideInUp">
    <img src="./imgs/flower2.png" class="flower2Img animated slideInUp">
    <img :src="bgImg" class="bg">
    <div class="words animated zoomInUp" v-text="greet">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['greet', 'bgImg']
  }
</script>
<style scoped>
  .card-03 {
    width: 18.75rem;
    height: 33.35rem;
  }
  .card-03 img {
    position: absolute;
  }
  .card-03 .bg{
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .card-03 .topLeft {
    top: 0;
    left: 0;
    z-index: 1;
    width: 12rem;
    height: auto;
  }
  .card-03 .topLeftLine {
    top: 0;
    left: 0;
    z-index: 0;
    width: 2.5rem;
    height: auto;
    animation-delay: 1s;
  }
  .card-03 .topRight {
    top: 0;
    right: 0;
    z-index: 1;
    width: 4rem;
  }
  .card-03 .middleCircle {
    top: 50%;
    left: 50%;
    margin-left: -9rem;
    margin-top: -8.95rem;
    width: 18rem;
    z-index: 1;
    animation-duration: 1s;
  }
  .card-03 .cloud1 {
    top: 18rem;
    left: 50%;
    width: 4rem;
    z-index: 1;
    animation-delay: 1s;
  }
  .card-03 .cloud2 {
    top: 19rem;
    left: 12rem;
    width: 4rem;
    z-index: 2;
    animation-delay: 2s;
  }
  .card-03 .cloudBig {
    top: 19rem;
    left: 4rem;
    width: 6rem;
    z-index: 3;
    animation-delay: 3s;
  }
  .card-03 .color2Img {
    top: 50%;
    z-index: 0;
    width: 100%;
    transform: translateY(-50%);
    animation-delay: 1.5s;
  }
  .card-03 .color1Img {
    bottom: 5rem;
    width: 100%;
    height: auto;
    z-index: 0;
    animation-delay: 1s;
  }
  .card-03 .bottomLeft {
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 0;
  }
  .card-03 .bottomFlower {
    bottom: 0;
    left: 0;
    width: 8rem;
    height: auto;
    z-index: 2;
    animation-delay: 1s;
  }
  .card-03 .flower1Img {
    bottom: 0;
    right: 0;
    width: 2.5rem;
    height: auto;
    animation-delay: 0.5s;
  }
  .card-03 .flower2Img {
    bottom: 0;
    right: 2.5rem;
    width: 5rem;
    height: auto;
    animation-delay: 1s;
  }
  .card-03 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.7rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: seagreen;
    z-index: 3;
    animation-delay: 3.5s;
  }
</style>
