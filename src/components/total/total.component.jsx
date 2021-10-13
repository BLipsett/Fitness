import React from 'react'

class Total extends React.Component {
  render() {
    const { total } = this.props;
    return(
      <div className="total">
        <p>minutes total: {total}</p>
      </div>
    )
  }
}
export default Total