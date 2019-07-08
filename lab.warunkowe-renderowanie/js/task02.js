import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class NumberRandomInfo extends Component {
     constructor(props) {
          super(props);

          this.state = {
               number: 0
          };
     }

     randomNumber() {
          return Math.ceil(Math.random() * 5);
     }

     componentDidMount() {
          this.interval = setInterval(() => {
               this.setState({
                    number: this.randomNumber()
               });
          }, 1000);
     }

     render() {
          if (this.state.number > 3) {
               return <div>Większa od 3</div>;
          } else {
               return <div>Mniejsza od 3</div>;
          }
     }
     componentWillUnmount() {
          clearInterval(this.interval);
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <NumberRandomInfo />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, NumberRandomInfo };
