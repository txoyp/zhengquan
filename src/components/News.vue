<template>
    <div class="news">
        <div class="news-header">资讯</div>
        <div class="news-content">
          <ul>
            <li>
              <router-link to="">新闻标题1</router-link>
            </li>
            <li>
              <router-link to="">新闻标题2</router-link>
            </li>
            <li>
              <router-link to="">新闻标题3</router-link>
            </li>
            <li>
              <router-link to="">新闻标题4</router-link>
            </li>
            <li>
              <router-link to="">新闻标题5</router-link>
            </li>
            <li>
              <router-link to="">新闻标题6</router-link>
            </li>
            <li>
              <router-link to="">新闻标题7</router-link>
            </li>
            <li>
              <router-link to="">新闻标题8</router-link>
            </li>
            <li>
              <router-link to="">新闻标题9</router-link>
            </li>
            <li>
              <router-link to="">新闻标题10</router-link>
            </li>
            <li>
              <router-link to="">新闻标题11</router-link>
            </li>

          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped lang="scss">
  .news{
    width: 160px;
    &-header{
      height: 3rem;
      width: 100%;
      background-color:deepskyblue;
      color: white;
      text-align: center;
      line-height: 3rem;
      letter-spacing: 10px;
      font-size:20px;
      font-weight: bolder;
      border-bottom: 1px solid #000;
    }
    &-content{
      height: 286px;
      padding-top: 6px;
      ul{
        margin-left: 10px;
      }
      a{
        color: blue;
      }
    }
  }
</style>
