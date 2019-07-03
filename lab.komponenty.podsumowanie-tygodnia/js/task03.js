import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class RandomNumbers extends Component {
     render() {
          const data = {
               min: 10,
               max: 1000,
               count: 6
          };

          const numbers = [];

          for (let i = 0; i < data.count; i++) {
               let randomNumber =
                    Math.floor(Math.random() * (data.max - data.min + 1)) +
                    data.min;
               numbers.push(randomNumber);
          }

          return (
               <div>
                    <RandomNumbersInfo
                         max={data.max}
                         min={data.min}
                         count={numbers.length}
                    />
                    <RandomNumbersList numbers={numbers} />
               </div>
          );
     }
}

class RandomNumbersInfo extends Component {
     render() {
          return (
               <div>
                    <p>Max liczba to: {this.props.max}</p>
                    <p>Min liczba to: {this.props.min}</p>
                    <p>Ilość liczb : {this.props.count}</p>
               </div>
          );
     }
}

class RandomNumbersList extends Component {
     render() {
          return (
               <ul>
                    {this.props.numbers.map(item => {
                         return <li>{item}</li>;
                    })}
               </ul>
          );
     }
}

class App extends Component {
     render() {
          return (
               <>
                    <RandomNumbers />
               </>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
