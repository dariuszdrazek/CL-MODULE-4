import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ButtonTest extends Component {
     handleOnMove() {
          console.log('Najechano na przycisk');
     }
     render() {
          return (
               <div>
                    <button onMouseEnter={this.handleOnMove}>Test</button>
               </div>
          );
     }
}

class App extends Component {
     render() {
          return <ButtonTest />;
     }
}

ReactDOM.render(<App />, document.getElementById('app'));

export { ButtonTest, App };
