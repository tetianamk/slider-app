import React, { Component } from 'react'

class CountClass extends Component {

  constructor() {
    super();
        this.state = {
            count: 0,
            doubledCount: 0
        }
}
doubledCount = () => {
  this.setState({
      doubledCount: this.state.count * 2,
  })
}
clickMe = () => {
  this.setState(prevState => ({
      count: prevState.count + 1,
  }), this.doubledCount)
}

 
  render() {

    return (
      <div>
        <p>Count : {this.state.count}</p>
        <p> Doubled Count:{this.state.doubledCount}</p>
        <button onClick={this.clickMe}>Click Me</button>
    </div>
    );
  }
}

export default CountClass;