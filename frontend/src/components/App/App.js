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
        <svg
          id="svgcopybox0"
          viewBox="0 0 921.80246 662.99997"
          className="cpu-abs-style"
          width="921.80005"
          height="663"
        >
          <g
            id="g3110"
            className="cpu-link-styles"
            transform="scale(3.4)"
            onClick={() => this.setState({navigate: true})}
          >
            <rect
              id="rect3331"
              transform="rotate(-90)"
              opacity="0"
              height="40"
              width="40"
              y="444"
              x="-219.5"
            />
            <path
              id="path1775"
              d="m 179,-443 h 4.5 l 9.5,8.875 13.219,0.0937 8.625,-8.9688 h 5.0625 l 0.1875,-42.938 -5.3125,-0.0625 -5.0938,-3.0938 h -20.469 l -5.0938,3.0312 h -5.125 z m 5.2188,-5.0312 0.0108,-24.017 -3.0411,-2.2939 -0.0108,-5.0158 3.0411,-2.7042 h 31.188 l 1.8651,2.6465 0.01,5.4405 -1.6964,1.8114 -0.17857,24.133 z"
              nodetypes="ccccccccccccccccccccccccc"
              transform="rotate(90)"
              connector-curvature="0"
            />
          </g>
        </svg>
        <Motherboard id="mb0" className="motherboard-image-style" />
      </div>
    )
  }
}

export default App
