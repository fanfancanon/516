import React, { Component } from 'react'
import Tabhome from '@/components/tabhome'
import Tabtable from '@/components/tabtable'
import Tabform from '@/components/tabform'
import Tabchart from '@/components/tabchart'
import { Switch, Route } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path='/home/tab' component={Tabhome}/>
            <Route path='/home/tab1' component={Tabform}/>
            <Route path='/home/tab2' component={Tabchart}/>
            <Route path='/home/tab3' component={Tabtable}/>
        </Switch>
      </div>
    )
  }
}
