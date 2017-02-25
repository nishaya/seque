import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import Fragment from 'components/fragment'
import Pattern from 'models/pattern'

export default class IndexComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: new Pattern()
    }
  }

  render() {
    return (<div>
      <div className="seque-header">
        <h1>se<span className="accent">QUE</span></h1>
        <div className="seque-header__subtitle">Pattern Sequencer</div>
      </div>
      <Card title="Main">
        <Row>
          <Col span="12">
            <Fragment.Step
              pattern={this.state.pattern}
              onModified={pattern => console.log(pattern)}
            />
          </Col>
          <Col span="12">
            <Fragment.Base pattern={this.state.pattern} />
          </Col>
        </Row>
      </Card>
    </div>)
  }
}
