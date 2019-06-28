<template>
  <div id="app">
    <Top></Top>
    <!--<News class="news"></News>-->
    <!--<HotText class="text"></HotText>-->
    <router-view />
  </div>
</template>

<script>
  import Top from '@/components/Top.vue'
  import News from '@/components/News.vue'
  import HotText from '@/components/HotText.vue'

  export default {
    components: {
      Top,News,HotText
    },
  }
</script>

<style lang="scss">
#app{
  overflow: hidden;
  position: relative;
  .news{
      margin-top: 36px;
      float: right;
      border: 1px solid #000;
  }
  .text{
    position: absolute;
    top: 380px;
    right:0;
  }
}
</style>
