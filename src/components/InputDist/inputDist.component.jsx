import React from 'react'

class InputDist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

   handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state)
  }

  render(){
    return (
      <div className="input">
      <form>
  <label>
    Minutes:
    <input type="number" name="name" value={this.state.value} onChange={this.handleChange}/>
  </label>
  <input type="submit" value="Submit" onClick={this.state}/>
</form>
      </div>
    )
  }
}

export default InputDist