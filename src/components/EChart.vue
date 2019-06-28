<template>
  <div id="main">
    <!--<button>我是按钮</button>-->
    <div id='myChart'
         ref="myChart"
    >
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'echarts',
    data() {
      return {
        stockName: '',
        stockCode: '',
        stockData: '',
        resData: '',
        echartsOption: {
          title: {
            text: '上证指数',
            left: 0
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
          },
          xAxis: {
            type: 'category',
            data: [],
            scale: true,
            boundaryGap: false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
          },
          yAxis: {
            scale: true,
            splitArea: {
              show: true
            }
          },
          dataZoom: [
            {
              type: 'inside',
              start: 30,
              end: 70
            },
            {
              show: true,
              type: 'slider',
              y: '90%',
              start: 0,
              end: 75
            }
          ],
          series: [
            {
              name: '日K',
              type: 'k',
              data: [],
              itemStyle: {
                normal: {
                  color: '#ec0000',
                  color0: '#00da3c',
                  borderColor: '#8A0000',
                  borderColor0: '#008F28'
                }
              },
              markPoint: {
                label: {
                  normal: {
                    formatter: function (param) {
                      return param != null ? Math.round(param.value) : ''
                    }
                  }
                },
                data: [
                  {
                    name: 'highest value',
                    type: 'max',
                    valueDim: 'highest'
                  },
                  {
                    name: 'lowest value',
                    type: 'min',
                    valueDim: 'lowest'
                  },
                  {
                    name: 'average value on close',
                    type: 'average',
                    valueDim: 'close'
                  }
                ],
                tooltip: {
                  formatter: function (param) {
                    return param.name + '<br>' + (param.data.coord || '')
                  }
                }
              },
              markLine: {
                symbol: ['none', 'none'],
                data: [
                  [
                    {
                      name: 'from lowest to highest',
                      type: 'min',
                      valueDim: 'lowest',
                      symbol: 'circle',
                      symbolSize: 10,
                      label: {
                        normal: {show: false},
                        emphasis: {show: false}
                      }
                    },
                    {
                      type: 'max',
                      valueDim: 'highest',
                      symbol: 'circle',
                      symbolSize: 10,
                      label: {
                        normal: {show: false},
                        emphasis: {show: false}
                      }
                    }
                  ]
                ]
              }
            }
          ]
        }
      }
    },
    created() {
      // this.setEchartOption()
      this.stockCode = this.$route.params.stockCode;
      console.log(this.stockCode);
      this.getStockData();

    },

    mounted() {
      // this.setEchartOption()
      //this.myChart = echarts.init(document.getElementById('myChart'))
      //this.myChart.setOption(this.echartsOption)
    },
    watch: {
      stockData: function () {
        var _this = this;
        _this.$nextTick(function () {
          this.setEchartOption();
          this.myChart = echarts.init(document.getElementById('myChart'));
          this.myChart.setOption(this.echartsOption);
        });
      }
    },
    methods: {
      getArrary(str) {
        var a = [];
        var b = [];
        var temp = [];
        //alert(str);
        a = str.split(";");
        b = new Array(a.length);
        for (var i = 0; i < a.length; i++) {
          temp = a[i].toString().substr(1, a[i].length - 2).split(',');
          b[i] = new Array(temp.length);
          for (var j = 0; j < temp.length; j++) {
            b[i][j] = temp[j];
          }
        }
        return b;
      },
      getStockData() {
        //请求服务器的api获取到品牌的数据列表
        axios.get('http://192.168.43.197:8081/getStockData?stockCode='+this.stockCode)

        //then获取成功；response成功后的返回值（对象）

          .then(response => {

            console.log("请求数据成功");
            //console.log(response.data);
            //console.log(that);
            this.stockData =response.data ;
          })

          //获取失败

          .catch(error => {

            console.log(error);

            alert('网络错误，不能访问');

          })
      },
      setEchartOption() {
        ///console.log("set");
        // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
        //console.log(this.stockData)
        this.resData = splitData(this.getArrary(this.stockData.toString()))
        this.echartsOption.xAxis.data = this.resData.categoryData
        this.echartsOption.series[0].data = this.resData.values
        //console.log(this.echartsOption.xAxis.data)
        //console.log(this.echartsOption.series[0].data)

        function splitData(rawData) {
          var categoryData = []
          var values = []
          for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0])
            values.push(rawData[i])
            //console.log(categoryData)
            //console.log(values)
          }
          return {
            categoryData: categoryData,
            values: values
          }
        }
      }
    }
  }
</script>
<style scoped>
  #myChart {
    width: 70%;
    height: 500px;
    margin: 0 auto;
  }

</style>
