import React, {Component} from 'react'
import ReactTerminal, {ReactThemes} from 'react-terminal-component'
import {Navigate} from 'react-router-dom'
import {
  EmulatorState,
  OutputFactory,
  CommandMapping,
  Outputs,
  defaultCommandMapping,
} from 'javascript-terminal'
export default class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
    }

    this.customCommandMapping = CommandMapping.create({
      ...defaultCommandMapping,
      './boot': {
        function: () => {
          this.setState({
            redirect: true,
          })
          return {
            output: OutputFactory.makeTextOutput('Booting in...'),
          }
        },
        optDef: {},
      },
    })

    this.textOutput = OutputFactory.makeTextOutput(
      "You shouldn't be here... Use './boot' to start the website\n\n"
    )

    this.customOutputs = Outputs.create([this.textOutput])

    this.emulatorState = EmulatorState.create({
      commandMapping: this.customCommandMapping,
      outputs: this.customOutputs,
    })
  }

  render() {
    let {redirect} = this.state
    if (redirect) {
      return <Navigate to="next" />
    } else {
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
            emulatorState={this.emulatorState}
          />
        </div>
      )
    }
  }
}
