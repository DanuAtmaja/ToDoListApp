import React, { Component } from 'react';
import { Card } from 'reactstrap';

export class Logout extends Component {
  render() {
    return (
      <Card>
        <h1>You are logged out</h1>
        <div className="container">Thank You Using Our Application.</div>
      </Card>
    );
  }
}

export default Logout;
