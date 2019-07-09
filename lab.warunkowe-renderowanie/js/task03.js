import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class NumberInfo extends Component {
     constructor(props) {
          super(props);

          this.state = {};
     }

     primeNumbers = num => {
          if (num < 2) return false;
          for (var i = 2; i < num; i++) {
               if (num % i == 0) return false;
          }
          return true;
     };

     render() {
          return (
               <>
                    <li>{this.props.number}</li>
                    <li>
                         {this.props.number % 2 === 0
                              ? 'parzysta'
                              : 'nieparzysta'}
                    </li>

                    {this.primeNumbers(this.props.number) ? (
                         <li>liczba pierwsza</li>
                    ) : null}

                    {Math.pow(this.props.number, 2) % 2 === 0 ? (
                         <li>'potęga liczby 2'</li>
                    ) : null}
               </>
          );
     }
}

class App extends Component {
     render() {
          return (
               <>
                    <NumberInfo number={7} />
               </>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, NumberInfo };
