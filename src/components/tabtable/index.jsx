import React, { Component } from 'react'
import { Button, Table } from 'antd'
import {connect} from 'react-redux'
import {tableAction} from '@/actions/tabtable'
import './style.css'


export default @connect(state=>{
  return {
    data:state.tabtable.data
  }},{
    tableAction
  }
)
class index extends Component {
  componentDidMount(){
      this.props.tableAction()
  }
  fn=()=>{
      console.log(1)
  }
  render() {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Msg',
        dataIndex: 'msg',
        key: 'msg',
      },
      {
        title: 'Gender',
        key: 'gender',
        dataIndex: 'gender',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Edit</a>&nbsp;&nbsp;
            <a onClick={()=>this.fn()}>Delete</a>
          </span>
        ),
      },
    ];
    const {data}=this.props
    console.log(data)
    return (
      <div className='components-tabtable'>
          <div className="Tablee">
              <div className="BiaoDan">
               
                <Table 
                  columns={columns} 
                  dataSource={data} 
                  rowKey={v => v.id}
                />
              </div>
            </div>
      </div>
    )
  }
}
