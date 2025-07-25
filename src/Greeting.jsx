import { Component } from 'react';
import './Greeting.css';

class Greeting extends Component {
  render() {
    return (
      <div className="greeting-box">
        <p>Hello, <strong>{this.props.name}</strong>! 👋</p>
        <p>This is a class component using props.</p>
      </div>
    );
  }
}

export default Greeting;
