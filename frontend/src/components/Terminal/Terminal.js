import React, {Component} from 'react'
import ReactTerminal, {ReactThemes} from 'react-terminal-component'

export default class Terminal extends Component {
  render() {
    return (
      <div>
        <ReactTerminal
          theme={Object.assign({}, ReactThemes.hacker, {
            height: '90vh',
            width: '90wh',
            background: '#121212',
          })}
          promptSymbol=">"
          clickToFocus="true"
        />
      </div>
    )
  }
}
