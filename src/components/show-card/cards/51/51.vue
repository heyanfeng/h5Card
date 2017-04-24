<template>
  <div class="card-51">
    <img src="./imgs/bg.jpg" class="bg">
    <img src="./imgs/shape.png" class="sharp1">
    <img src="./imgs/shape.png" class="sharp2">
    <img src="./imgs/shape.png" class="sharp3">
    <img src="./imgs/shape.png" class="sharp4">
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
  .card-51 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-51 img {
    position: absolute;
  }
  .card-51 .bg{
    width: 100%;
    height: 100%;
  }
  .card-51 .sharp1{
    left: -0.9rem;
    height: 20rem;
    transform-origin: 50% 0;
    animation: knot-hing 2s ease-in-out infinite;
    animation-direction: alternate;
  }
  .card-51 .sharp2{
    top: -12rem;
    left: 5rem;
    width: 3.5rem;
    transform-origin: 50% 0;
    animation: knot-hing 2s ease-in-out infinite;
    animation-direction: alternate;
  }
  .card-51 .sharp3{
    top: -5rem;
    left: 12rem;
    width: 2.5rem;
    transform-origin: 50% 0;
    animation: knot-hing 2s ease-in-out infinite;
    animation-direction: alternate;
  }
  .card-51 .sharp4{
    top: -5rem;
    right: -0.5rem;
    width: 4rem;
    transform-origin: 50% 0;
    animation: knot-hing 2s ease-in-out infinite;
    animation-direction: alternate;
  }
  .card-51 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: black;
    z-index: 3;
    top: 60%;
    animation-delay: 1s;
  }
</style>
