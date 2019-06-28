<template>
  <div class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in Img" :key="index">
        <h3><img id="img" :src="item.url" alt=""></h3>
      </el-carousel-item>
    </el-carousel>
    <div class="home-count">
      <router-link to="/count"><h2>开户</h2></router-link>
    </div>
    <div class="home-today">
      <h2>今开、振幅</h2>
    </div>
    <div class="home-pic">
      <MyInfo></MyInfo>
      <Market></Market>
      <div class="home-pic-trendPic1"></div>
      <Event></Event>
      <div class="home-pic-trendPic2"></div>
    </div>
    <div class="home-stock">
        <Stock></Stock>
    </div>
    <div class="home-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import MyInfo from '../components/MyInfo'
import Market from '../components/Market'
import Event from '../components/Event'
import Stock from '../components/Stock'
import Footer from '../components/Footer'
import Top from '../components/Top'
import News from '../components/News'
import HotText from '../components/HotText'
import lb1 from '../assets/img/1.jpg'
import lb2 from '../assets/img/2.jpg'
import lb3 from '../assets/img/3.jpg'
import lb4 from '../assets/img/4.jpg'


export default {
  name: 'home',
  components:{
    MyInfo,Market,Event,Stock,Footer,Top,News,HotText
  },
  data(){
    return{
      Img:[
        {
          url:lb1
        },
        {
          url:lb2
        },
        {
          url:lb3
        },
        {
          url:lb4
        }
      ]
    }
  }
};
</script>
<style lang="scss">
  #img{
    width: 1000px;
  }
  .home{
    margin:36px auto;
    width: 1000px;
    position: relative;
    &-count{
      height: 6rem;
      border: 1px solid #000;
    }
    &-today{
      margin-top: 10px;
      height: 13rem;
      border: 1px solid #ff0000;
    }
    &-pic{
      height:44rem;
      margin-top: 10px;
      position: relative;
      &-trendPic1{
        height:49%;
        width: 60%;
        position: absolute;
        top:0;
        left:20.5%;
        border: 1px solid #000000;
      }
      &-trendPic2{
        height:49%;
        width: 60%;
        position: absolute;
        top:50.8%;
        left:20.5%;
        border: 1px solid #000000;
      }
    }
   }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
