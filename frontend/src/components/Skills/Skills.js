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
        <div className="skills-background-img" />
        <div className="skills-banner-div">
          <Home />
        </div>
        <div className="skills-content-parent">
          <div className="skills-education-div">education</div>
          <div
            className="wire"
            style={{transform: 'rotate(0deg) translate(33.3rem, 15rem)'}}
          />
          <div
            className="wire"
            style={{transform: 'rotate(0deg) translate(33.3rem, 17.5rem)'}}
          />
          <div
            className="wire"
            style={{transform: 'rotate(0deg) translate(33.3rem, 20rem)'}}
          />
          <div
            className="wire"
            style={{
              transform: 'rotate(0deg) translate(33.3rem, 22.5rem)',
              animationName: 'wire-signal-rtl',
            }}
          />
          <div
            className="wire"
            style={{
              transform: 'rotate(0deg) translate(33.3rem, 25rem)',
              animationName: 'wire-signal-rtl',
            }}
          />
          <div
            className="wire"
            style={{
              transform: 'rotate(0deg) translate(33.3rem, 27.5rem)',
              animationName: 'wire-signal-rtl',
            }}
          />
          <div className="skills-skills-div">skills</div>
        </div>
      </div>
    )
  }
}

export default Skills
