import React from 'react'
import { Card, Button } from 'antd'
import Base from './base'
import Pattern from 'models/pattern'

export default class Step extends Base {
  render() {
    return(<Card>
      step
      <Button onClick={() => super.modifyPattern()}>test</Button>
    </Card>)
  }
}
