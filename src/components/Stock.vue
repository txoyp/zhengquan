<template>
    <div class="stock">
        <div class="stock-header">热门股票</div>
        <div class="stock-content">
          <div class="stock-content-left">
              <ul class="stock-content-left-header">
                <li style="border-right: 1px solid #000">代码</li>
                <li style="border-right: 1px solid #000">名称</li>
                <li style="border-right: 1px solid #000">最新价</li>
                <li>涨跌幅</li>
              </ul>
            <ul class="stock-content-left-content" v-for="(item,index) in stock" :key="index">
              <li style="color: red">{{item.id}}</li>
              <li>{{item.name}}</li>
              <li style="color: orange">{{item.price}}</li>
              <li style="color: green">{{item.range}}%</li>
            </ul>
          </div>
          <div class="stock-content-right">
              <div class="stock-content-right-header">人气用户</div>
              <div class="stock-content-right-content">
                <ul v-for="(item,index) in people" :key="index">
                  <router-link to="/">
                    <li>
                      {{item.people_name}}
                      <span><span>吧龄：</span>{{item.people_age}}</span>
                    </li>
                  </router-link>
                </ul>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import URL from '@/service.config.js'
    export default {
        name: "Stock",
        data(){
          return{
            people:[
              {
                people_name:'用户1',
                people_age:'4年'
              },
              {
                people_name:'用户2',
                people_age:'4.5年'
              },
            ],
              stock:[
                // {
                //     stock_id:'000001',
                //     stock_name:'东方财富',
                //     stock_lastPrice:2.95,
                //     stock_range:'-2.32%'
                // },
                // {
                //   stock_id:'000002',
                //   stock_name:'东方财富',
                //   stock_lastPrice:2.95,
                //   stock_range:'-2.32%'
                // },
              ]
          }
        },
      created(){
          //热门股票
        let url1 = URL.getStockItem;
          axios.get(url1).
          then(res =>{
            console.log(res);
            this.stock = res.data;

          }).catch(err => {
            console.log(err);
          });
      }
    }
</script>

<style scoped lang="scss">
  .stock{
    margin-top: 16px;
    height:30rem;
    &-header{
      height: 8%;
      line-height: 30px;
      font-size: 16px;
      padding-left: 10px;
      color: red;
    }
    &-content{
      height: 92%;
      &-left{
        width: 80%;
        height: 100%;
        float: left;
        border:1px solid #000;
        &-header{
          display: flex;
          li{
            flex: 1;
            height: 3rem;
            text-align: center;
            line-height: 3rem;
            border-bottom:1px solid #000;
            font-size: 16px;
          }
        }
        &-content{
          display: flex;
          li{
            flex: 1;
            height: 3rem;
            text-align: center;
            line-height: 3rem;
            border-bottom:1px dashed #ccc;
          }
        }
      }
      &-right{
        width: 19%;
        height: 100%;
        border:1px solid #000;
        float: right;
        &-header{
          height: 11%;
          line-height: 36px;
          font-size: 16px;
          text-align: center;
          border-bottom: 1px solid #000;
        }
        &-content{
          a{
            color: blue;
          }
          li{
            height:3rem;
            border-bottom:1px dashed #ccc ;
            line-height: 3rem;
            padding-left: 5px;
            span{
              margin-left: 30px;
              color: orange;
              span{
                color: black;
              }
            }
          }
        }
      }
    }
  }
</style>
