<template>
  <div class="card-20">
    <img src="./imgs/bg.png" class="bg">
    <img src="./imgs/avatar.png" class="avatar animated fadeIn">
    <img src="./imgs/left-grass.png" class="left-grass">
    <img src="./imgs/right-grass.png" class="right-grass">
    <img src="./imgs/bottom.png" class="bottom animated fadeInDown">
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
  .card-20 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-20 img {
    position: absolute;
  }
  .card-20 .bg{
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .card-20 .avatar {
    left: 50%;
    top: 4rem;
    width: 10rem;
    margin-left: -5rem;
    z-index: 1;
    animation-delay: 1s;
    animation-duration: 3s;
  }
  .card-20 .left-grass {
    width: 5rem;
    top: 8rem;
    left: 2.5rem;
    z-index: 2;
    transform-origin: 100% 100%;
    animation: left-grass 2s ease-in-out infinite;
    animation-direction: alternate;
    animation-delay: 3s;
  }
  .card-20 .right-grass {
    width: 5rem;
    top: 4rem;
    right: 2.5rem;
    z-index: 2;
    transform-origin: 0 100%;
    animation: right-grass 2s ease-in-out infinite;
    animation-direction: alternate;
    animation-delay: 3s;
  }
  .card-20 .bottom {
    width: 19rem;
    left: 0rem;
    bottom: 4.5rem;
    z-index: 1;
  }
  .card-20 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: brown;
    z-index: 3;
    top: 48%;
    animation-delay: 1s;
  }
  @keyframes left-grass {
    from {
      transform: rotate(-10deg);
    }
    to {
      transform: rotate(10deg);
    }
  }
  @keyframes right-grass {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-10deg);
    }
  }
</style>
