<template>
    <div class="myInfo" v-model="tabView">
      <div class="myInfo-header">
        <div :class="{true:isTrue}" class="myInfo-header-left" @click="toSim(1)">
            <span>我的自选股</span>
        </div>
        <div :class="{false:isFalse}" class="myInfo-header-right" @click="toSim(2)">
            <span>最近访问</span>
        </div>
      </div>
      <div class="myInfo-content">
          <component :is="tabView"></component>
      </div>
    </div>
</template>

<script>
  import Simple1 from './Simple1'
  import Simple2 from './Simple2'

  export default {
        name: "MyInfo",
        components:{
          Simple1,
          Simple2
        },
        data() {
          return {
            tabView: 'Simple1',
            isTrue:false,
            isFalse:true,
          };
        },
        methods: {
          toSim(index){
            this.tabView = `Simple${index}`;
            this.isTrue = !this.isTrue;
            this.isFalse = !this.isFalse;
          },
          handleClick(tab, event) {
            console.log(tab, event);
          },
          checkedItem(index){
            this.isActive=index;
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
.myInfo{
  width: 20%;
  height: 49%;
  border: 1px solid #000;
  &-header{
    height:14%;
    width:100% ;
    display: flex;
    float: left;
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
