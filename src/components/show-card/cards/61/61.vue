<template>
  <div class="card-61">
    <img :src="bgImg" class="bg">
    <img src="./imgs/top.png" class="top animated slideInDown">
    <img src="./imgs/fish3.png" class="fish3 animated slideInUp">
    <img src="./imgs/fish2.png" class="fish2 animated fadeIn">
    <img src="./imgs/fish1.png" class="fish1 animated fadeIn">
    <img src="./imgs/fish.png" class="fish animated fadeIn">
    <img src="./imgs/flower3.png" class="flower3 animated slideInUp">
    <img src="./imgs/flower2.png" class="flower2 animated slideInUp">
    <img src="./imgs/flower1.png" class="flower1 animated fadeIn">
    <img src="./imgs/flower.png" class="flower animated fadeIn">
    <div class="words animated fadeInUp" v-text="greet">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['greet', 'bgImg']
  }
</script>
<style scoped>
  .card-61 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-61 img {
    position: absolute;
  }
  .card-61 .bg{
    width: 100%;
    height: 100%;
  }
  .card-61 .top{
    width: 15rem;
    left: 50%;
    margin-left: -7.5rem;
  }
  .card-61 .fish {
    width: 3rem;
    bottom: 7rem;
    left: 10rem;
    animation-delay: 3s;
  }
  .card-61 .fish1{
    width: 4rem;
    bottom: 2rem;
    left: 8rem;
    animation-delay: 4s;
  }
  .card-61 .fish2{
    width: 3.5rem;
    bottom: 2.5rem;
    left: 12rem;
    animation-delay: 5s;
  }
  .card-61 .fish3 {
    width: 5rem;
    bottom: 1rem;
    left: 8rem;
    animation-delay: 3s;
  }
  .card-61 .flower3{
    width: 8rem;
    left: 0;
    bottom: 0;
  }
  .card-61 .flower2{
    width: 5rem;
    right: 0;
    bottom: 0;
  }
  .card-61 .flower1{
    width: 1.5rem;
    right: 2rem;
    bottom: 3rem;
    animation-delay: 1s;
  }
  .card-61 .flower{
    width: 3rem;
    right: 3rem;
    bottom: 0;
    animation-delay: 2s;
  }
  .card-61 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: black;
    z-index: 3;
    top: 50%;
    animation-delay: 6s;
    animation-duration: 3s;
  }
</style>
