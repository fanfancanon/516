import React, { Component } from 'react'
import { Button } from 'antd';
import {connect} from 'react-redux'
import {tianjia} from '@/actions/tabtable'
import './style.css'

export default @connect(state=>{
  return {
    data:state.tabtable.data
  }},{
    tianjia
  }
)

class index extends Component {
 fn=()=>{
  
   const Tdata={
     name:this.refs.name.value,
     age:this.refs.age.value,
     sex:this.refs.sex.value,
     msg:this.refs.name.value
   }

  // console.log(Tdata)
  this.props.tianjia(Tdata)
 }
  render() {
    return (
      <div className='components-tabform'>
        <p>姓名：<input  type='text' ref='name'/></p>
        <p>年龄：<input  type='text' ref='age'/></p>
        <p>性别：<input  type='text' ref='sex'/></p>
        <p>价格：<input  type='text' ref='msg'/></p>
        <p><Button onClick={()=>this.fn()}>添加</Button></p>
      </div>
    )
  }
}
