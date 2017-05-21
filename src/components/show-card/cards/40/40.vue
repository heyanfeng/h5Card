<template>
  <div class="card-40">
    <img :src="bgImg" class="bg">
    <img src="./imgs/Birthday.png" class="birthday-words animated flip">
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
  .card-40 {
    width: 18.75rem;
    height: 33.35rem;
  }
  .card-40 img {
    position: absolute;
  }
  .card-40 .bg{
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .card-40 .birthday-words {
    width: 18.6rem;
    bottom: 5rem;
  }
  .card-40 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: #fff;
    z-index: 3;
    top: 10%;
    animation-delay: 1s;
  }
</style>
