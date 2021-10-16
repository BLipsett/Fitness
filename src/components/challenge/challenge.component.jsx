import React from 'react'
import './challenge.styles.scss'
import InputDist from '../InputDist/inputDist.component'
import Total from '../total/total.component'

class Challenge extends React.Component {
constructor(props){
  super(props)

  this.state = {
      total: 0,
      minutesLeft: 900,
      list: []
  }

}

addItem() {

  //create a new exercise with a unique id
  const newItem = {
    id: 1 + Math.random(),
    value: parseInt(this.state.newItem.slice())
  }
  localStorage.setItem('listItem', JSON.stringify(newItem))

  // copy current list of exercises
  const list = [...this.state.list];

  //add new exercise to list
  list.push(newItem)

  // Sum of minutes added to list 
  let initialValue = 0
  const total = list.reduce(function (a, b) {
    return a + b.value
  }, initialValue)


  // minutes left to walk from challenge 
  let minutesLeft = 900 - total

  console.log(list)
  // update state with new list and reset the newItem input 
  this.setState({
    list,
    newItem:'',
    total,
    minutesLeft
  })

}


//updates the react state/ more so needed if local storage is needed
updateInput(key, value) {
  this.setState({
    [key]: value
  })
  
}




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
<p> Total minutes walked: {this.state.total}</p>
<p>Minutes left: {this.state.minutesLeft}</p>
<ul>
  {this.state.list.map(item =>
    {
      return(
        <li key={item.id}>
          {item.value}
        </li>
      )
    })}
</ul>
      </div>
)
}
}

export default Challenge