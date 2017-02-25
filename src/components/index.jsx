import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import Fragment from 'components/fragment'
import Pattern from 'models/pattern'

export default class IndexComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patterns: new Array(3).fill(new Pattern()),
    }
  }

  modifyPattern(index, pattern) {
    console.log('pattern modified', index, pattern)
    const patterns = this.state.patterns.slice(0)
    patterns[index] = pattern
    this.setState({ patterns })
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
              pattern={this.state.patterns[0]}
              onModified={pattern => this.modifyPattern(1, pattern)}
            />
          </Col>
          <Col span="12">
            <Fragment.Base
              pattern={this.state.patterns[1]}
              onModified={pattern => this.modifyPattern(2, pattern)}
            />
          </Col>
        </Row>
      </Card>
    </div>)
  }
}
