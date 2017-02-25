import React from 'react'
import { Card, Button } from 'antd'
import Base from './base'
import Pattern from 'models/pattern'

export default class Step extends Base {
  onModified() {
    const newPattern = new Pattern()
    Object.assign(newPattern, this.props.pattern)
    newPattern.foo = 'bar'
    this.props.onModified(newPattern)
  }

  render() {
    return(<Card>
      step
      <Button onClick={() => this.onModified()}>test</Button>
    </Card>)
  }
}
