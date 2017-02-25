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

  componentWillReceiveProps(nextProps) {
    if (this.props.pattern !== nextProps.pattern) {
      this.modifyPattern()
    }
  }

  modifyPattern(props = {}) {
    const newPattern = new Pattern()
    Object.assign(newPattern, {...this.props.pattern, ...props})
    newPattern[performance.now()] = 'bar'
    this.props.onModified(newPattern)
  }

  render() {
    return(<Card>
      fragment
    </Card>)
  }
}
