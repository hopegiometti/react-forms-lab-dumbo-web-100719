import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        onChange={event => this.handleMessageChange(event)}
        value={this.state.message}/>
        {this.props.maxChars-this.state.message.length} Characters Remaining
      </div>
    );
  }
}

export default TwitterMessage;
