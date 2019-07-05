import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class MathQuestionGame extends Component {
     constructor(props) {
          super(props);

          this.state = {
               buttons: [
                    this.randomNumber(1, 10),
                    this.randomNumber(1, 10),
                    this.randomNumber(1, 10),
                    this.result()
               ],
               time: 0,
               disabled: false,
               text: 'test'
               //  text: `${this.props.number1} * ${this.props.number2} = `
          };
     }

     randomExercise(items) {
          return items[Math.floor(Math.random() * items.length)];
     }

     randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
     }

     shuffle(a) {
          for (let i = a.length; i; i--) {
               let j = Math.floor(Math.random() * i);
               [a[i - 1], a[j]] = [a[j], a[i - 1]];
          }
          return a;
     }

     handleClick = btn => {
          if (btn == this.result()) {
               this.setState({
                    text: 'gratulacje'
               });
          }
     };

     componentDidMount() {
          this.interval = setInterval(() => {
               if (this.state.time < 10) {
                    this.setState({
                         time: this.state.time + 1
                    });
               } else {
                    this.setState({
                         disabled: true
                    });
               }
          }, 1000);
     }

     result() {
          const number1 = this.randomNumber(1, 10);
          const number2 = this.randomNumber(1, 10);

          const exercise = this.randomExercise(['+', '-', '*']);

          switch (exercise) {
               case '+':
                    return number1 + number2;
                    break;
               case '-':
                    return number1 - number2;
                    break;
               case '*':
                    return number1 * number2;
                    break;
          }
     }
     render() {
          // const buttons = this.shuffle(this.state.buttons);
          return (
               <div>
                    <h1>{this.state.text}</h1>
                    <div>
                         {this.state.buttons.map((button, index) => {
                              return (
                                   <button
                                        key={index}
                                        disabled={this.state.disabled}
                                        onClick={() =>
                                             this.handleClick(button)
                                        }>
                                        {button}
                                   </button>
                              );
                         })}
                    </div>
                    <h2>{this.state.time}</h2>
               </div>
          );
     }
     componentWillUnmount() {
          clearInterval(this.interval);
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <MathQuestionGame />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { MathQuestionGame, App };
