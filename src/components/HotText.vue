<template>
    <div class="hotText">
      <div class="hotText-header">热门文章</div>
      <div class="hotText-content">
        <ul>
          <li>
            <router-link to="">文章标题1</router-link>
          </li>
          <li>
            <router-link to="">文章标题2</router-link>
          </li>
          <li>
            <router-link to="">文章标题3</router-link>
          </li>
          <li>
            <router-link to="">文章标题4</router-link>
          </li>
          <li>
            <router-link to="">文章标题5</router-link>
          </li>
          <li>
            <router-link to="">文章标题6</router-link>
          </li>
          <li>
            <router-link to="">文章标题7</router-link>
          </li>
          <li>
            <router-link to="">文章标题8</router-link>
          </li>
          <li>
            <router-link to="">文章标题9</router-link>
          </li>
          <li>
            <router-link to="">文章标题10</router-link>
          </li>
          <li>
            <router-link to="">文章标题11</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HotText"
    }
</script>

<style scoped lang="scss">
  .hotText{
    width: 160px;
    height:350px;
    border:1px solid #000;
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
      ul{
        margin-left: 10px;
      }
      a{
        color: blue;
      }
    }
  }
</style>
