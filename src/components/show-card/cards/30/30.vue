<template>
  <div class="card-30">
    <img src="./imgs/snow.png" class="snow animated slideInDown">
    <img src="./imgs/word.png" class="word animated fadeIn">
    <img src="./imgs/deer.png" class="deer animated slideInLeft">
    <img src="./imgs/back.png" class="back animated slideInUp">
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
  .card-30 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-30 img {
    position: absolute;
  }
  .card-30 .bg{
    width: 100%;
    height: 100%;
  }
  .card-30 .snow{
    width: 20rem;
    z-index: 1;
    animation-delay: 1s;
    animation-duration: 2s;
  }
  .card-30 .word {
    width: 4rem;
    top: 2rem;
    left: 2rem;
    z-index: 1;
    animation-delay: 1s;
    animation-duration: 2s;
  }
  .card-30 .back {
    width: 28rem;
    bottom: 0;
    margin-left: -5rem;
    z-index: 1;
    animation-delay: 1s;
    animation-duration: 2s;
  }
  .card-30 .deer {
    width: 8rem;
    z-index: 2;
    bottom: 1rem;
    animation-delay: 2s;
    animation-duration: 2s;
  }
  .card-30 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: cornflowerblue;
    z-index: 3;
    top: 50%;
    animation-delay: 1s;
  }
</style>
