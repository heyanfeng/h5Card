<template>
  <div class="card-50">
    <div class="top">
      <img src="./imgs/flower.png" class="flower animated slideInLeft">
      <img src="./imgs/flower.png" class="flower animated slideInLeft">
      <img src="./imgs/flower1.png" class="flower">
      <img src="./imgs/flower2.png" class="flower">
      <img src="./imgs/flower.png" class="flower animated slideInDown">
      <img src="./imgs/flower1.png" class="flower">
      <img src="./imgs/flower3.png" class="flower animated slideInRight">
      <img src="./imgs/flower.png" class="flower animated slideInRight">
    </div>
    <div class="bottom">
      <img src="./imgs/flower.png" class="flower animated slideInRight">
      <img src="./imgs/flower.png" class="flower animated slideInRight">
      <img src="./imgs/flower1.png" class="flower">
      <img src="./imgs/flower2.png" class="flower">
      <img src="./imgs/flower.png" class="flower animated slideInUp">
      <img src="./imgs/flower1.png" class="flower">
      <img src="./imgs/flower3.png" class="flower animated slideInLeft">
      <img src="./imgs/flower.png" class="flower animated slideInLeft">
    </div>
    <img src="./imgs/bg.jpg" class="bg">
    <div class="words" v-text="greet">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['greet']
  }
</script>
<style scoped>
  .card-50 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-50 img {
    position: absolute;
  }
  .card-50 .bg{
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .card-50 .flower {
    z-index: 1;
  }
  .card-50 .top .flower:nth-child(1) {
    width: 3rem;
    left: -1.2rem;
    top: 6rem;
  }
  .card-50 .top .flower:nth-child(2) {
    width: 3rem;
    left: -0.2rem;
    top: 3rem;
    animation-delay: 1s;
  }
  .card-50 .top .flower:nth-child(3) {
    width: 4rem;
    left: 1rem;
    top: -5rem;
    transform: rotate(110deg);
    animation: slideDown 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards
  }
  .card-50 .top .flower:nth-child(4) {
     width: 4rem;
     left: 4.5rem;
     top: -5rem;
     transform: rotate(180deg);
     animation: slideDown1 1s;
     animation-delay: 3s;
    animation-fill-mode: forwards;
   }
  .card-50 .top .flower:nth-child(5) {
    width: 4rem;
    left: 8rem;
    top: -1rem;
    animation-delay: 4s;
  }
  .card-50 .top .flower:nth-child(6) {
    width: 4rem;
    left: 12rem;
    top: -5rem;
    transform: rotate(210deg);
    animation: slideDown 1s;
    animation-delay: 5s;
    animation-fill-mode: forwards;
  }
  .card-50 .top .flower:nth-child(7) {
    width: 4rem;
    right: -1.5rem;
    top: -0.8rem;
    animation-delay: 6s;
  }
  .card-50 .top .flower:nth-child(8) {
    width: 3rem;
    right: -1rem;
    top: 9rem;
    animation-delay: 7s;
  }
  .card-50 .bottom .flower:nth-child(1) {
    width: 3rem;
    right: -1.2rem;
    bottom: 6rem;
    animation-delay: 8s;
  }
  .card-50 .bottom .flower:nth-child(2) {
    width: 3rem;
    right: -0.2rem;
    bottom: 3rem;
    animation-delay: 9s;
  }
  .card-50 .bottom .flower:nth-child(3) {
    width: 4rem;
    right: 1.5rem;
    bottom: -5rem;
    transform: rotate(-90deg);
    animation: slideDown2 1s;
    animation-delay: 10s;
    animation-fill-mode: forwards;
  }
  .card-50 .bottom .flower:nth-child(4) {
    width: 4rem;
    right: 5rem;
    bottom: -5rem;
    transform: rotate(0deg);
    animation: slideDown3 1s;
    animation-delay: 11s;
    animation-fill-mode: forwards;
  }
  .card-50 .bottom .flower:nth-child(5) {
    width: 4rem;
    left: 6rem;
    bottom: -1rem;
    animation-delay: 12s;
  }
  .card-50 .bottom .flower:nth-child(6) {
    width: 4rem;
    left: 2rem;
    bottom: -5rem;
    transform: rotate(0deg);
    animation: slideDown2 1s;
    animation-delay: 13s;
    animation-fill-mode: forwards;
  }
  .card-50 .bottom .flower:nth-child(7) {
    width: 4rem;
    left: -1.5rem;
    bottom: -0.8rem;
    animation-delay: 14s;
  }
  .card-50 .bottom .flower:nth-child(8) {
    width: 3rem;
    left: -1rem;
    bottom: 9rem;
    animation-delay: 15s;
  }
  .card-50 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: pink;
    z-index: 3;
    bottom: -8rem;
    animation: slideDown4 10s linear;
    animation-delay: 16s;
    animation-fill-mode: forwards;
  }
  @keyframes slideDown {
     from {
       opacity: 0;
       top: -5rem;
     }
     to {
       top: -1rem;
       opacity: 1;
     }
   }
  @keyframes slideDown1 {
    from {
      opacity: 0;
      top: -5rem;
    }
    to {
      opacity: 1;
      top: -0.5rem;
    }
  }
  @keyframes slideDown2 {
    from {
      bottom: -5rem;
    }
    to {
      bottom: -1rem;
    }
  }
  @keyframes slideDown3 {
    from {
      bottom: -5rem;
    }
    to {
      bottom: -0.5rem;
    }
  }
  @keyframes slideDown4 {
    from {
      bottom: -5rem;
    }
    to {
      bottom: 15rem;
    }
  }
</style>
