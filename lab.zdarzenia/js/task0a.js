import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Buttons extends Component {
     constructor(props) {
          super(props);

          this.state = {};
     }

     handleOnClickOne = e => {
          console.log('Pierwszy przycisk klikniety');
     };

     handleOnClickTwo = e => {
          console.log(this);
          const button = document.querySelector('button:nth-child(2)');
          button.textContent = 'Click';
     };

     handleOnClickThree = e => {
          const button = document.querySelector('button:last-child');
          button.style.width = '300px';
     };
     render() {
          return (
               <>
                    <button onClick={this.handleOnClickOne}>Klik!</button>
                    <button onClick={this.handleOnClickTwo}>
                         {this.state.text}!
                    </button>
                    <button onClick={this.handleOnClickThree}>Klik!</button>
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
