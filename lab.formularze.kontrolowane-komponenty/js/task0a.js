import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class HelloName extends Component {
     constructor(props) {
          super(props);

          this.state = {
               text: ''
          };
     }

     changeInput = e => {
          this.setState({
               text: e.target.value
          });
     };

     render() {
          return (
               <div>
                    <form>
                         <label>
                              Wpisz swoje imię
                              <input
                                   type="text"
                                   value={this.state.text}
                                   onChange={this.changeInput}
                              />
                         </label>
                    </form>
                    <h1>Hello {this.state.text}</h1>
               </div>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <HelloName />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { HelloName, App };
