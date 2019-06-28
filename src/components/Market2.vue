<template>
    <div class="myStock">
      <ul  v-for="(item,index) in myS" :key=index>
        <li>
            <div class="myStock-info">
              <router-link to="">{{item.s_name}}{{item.s_id}}</router-link>
            </div>
            <div class="myStock-data">
              {{item.s_price}}<br>{{item.s_range}}
            </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Market2",
      data(){
          return{
            myS:[
              {
                  s_name:'东方财富',
                  s_id:'300059',
                  s_price:12.27,
                  s_range:'-2.54%'

              },
              {
                s_name:'东方财富',
                s_id:'300059',
                s_price:12.27,
                s_range:'-2.54%'
              },
            ]
          }

      }
    }
</script>

<style scoped lang="scss">
  .myStock{
    li{
      border-bottom:1px dashed #ccc ;
    }
    &-info{
      width: 30%;
      float: left;
      padding-left: 10px;
      a{
        color: blue;
      }
    }
    &-data{
      width: 65%;
      text-align: right;
      margin-left:30%;
      color: green;
    }
  }
</style>
