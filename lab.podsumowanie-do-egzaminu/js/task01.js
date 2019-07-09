import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class MixedData extends Component {
     constructor(props) {
          super(props);

          this.state = {
               options: ['Banany', 'Pomarańcze', 'Anansy'],
               values: []
          };
     }

     handleChange = e => {
          const values = [...this.state.values, e.target.value];
          this.setState({
               values: values
          });
     };

     render() {
          return (
               <div className="select">
                    <input
                         type="text"
                         onChange={this.handleChange}
                         value={this.state.values}
                    />
                    <select
                         value={this.state.values}
                         onChange={this.handleChange}>
                         {this.state.options.map((item, index) => {
                              return (
                                   <option key={item} value={item}>
                                        {item}
                                   </option>
                              );
                         })}
                    </select>
               </div>
          );
     }
}

class App extends Component {
     render() {
          return (
               <div>
                    <MixedData />
               </div>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
