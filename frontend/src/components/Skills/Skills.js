import React, {Component} from 'react'
import './Skills.css'
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
class Skills extends Component {
  render() {
    return (
      <div className="skills-parent-div">
        <div className="skills-banner-div">
          <Home />
        </div>
        <div style={{color: 'white'}}>Welcome to skills!</div>
      </div>
    )
  }
}

export default Skills
