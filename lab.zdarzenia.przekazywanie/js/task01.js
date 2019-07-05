import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class PassParameter extends Component {
     handleClick(event, text) {
          event.preventDefault();
          console.log(text);
     }

     render() {
          return (
               <>
                    <a
                         onClick={event => this.handleClick(event, 'test')}
                         href="#">
                         Klik!
                    </a>
               </>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <PassParameter />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, PassParameter };
