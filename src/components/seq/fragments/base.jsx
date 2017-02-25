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

  render() {
    return(<Card>
      fragment
    </Card>)
  }
}
