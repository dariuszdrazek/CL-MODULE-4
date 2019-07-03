import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class AddNumbers extends Component {
     render() {
          const { numberA, numberB } = this.props;
          return <h1>{numberA + numberB}</h1>;
     }
}

ReactDOM.render(
     <AddNumbers numberA={5} numberB={40} />,
     document.getElementById('app')
);
