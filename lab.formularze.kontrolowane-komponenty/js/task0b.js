import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class TextField extends Component {
     constructor(props) {
          super(props);

          this.state = {
               option: '',
               textLength: 0
          };
     }

     handleSelect = e => {
          this.setState({
               option: e.target.value,
               textLength: e.target.value.length
          });
     };

     render() {
          return (
               <div>
                    <form action="">
                         <select
                              onChange={this.handleSelect}
                              value={this.state.option}>
                              <option>Opcja 1</option>
                              <option>Opcja 2</option>
                              <option>Opcja 3</option>
                              <option>Opcja 4</option>
                         </select>
                         <p>{this.state.option}</p>
                         <span>{this.state.textLength}</span>
                    </form>
               </div>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <TextField />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { TextField, App };
