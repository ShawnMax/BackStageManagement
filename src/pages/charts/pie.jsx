import React, {Component} from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
后台管理的饼图路由组件
 */
export default class Pie extends Component {

  getOption = () => {
    return {
      title : {
        text: 'Visitor Source',
        subtext: 'Not for real',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct visit','Email Promotion','Alliance Advertisement','Video Advertisement','Google Search']
      },
      series : [
        {
          name: 'Source',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
            {value:335, name:'Direct Visit'},
            {value:310, name:'Email Promotion'},
            {value:234, name:'Alliance Advertisement'},
            {value:135, name:'Video Advertisement'},
            {value:1548, name:'Google Search'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

  }

  getOption2 = () => {
    return {
      backgroundColor: '#2c343c',

      title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
          name:'Source',
          type:'pie',
          radius : '55%',
          center: ['50%', '50%'],
          data:[
            {value:335, name:'Direct Visit'},
            {value:310, name:'Email Promotion'},
            {value:274, name:'Alliance Advertisement'},
            {value:235, name:'Video Advertisement'},
            {value:400, name:'Google Search'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Card title='Pie Chart 1'>
          <ReactEcharts option={this.getOption()} style={{height: 300}}/>
        </Card>
        <Card title='Pie Chart 2'>
          <ReactEcharts option={this.getOption2()} style={{height: 300}}/>
        </Card>
      </div>
    )
  }
}
