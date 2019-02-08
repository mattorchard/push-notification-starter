import React from "react";
import {onMessage} from "../services/firebase";


export default class Messages extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    onMessage(payload => this.setState(state => {
      state.messages.push(payload);
      return state;
    }));
  }

  render() {
    return <ol>
      {this.state.messages.map((message, index) =>
        <li key={index}>{JSON.stringify(message)}</li>
      )}
    </ol>
  }
}