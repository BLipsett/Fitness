import React from 'react'
import './wendlerPage.styles.scss'

class WendlerPage extends React.Component {
 

  
addMaxes() {
  alert(
    'What is your 1 rep max Bench'
  )
  console.log('add new')
}
  render() {
    return (
      <div className="wendler-page">
        <h1>wendler workout chart</h1>
        <button onClick={() => this.addMaxes()}>Add One Rep Maxes</button>
        <ul>
        <li>
        <h3>week 1</h3>
        </li>
        <li>
        <h3>week 2</h3>
        </li>
        <li>
        <h3>week 3</h3>
        </li>
        <li>
        <h3>week 4</h3>
        </li>
        </ul>
      </div>
    )
  }
}

export default WendlerPage;