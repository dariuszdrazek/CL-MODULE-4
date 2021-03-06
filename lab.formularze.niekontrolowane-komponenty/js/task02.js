import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Sum extends Component {
     constructor(props) {
          super(props);

          this.state = {
               numbers: []
          };
     }

     handleClick = () => {
          const numbers = [...this.state.numbers, this.input.value];
          this.setState({
               numbers
          });
     };

     sum = () => {
          if (this.state.numbers.length < 2) {
               return null;
          } else {
               return this.state.numbers.reduce(
                    (prev, curr) => Number(prev) + Number(curr)
               );
          }
     };
     render() {
          return (
               <div>
                    <input type="number" ref={el => (this.input = el)} />
                    <button onClick={this.handleClick}>Click!</button>
                    <ul>
                         {this.state.numbers.map(item => {
                              return <li>{item}</li>;
                         })}
                    </ul>
                    <h1>{this.sum()}</h1>
               </div>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <Sum />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App };
