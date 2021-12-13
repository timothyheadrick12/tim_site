import React, {Component} from 'react'
import './External.css'
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
class External extends Component {
  render() {
    return (
      <div className="external-parent-div">
        <div className="external-banner-div">
          <Home />
        </div>
        <div style={{color: 'white'}}>Welcome to external links!</div>
      </div>
    )
  }
}

export default External
