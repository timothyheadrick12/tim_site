import React, {Component} from 'react'
import './Memory.css'
import Home from '../Home/Home'

// class MyMotherboard extends Motherboard {
//   constructor(props) {
//     super(props)
//     this.state = {
//       nagivate: false,
//     }
//   }

//   render() {
//     super.render()
//   }
// }
class Memory extends Component {
  render() {
    return (
      <div className="memory-parent-div">
        <div className="memory-banner-div">
          <Home />
        </div>
        <div style={{color: 'white'}}>Welcome to past projects!</div>
      </div>
    )
  }
}

export default Memory
