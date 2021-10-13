import React from 'react'
import './challenge.styles.scss'
import InputDist from '../InputDist/inputDist.component'
import Total from '../total/total.component'

class Challenge extends React.Component {
constructor(props){
  super(props)

  this.state = {
      total: '',
      list: []
  }

}

addItem() {

  //create a new exercise with a unique id
  const newItem = {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  }

  // copy current list of exercises
  const list = [...this.state.list];

  //add new exercise to list
  list.push(newItem)

  // update state with new list and reset the newItem input 
  this.setState({
    list,
    newItem:''
  })

  console.log(this.state)
}


//updates the react state/ more so needed if local storage is needed
updateInput(key, value) {
  this.setState({
    [key]: value
  })
  
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
        <div className="input">
          <input 
          type="number" 
          value={this.state.newItem}
          onChange={e => this.updateInput('newItem', e.target.value)}
          />
          <button
          onClick={() => this.addItem()}>Add Exercise</button>
        </div>

      </div>
)
}
}

export default Challenge