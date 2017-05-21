<template>
  <div class="card-04">
    <img src="./imgs/top-flower.png" class="top-flower animated slideInDown">
    <img src="./imgs/knot.png" class="knot">
    <img src="./imgs/knot-s.png" class="knot-s1 knot-s animated fadeIn">
    <img src="./imgs/knot-s.png" class="knot-s2 knot-s animated fadeIn">
    <img src="./imgs/knot-s.png" class="knot-s3 knot-s animated fadeIn">
    <img src="./imgs/people1.png" class="people1 animated fadeIn">
    <img src="./imgs/people2.png" class="people2 animated fadeIn">
    <img src="./imgs/people3.png" class="people3 animated fadeIn">
    <img src="./imgs/bottom-flower.png" class="bottom-flower animated slideInUp">
    <img src="./imgs/circle.png" class="bottom-circle animated fadeInUp">
    <img src="./imgs/flower.png" class="flower animated fadeIn">
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
  .card-04 {
    width: 18.75rem;
    height: 33.35rem;
  }
  .card-04 img {
    position: absolute;
  }
  .card-04 .bg{
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .card-04 .top-flower{
    width: 8rem;
    top: 0;
    right: 0;
  }
  .card-04 .knot{
    width: 8rem;
    top: 2rem;
    left: 5rem;
    animation-delay: 2s;
  }
  .card-04 .knot-s{
    width: 2rem;
    animation-delay: 2s;
    transform-origin: 50% 0;
    animation: knot-hing 2s ease-in-out infinite;
    animation-direction: alternate;
  }
  .card-04 .knot-s1{
    top: 10.4rem;
    left: 5rem;
    animation-delay: 2s;
  }
  .card-04 .knot-s2{
    top: 10.4rem;
    left: 11rem;
    animation-delay: 2s;
  }
  .card-04 .knot-s3{
    top: 24.7rem;
    left: 8rem;
    animation-delay: 2s;
  }
  .card-04 .people1{
    width: 2rem;
    top: 14rem;
    left: 2.5rem;
    animation-delay: 1s;
  }
  .card-04 .people2{
    width: 3rem;
    top: 16.5rem;
    left: 2rem;
    animation-delay: 2s;
  }
  .card-04 .people3{
    width: 2rem;
    top: 20rem;
    left: 2.5rem;
    animation-delay: 3s;
  }
  .card-04 .bottom-flower{
    width: 20rem;
    bottom: 0;
    left: -8rem;
  }
  .card-04 .bottom-circle{
    width: 20rem;
    right: -10rem;
    bottom: -10rem;
    animation: circleRotate 10s linear infinite;
    animation-delay: 2s;
  }
  .card-04 .flower{
    width: 6rem;
    right: 0;
    bottom: 0;
    animation-delay: 1s;
  }
  .card-04 .words {
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
  @keyframes circleRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes knot-hing {
    from {
      transform: rotate(-10deg);
    }
    to {
      transform: rotate(10deg);
    }
  }
</style>
