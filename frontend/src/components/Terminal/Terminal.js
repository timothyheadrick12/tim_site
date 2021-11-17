import React, { Component } from "react";
import ReactTerminal, { ReactThemes } from "react-terminal-component";
import TypewriterComponent from "typewriter-effect";
import { Navigate } from "react-router-dom";
import {
  EmulatorState,
  OutputFactory,
  CommandMapping,
  Outputs,
  defaultCommandMapping,
} from "javascript-terminal";
import { makeRandStr } from "../../utils/utils";
import "./Terminal.css";
export default class Terminal extends Component {
  //START OF CONSTRUCTOR
  constructor(props) {
    super(props);
    //need to initialize state redirect too change it later
    this.state = {
      boot: false,
      redirect: false,
    };

    //create the ./boot command and have it change the state of redirect
    //to true when executed. It also prints the given message to the screen
    this.customCommandMapping = CommandMapping.create({
      ...defaultCommandMapping /*spread operator*/,
      "./boot": {
        function: () => {
          this.setState({
            boot: true,
          });
          return {
            output: OutputFactory.makeTextOutput("Booting in..."),
          };
        },
        optDef: {},
      },
    });

    //Message to print wwhen the terminal starts
    this.textOutput = OutputFactory.makeTextOutput(
      "You shouldn't be here... Use './boot' to start the website\n\n"
    );

    //Turn the message into an output using this
    this.customOutputs = Outputs.create([this.textOutput]);

    //create modified emulator state using custom command and
    //output message. assigned using the emulatorState prop of
    //ReactTerminal
    this.emulatorState = EmulatorState.create({
      commandMapping: this.customCommandMapping,
      outputs: this.customOutputs,
    });

    this.randStr = makeRandStr(1000);

    this.numWriters = 5;
    this.writers = [...Array(this.numWriters)].map((elem, index) => (
      <div key={"writer-" + index}>
        <ConditionalWriter
          className="t-overlay"
          style={{ top: (index * (100 / this.numWriters)).toString() + "%" }}
          condition={this.state.boot}
          randStr={this.randStr}
        />
      </div>
    ));
  }
  //END OF CONSTRUCTOR

  render() {
    //same as let redirect = this.state.redirect
    let { boot, redirect } = this.state;
    // if redirect set go to the next page, else render terminal like normal
    if (boot) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 10000);
    }
    if (redirect) {
      return <Navigate to="next" />;
    }
    return (
      <div>
        <div className="terminal">
          <ReactTerminal
            theme={Object.assign({}, ReactThemes.hacker, {
              height: "90vh",
              width: "90wh",
              background: "#121212",
            })}
            promptSymbol=">"
            clickToFocus={true}
            emulatorState={this.emulatorState}
          />
        </div>
        {this.writers}
      </div>
    );
    // }
  }
}

//only appears when condition is true
function ConditionalWriter(props) {
  if (props.condition) {
    return (
      <div className={props.className}>
        <TypewriterComponent
          options={{
            strings: [props.randStr],
            autoStart: true,
            delay: 0,
            cursor: "",
            pauseFor: 100000,
          }}
        />
      </div>
    );
  } else {
    return null;
  }
}
