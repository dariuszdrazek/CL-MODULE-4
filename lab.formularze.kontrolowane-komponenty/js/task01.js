import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class AddTwoNumbers extends Component {
     constructor(props) {
          super(props);

          this.state = {
               number1: null,
               number2: null,
               sum: 0
          };
     }

     handleChangeInput = e => {
          this.setState({
               number1: e.target.value
          });
     };

     handleChangeInput2 = e => {
          this.setState({
               number2: e.target.value
          });
     };

     sum = (num1, num2) => {
          return parseFloat(num1) + parseFloat(num2);
     };

     render() {
          return (
               <div>
                    <form action="">
                         <input
                              type="text"
                              value={this.state.number1}
                              onChange={this.handleChangeInput}
                         />
                         <input
                              type="text"
                              value={this.state.number2}
                              onChange={this.handleChangeInput2}
                         />
                         <h1>
                              {isNaN(
                                   this.sum(
                                        this.state.number1,
                                        this.state.number2
                                   )
                              )
                                   ? 'Podaj dwie liczby'
                                   : this.sum(
                                          this.state.number1,
                                          this.state.number2
                                     )}
                         </h1>
                    </form>
               </div>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <AddTwoNumbers />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { AddTwoNumbers, App };
