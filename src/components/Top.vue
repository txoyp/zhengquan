<template>
    <div class="top">
        <div class="top-context">
          <ul class="top-context-left">
            <li>欢迎来到证券交易！</li>
            <li>
              <span style="cursor: pointer" @click="$router.push('/login')">{{phone}}</span>
            </li>
            <li>
              <router-link to="/reg">免费注册</router-link>
            </li>
          </ul>
          <div class="top-context-center"></div>
          <ul class="top-context-right">
            <li>
              <router-link to="/">网站首页</router-link>
            </li>
            <li>
              <router-link to="/stockBar">股吧</router-link>
            </li>
            <li class="top-context-right-menu">
              <router-link class="menu" to="">我的菜单<img src="../assets/icon/arrow.png" alt=""></router-link>
              <ul class="top-context-right-menu-list">
                <li>
                  <router-link to="">列表1</router-link>
                </li>
                <li>
                  <router-link to="">列表2</router-link>
                </li>
                <li>
                  <router-link to="">列表3</router-link>
                </li>
                <li>
                  <router-link to="">列表4</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/trade">证券交易</router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "Top",
      data(){
          return{
            //后端传值result 后注释
            // userInfo:{
            //   // phone:
            // }
          }
      },
      computed:{
        ...mapState(['phone']),

      }
    }
</script>

<style scoped lang="scss">
.top{
  z-index: 999;
  position: fixed;
  width: 100%;
  height:3rem;
  background-color: #f5f5f5;
  &-context{
      width: 1000px;
      height:100%;
      margin: 0 auto;
    display: flex;
      &-left{
        width: 28%;
        height: 100%;
        flex: 1;
        li{
          float: left;
          padding: 0.5rem;
          a:hover{
            color: orange;
          }
        }
      }
    &-center{
      height: 100%;
      flex: 1;
    }
      &-right{
        width: 30%;
        height: 100%;
        flex: 0.8;
        li{
          float: left;
          padding: 0.5rem;
          img{
              width:10px;
              height: 10px
          }
          a:hover{
            color: orange;
          }
        }
        &-menu{
          a:hover {
            color: orange;
          }
          &-list{
            border: 1px solid #ccc;
            background: #ffffff;
            border-top: 0;
            position: absolute;
            top:36px;
            right:255px;
            width: 100px;
            display: none;
            li{
              padding: 0 14px;
            }
          }
        }
    }
  }
.top-context-right-menu:hover{
  ul{
    display: block;
  }
  img {
    transform: rotate(90deg);
    transition: transform 0.2s;
  }
}
  a{
      color: #6C6C6C;
  }
}
</style>
