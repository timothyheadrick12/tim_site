import React, {Component} from 'react'
import './App.css'
import {ReactComponent as Motherboard} from '../../assets/images/motherboard.svg'
import {Navigate} from 'react-router'

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
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {navigate: false}
  }
  render() {
    if (this.state.navigate) {
      return <Navigate to="skills" />
    }
    return (
      <div className="motherboard-container-style">
        {/* <svg
          id="svgcopybox0"
          viewBox="0 0 921.80246 662.99997"
          className="cpu-abs-style"
          width="921.80005"
          stroke="white"
          height="663"
        >
          <rect
            id="cpubox0"
            fillOpacity="0"
            transform="rotate(-90)"
            height="184"
            width="140"
            y="535"
            x="-390"
            onClick={() => this.setState({navigate: true})}
          />
        </svg> */}
        <Motherboard id="mb0" className="motherboard-image-style" />
      </div>
    )
  }
}

export default App
