<template>
  <div class="card-21">
    <img src="./imgs/bg.jpg" class="bg">
    <img src="./imgs/white-point.png" class="white-point animated fadeIn infinite">
    <img src="./imgs/foam.png" class="foam animated fadeOut infinite">
    <img src="./imgs/tree.png" class="tree animated rotateIn">
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
  .card-21 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-21 img {
    position: absolute;
  }
  .card-21 .bg{
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .card-21 .white-point{
    width: 100%;
    z-index: 1;
    animation-duration: 2s;
    animation-direction: alternate;
  }
  .card-21 .foam {
    width: 18.75rem;
    z-index: 2;
    animation-duration: 2s;
    animation-direction: alternate;
  }
  .card-21 .tree {
    width: 16rem;
    left: 50%;
    top: 10%;
    margin-left: -8rem;
    z-index: 3;
  }
  .card-21 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: cadetblue;
    z-index: 3;
    top: 70%;
    animation-delay: 1s;
  }
</style>
