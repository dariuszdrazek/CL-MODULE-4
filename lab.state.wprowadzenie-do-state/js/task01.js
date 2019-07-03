import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class StateTest extends Component {
     constructor(props) {
          super(props);

          this.state = {
               currentChapter: 'Wprowadzenie do state',
               page: 87
          };
     }

     render() {
          return (
               <header>
                    <h3>{this.state.currentChapter}</h3>
                    <h4>{this.state.page}</h4>
               </header>
          );
     }
}

class App extends Component {
     render() {
          return (
               <div>
                    <StateTest />
               </div>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));

export { StateTest, App };
