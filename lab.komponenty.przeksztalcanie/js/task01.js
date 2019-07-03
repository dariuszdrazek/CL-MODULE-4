import ReactDOM from 'react-dom';
import React, { Component } from 'react';

function App() {
     return (
          <div>
               <AddNumbers number1={10} number2={20} />
          </div>
     );
}

function AddNumbers(props) {
     return (
          <>
               <span>{props.number1 + props.number2}</span>
          </>
     );
}

ReactDOM.render(<App />, document.getElementById('app'));

export { AddNumbers, App };
