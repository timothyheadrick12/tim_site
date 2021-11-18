import React, {Component} from 'react'
import ReactTerminal, {ReactThemes} from 'react-terminal-component'
import TypewriterComponent from 'typewriter-effect'
import {Navigate} from 'react-router-dom'
import {
  EmulatorState,
  OutputFactory,
  CommandMapping,
  Outputs,
  defaultCommandMapping,
} from 'javascript-terminal'
import {makeRandStr} from '../../utils/utils'
import './Terminal.css'
export default class Terminal extends Component {
  //START OF CONSTRUCTOR
  constructor(props) {
    super(props)
    //need to initialize state redirect too change it later
    this.state = {
      boot: false,
      redirect: false,
    }

    //create the ./boot command and have it change the state of redirect
    //to true when executed. It also prints the given message to the screen
    this.customCommandMapping = CommandMapping.create({
      ...defaultCommandMapping /*spread operator*/,
      './boot': {
        function: () => {
          this.setState({
            boot: true,
          })
          return {
            output: OutputFactory.makeTextOutput('Booting in...'),
          }
        },
        optDef: {},
      },
    })

    //Message to print wwhen the terminal starts
    this.textOutput = OutputFactory.makeTextOutput(
      "You shouldn't be here... Use './boot' to start the website\n\n"
    )

    //Turn the message into an output using this
    this.customOutputs = Outputs.create([this.textOutput])

    //create modified emulator state using custom command and
    //output message. assigned using the emulatorState prop of
    //ReactTerminal
    this.emulatorState = EmulatorState.create({
      commandMapping: this.customCommandMapping,
      outputs: this.customOutputs,
    })

    this.randStr = makeRandStr(1000)

    this.numWriters = 10
  }
  //END OF CONSTRUCTOR

  render() {
    //same as let redirect = this.state.redirect
    let {boot, redirect} = this.state
    // if redirect set go to the next page, else render terminal like normal
    if (boot) {
      setTimeout(() => {
        this.setState({redirect: true})
      }, 6000)
    }
    if (redirect) {
      return <Navigate to="home" />
    }
    return (
      <div>
        <div className="terminal">
          <ReactTerminal
            theme={Object.assign({}, ReactThemes.hacker, {
              height: '90vh',
              width: '90wh',
              background: '#121212',
              //change color to hide when boot starts
              outputColor: boot ? '#121212' : '#a3ffb0',
              commandColor: boot ? '#121212' : '#a3ffb0',
              promptSymbolColor: boot ? '#121212' : '#a3ffb0',
            })}
            promptSymbol=">"
            clickToFocus={true}
            emulatorState={this.emulatorState}
          />
        </div>
        {/* create writer this.numWriters num times */}
        {[...Array(this.numWriters)].map((elem, index) => (
          <div
            key={'writer-' + index}
            //assign fade when boot is true to start fading
            className={'t-overlay' + (boot ? ' t-overlay-fade' : '')}
            style={{
              top: (index * Math.round(100 / this.numWriters)).toString() + '%',
            }} //placement on screen as function of this.numWriters
          >
            <ConditionalWriter condition={boot} str={this.randStr} />
          </div>
        ))}
        {/* This is the waterfall of text that appears at the end */}
        <div className={'t-overlay' + (boot ? ' t-overlay-textfall' : '')}>
          {this.randStr.repeat(10)}
        </div>
      </div>
    )
    // }
  }
}

//only appears when condition is true
//pre: props.condition and props.str
function ConditionalWriter(props) {
  if (props.condition) {
    return (
      <TypewriterComponent
        options={{
          strings: [props.str],
          autoStart: true,
          delay: 0,
          cursor: '',
          pauseFor: 100000,
        }}
      />
    )
  } else {
    return null
  }
}
