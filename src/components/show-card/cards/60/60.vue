<template>
  <div class="card-60">
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
  .card-60 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-60 .bg{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .card-60 .words {
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
