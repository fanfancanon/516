import React, { Component } from 'react'
import Axios from 'axios'
import echarts from 'echarts'
import './style.css'

export default class index extends Component {
  componentDidMount(){
    Axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser').then(res=>{
      const newData=res.data.users
      const Data=[]
      const Data1=[]
      newData.filter((v,i)=>{
         Data.push(v.name)
         Data1.push(v.age)
      })
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(this.el);
      
          // 指定图表的配置项和数据
          var option = {
              title: {
                  text: 'ECharts 入门示例'
              },
              tooltip: {},
              legend: {
                  data:['年龄']
              },
              xAxis: {
                  data: Data
              },
              yAxis: {},
              series: [{
                  name: '年龄',
                  type: 'bar',
                  data: Data1
              }]
          };

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
    })
  }
  render() {
    return (
      <div className='EXS'>
         <div className='content' ref={v=>this.el=v}>xxx</div>
      </div>
    )
  }
}
