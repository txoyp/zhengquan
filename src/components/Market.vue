<template>
  <div class="market" v-model="tabView">
    <div class="market-header">
      <div :class="{true:isTrue}" class="market-header-left" @click="toSim(1)">
        <span>行情报价</span>
      </div>
      <div :class="{false:isFalse}" class="market-header-right" @click="toSim(2)">
        <span>资金流分析</span>
      </div>
    </div>
    <div class="market-content">
      <component :is="tabView"></component>
    </div>
  </div>
</template>

<script>
  import Market1 from './Market1'
  import Market2 from './Market2'


  export default {
        name: "Market",
        components:{
          Market1,Market2
        },
      data() {
        return {
          tabView: 'Market1',
          isTrue:false,
          isFalse:true,
        };
      },
      methods: {
        toSim(index){
          this.tabView = `Market${index}`;
          this.isTrue = !this.isTrue;
          this.isFalse = !this.isFalse;
        },
      }
    }
</script>

<style scoped lang="scss">
  .true{
    border-bottom: 1px solid #000;
  }
  .false{
    border-bottom: 1px solid #000;
  }
  .market{
    width: 19%;
    height: 100%;
    margin-right:0;
    margin-top: -26.2%;
    float: right;
    border:1px solid #000;
    &-header{
      height:7%;
      display: flex;
      &-left{
        flex: 1;
        text-align: center;
        line-height: 36px;
        border-right: 1px solid #000;
        cursor:pointer;
      }
      &-right{
        flex: 1;
        text-align: center;
        line-height: 36px;
        cursor:pointer;
      }
    }
  }
</style>
