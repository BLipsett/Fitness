import React from 'react'
import './challenge.styles.scss'

class Challenge extends React.Component {
constructor(props){
  super(props)

  this.state = {
      currentScore: ''
  }

}

handleSubmit = async event => {
  event.preventDefault()
  const { currentScore } = this.state
}

handleChange = async event => {
  const {name, value} = event.target;
  this.setState({[name]: value})
}
  render() {
    const { currentScore } = this.state
    return (
      <div className='challenge'>
        <h1>Walk 900 minutes total</h1>
        <p>enter your total minutes</p>
        <form onSubmit={this.handleSubmit}>

        <input
        type='number'
        name='current-score'
        label='current-score'
        onChange={this.handleChange}
        // value={currentScore} required
        ></input>
        <button type='submit'>add mins</button>
        </form>
        <p>current minutes: {currentScore}</p>
      </div>
)
}
}

export default Challenge