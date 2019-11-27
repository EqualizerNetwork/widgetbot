import { connect } from 'fluent'
import * as React from 'react'

import { Root } from './elements'

const { version } = require('../../../../package.json')

export default connect()
  .with(({ state, signals, props }) => ({
    toggle: signals.modal
  }))
  .toClass(
    props =>
      class Panel extends React.PureComponent<typeof props> {

        render() {
          return (
            <Root>
            </Root>
          )
        }
      }
  )
