import React, { Component, PropTypes } from 'react'
import { Card } from 'antd'
import Pattern from 'models/pattern'

export default class Base extends Component {
  static propTypes = {
    pattern: PropTypes.instanceOf(Pattern).isRequired,
    onModified: PropTypes.func,
  }

  static defaultProps = {
    onModified: () => console.log('modified'),
  }

  componentDidMount() {
    this.modifyPattern()
  }

  componentDidUpdate(prevProps) {
    if (this.props.pattern !== prevProps.pattern) {
      console.log('receive new pattern', this.props.pattern)
      this.modifyPattern()
    }
  }

  modifyPattern(props = {}) {
    const newPattern = new Pattern()
    Object.assign(newPattern, {...this.props.pattern, ...props})
    newPattern[performance.now()] = 'bar'
    console.log('newPatetrn', newPattern)
    this.props.onModified(newPattern)
  }

  render() {
    return(<Card>
      fragment
    </Card>)
  }
}
