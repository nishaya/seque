import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import BaseFragment from 'components/seq/fragments/base'

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
            <BaseFragment />
          </Col>
          <Col span="12">
            <BaseFragment />
          </Col>
        </Row>
      </Card>
    </div>)
  }
}
