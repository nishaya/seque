import React, { Component } from 'react'
import { Card } from 'antd'

export default class IndexComponent extends Component {
  render() {
    return (<div>
      <div className="seque-header">
        <h1>se<span className="accent">QUE</span></h1>
        <div className="seque-header__subtitle">Pattern Sequencer</div>
      </div>
      <Card title="Main">
      </Card>
    </div>)
  }
}
