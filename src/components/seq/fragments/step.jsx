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

  checked(index, checked) {
    const steps = this.state.steps.slice(0)
    steps[index] = checked
    super.modifyPattern({ steps })
    this.setState(steps)
  }

  render() {
    return(<Card title="step">
      <div>
        {this.state.steps.map((step, i) => (
          (<Checkbox key={`step_${i}`} defaultChecked={step} onClick={e => this.checked(i, e.target.checked)}/>)
        ))}
      </div>
      <Button onClick={() => super.modifyPattern()}>test</Button>
    </Card>)
  }
}
