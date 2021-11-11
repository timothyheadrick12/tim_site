import React, {Component} from 'react'
import ReactTerminal, {ReactThemes} from 'react-terminal-component'

class App extends Component {
  render() {
    return (
      <div>
        <ReactTerminal theme={ReactThemes.dye} promptSymbol=">" />
      </div>
    )
  }
}

export default App
