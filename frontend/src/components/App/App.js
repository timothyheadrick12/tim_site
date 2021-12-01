import React, {Component} from 'react'
import './App.css'
import {ReactComponent as Motherboard} from '../../assets/images/motherboard.svg'

class App extends Component {
  render() {
    return (
      <div className="motherboardContainerStyle">
        <Motherboard className="motherboardImageStyle" />
      </div>
    )
  }
}

export default App
