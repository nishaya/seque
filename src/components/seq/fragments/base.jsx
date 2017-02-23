import React, { Component, PropType } from 'react'
import { Card } from 'antd'
import Pattern from 'models/pattern'

export default class Base extends Component {
  static propTypes = {
    input: PropTypes.instanceOf(Pattern).isRequired,
  }

  render() {
    return(<Card>
      fragment
    </Card>)
  }
}
