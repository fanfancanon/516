import React, { Component } from 'react'
import Tab from '@/components/tab'
import Header from '@/components/header'
import Router from '@/pages/router'
import './style.css'

export default class index extends Component {
  render() {
    return (
      <div className = 'pages-home'>
        <div className = 'pages-home-body'>
            <Tab/>
            <div className = 'pages-home-body-rig'>
                <Header/>
                <div className = 'home-body-child'>
                   <Router/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
