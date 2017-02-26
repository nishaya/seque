import React from 'react'
import { Card, Button, Checkbox } from 'antd'
import Base from './base'
import Pattern from 'models/pattern'

export default class Step extends Base {
  constructor(props) {
    super(props)
    this.state = {
      steps: [
        true, false, false, false,
        true, false, false, false,
        true, false, false, false,
        true, false, false, false,
      ],
    }
  }

  render() {
    return(<Card title="step">
      <div>
        {this.state.steps.map((step, i) => (
          (<Checkbox key={`step_${i}`} checked={step} />)
        ))}
      </div>
      <Button onClick={() => super.modifyPattern()}>test</Button>
    </Card>)
  }
}
