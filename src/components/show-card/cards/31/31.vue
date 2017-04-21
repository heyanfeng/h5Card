<template>
  <div class="card-31">
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
  .card-31 {
    width: 18.75rem;
    height: 33.35rem;
    background: #FBFBFB;
  }
  .card-31 img {
    position: absolute;
  }
  .card-31 .bg{
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .card-31 .words {
    padding: 1rem;
    display: inline-block;
    position: absolute;
    font-size: 0.8rem;
    text-indent: 2em;
    line-height: 1.5rem;
    color: whitesmoke;
    z-index: 3;
    top: 50%;
    animation-delay: 1s;
  }
</style>
