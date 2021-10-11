import { render } from '@testing-library/react'
import React from 'react'

import './challenge.styles.scss'

class Challenge extends React.Component {
  render() {
    return (
      <div className='challenge'>
        <h1>Walk 480 minutes total</h1>
      </div>
)
}
}

export default Challenge