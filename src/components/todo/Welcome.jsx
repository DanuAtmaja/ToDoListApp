import React, { Component } from 'react';

export class Welcome extends Component {
  render() {
    return (
      <div>
        `Welcome ${this.props.match.params.name} You're Successfully logged
        in!.`
      </div>
    );
  }
}

export default Welcome;
