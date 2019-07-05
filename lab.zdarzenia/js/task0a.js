import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Buttons extends Component {
     constructor(props) {
          super(props);

          this.state = {
               text: 'Klik!',
               style: {}
          };
     }

     handleOnClickOne = e => {
          console.log('Pierwszy przycisk klikniety');
     };

     handleOnClickTwo = e => {
          this.setState({
               text: this.state.text === 'Klik!' ? 'Click' : 'Klik!'
          });
     };

     handleOnClickThree = e => {
          this.setState({
               style: {
                    width: '300px'
               }
          });
     };
     render() {
          return (
               <>
                    <button onClick={this.handleOnClickOne}>
                         {this.state.text}
                    </button>
                    <button onClick={this.handleOnClickTwo}>
                         {this.state.text}!
                    </button>
                    <button
                         style={this.state.style}
                         onClick={this.handleOnClickThree}>
                         {this.state.text}
                    </button>
               </>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <Buttons />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, Buttons };
