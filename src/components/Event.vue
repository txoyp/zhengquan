<template>
    <div class="event">
        <div class="event-header">大事提醒</div>
        <div class="event-content">
          <ul v-for="(item,index) in msg" :key="index">
            <router-link to="">
              <li>
                {{item.msg_title}}
                <span>{{item.msg_time}}</span>
              </li>
            </router-link>
          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Event",
        data(){
          return{
              msg:[
                {
                    msg_title:'事件标题1',
                    msg_time:'2019/06/13'
                },
                {
                  msg_title:'事件标题2',
                  msg_time:'2019/06/13'
                },
              ]
          }
        }
    }
</script>

<style scoped lang="scss">
  .event{
    width: 20%;
    height: 49%;
    border: 1px solid #000;
    margin-top: 7px;
    &-header{
      height:13%;
      width:100% ;
      border-bottom: 1px solid #000;
      text-align: center;
      line-height: 3rem;
      letter-spacing: 10px;
      font-size:16px;
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
            margin-left: 40px;
            color: orange;
          }
        }
    }
  }
</style>
