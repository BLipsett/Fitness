import React from 'react'
import './challenge.styles.scss'
import InputDist from '../InputDist/inputDist.component'
import Total from '../total/total.component'

class Challenge extends React.Component {
constructor(){
  super()

  this.state = {
      total: ''
  }

}

calculate = () => {
  try {
    this.setState({
      total: (this.state.total += )
    })
  } catch (error) {
    
  }
}

// handleSubmit = async event => {
//   event.preventDefault()
//   const { currentScore } = this.state
// }

// handleChange = async event => {
//   const {name, value} = event.target;
//   this.setState({[name]: value})
// }
  render() {
    return (
      <div className='challenge'>
        <h1>Walk 900 minutes total</h1>
        <p>enter your minutes walked</p>
       <InputDist onClick={this.onClick}/>
        <Total total={this.state.total}/>

      </div>
)
}
}

export default Challenge