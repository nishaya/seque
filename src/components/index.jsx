import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import Fragment from 'components/fragment'
console.log(Fragment)

export default class IndexComponent extends Component {
  render() {
    return (<div>
      <div className="seque-header">
        <h1>se<span className="accent">QUE</span></h1>
        <div className="seque-header__subtitle">Pattern Sequencer</div>
      </div>
      <Card title="Main">
        <Row>
          <Col span="12">
            <Fragment.Step />
          </Col>
          <Col span="12">
            <Fragment.Base />
          </Col>
        </Row>
      </Card>
    </div>)
  }
}
