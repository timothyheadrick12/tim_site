import React, {Component} from 'react'
import ReactTerminal, {ReactThemes} from 'react-terminal-component'
import {
  EmulatorState,
  OutputFactory,
  CommandMapping,
  Outputs,
  defaultCommandMapping,
} from 'javascript-terminal'

const customCommandMapping = CommandMapping.create({
  ...defaultCommandMapping,
  './boot': {
    function: () => {
      return {
        output: OutputFactory.makeTextOutput('Booting in...'),
      }
    },
    optDef: {},
  },
})

const textOutput = OutputFactory.makeTextOutput(
  "You shouldn't be here... Use './boot' to start the website\n\n"
)

const customOutputs = Outputs.create([textOutput])

const emulatorState = EmulatorState.create({
  commandMapping: customCommandMapping,
  outputs: customOutputs,
})

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
          emulatorState={emulatorState}
        />
      </div>
    )
  }
}
