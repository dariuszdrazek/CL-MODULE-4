import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class Sum extends Component {
     render() {
          return (
               <h1>{this.props.numbers.reduce((curr, prev) => curr + prev)}</h1>
          );
     }
}

ReactDOM.render(
     <Sum numbers={[1, 2, 3, 4, 5, 6, 7]} />,
     document.getElementById('app')
);
