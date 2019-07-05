import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Buttons extends Component {
     constructor(props) {
          super(props);

          this.state = {
               buttons: [
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik',
                    'klik'
               ]
          };
     }
     handleClick(e, index) {
          const buttons = [...this.state.buttons];
          buttons.map((button, i) => {
               if (index === i) {
                    this.setState({});
               }
          });
     }

     render() {
          return (
               <>
                    {this.state.buttons.map((button, index) => {
                         return (
                              <button
                                   key={index}
                                   onClick={e => this.handleClick(e, index)}>
                                   {button}
                              </button>
                         );
                    })}
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

export { Buttons, App };
