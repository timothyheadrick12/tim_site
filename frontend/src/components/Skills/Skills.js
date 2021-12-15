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
          <div className="skills-education-div">
            education
            <div
              className="wire"
              style={{transform: 'rotate(0deg) translate(21.5rem, 3rem)'}}
            />
            <div
              className="wire"
              style={{transform: 'rotate(0deg) translate(21.5rem, 5.5rem)'}}
            />
            <div
              className="wire"
              style={{transform: 'rotate(0deg) translate(21.5rem, 8rem)'}}
            />
            <div
              className="wire"
              style={{
                transform: 'rotate(0deg) translate(21.5rem, 10.5rem)',
                animationName: 'wire-signal-rtl',
              }}
            />
            <div
              className="wire"
              style={{
                transform: 'rotate(0deg) translate(21.5rem, 13rem)',
                animationName: 'wire-signal-rtl',
              }}
            />
            <div
              className="wire"
              style={{
                transform: 'rotate(0deg) translate(21.5rem, 15.5rem)',
                animationName: 'wire-signal-rtl',
              }}
            />
            <div className="skills-skills-div">skills</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
