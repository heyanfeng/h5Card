<template>
  <div class="card-22">
    <img src="./imgs/pendant.png" class="pendant animated swing">
    <img src="./imgs/pendant1.png" class="pendant1">
    <img src="./imgs/pendant2.png" class="pendant2">
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
  .card-22 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-22 img {
    position: absolute;
  }
  .card-22 .bg{
    width: 100%;
    height: 100%;
  }
  .card-22 .pendant {
    width: 100%;
    top: 10rem;
    z-index: 1;
    animation-duration: 2s;
  }
  .card-22 .pendant1 {
    width: 2rem;
    top: 11.3rem;
    left: 1.8rem;
    z-index: 1;
    animation: 2s knot-hing 2s ease-in-out infinite;
    animation-direction: alternate;
  }
  .card-22 .pendant2 {
    width: 2.5rem;
    top: 10.5rem;
    right: 3.5rem;
    z-index: 1;
    animation: 2s knot-hing 2s ease-in-out infinite;
    animation-direction: alternate;
  }
  .card-22 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: cadetblue;
    z-index: 3;
    top: 55%;
    animation-delay: 1s;
  }
</style>
