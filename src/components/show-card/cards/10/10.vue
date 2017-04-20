<template>
  <div class="card-11">
    <img src="./imgs/top.png" class="topImg animated slideInDown">
    <img src="./imgs/circle.png" class="circle">
    <img src="./imgs/middle-word.png" class="middle-word animated flip">
    <img src="./imgs/bottom.png" class="bottomImg animated slideInUp">
    <img src="./imgs/bg.jpg" class="bg">
    <div class="words animated lightSpeedIn" v-text="greet">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['greet']
  }
</script>
<style scoped>
  .card-11 {
    width: 18.75rem;
    height: 33.35rem;
  }
  .card-11 img {
    position: absolute;
  }
  .card-11 .bg{
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .card-11 .bottomImg {
    bottom: -2rem;
    left: -1rem;
    width: 20.7rem;
    animation-delay: 1s;
  }
  .card-11 .topImg{
    width: 25rem;
    top: -8rem;
    left: 0;
    animation-delay: 1s;
  }
  .card-11 .circle{
    width: 15rem;
    top: 50%;
    left: 50%;
    margin-top: -7.5rem;
    margin-left: -7.5rem;
    animation: circleRotate 2s linear infinite;
  }
  .card-11 .middle-word{
    top: 50%;
    left: 50%;
    width: 12rem;
    margin-left: -6rem;
    margin-top: -5.1rem;
    /*animation-delay: 1s;*/
  }
  .card-11 .words {
    position: absolute;
    width: 15rem;
    height: 8rem;
    bottom: 3em;
    overflow: hidden;
    right: 0;
    font-size: 0.7rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: fuchsia;
    z-index: 3;
    animation-delay: 3s;
  }
  @keyframes circleRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
