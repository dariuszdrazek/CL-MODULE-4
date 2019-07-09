import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class SelectOrType extends Component {
     constructor(props) {
          super(props);

          this.state = {
               option: '',
               display: 'none'
          };
     }

     handleChange = e => {
          this.setState({
               option: e.target.value
          });
     };

     render() {
          let other = 'inne';
          const items = [...this.props.items, other];
          return (
               <form action="">
                    <select
                         value={this.state.option}
                         onChange={this.handleChange}>
                         {items.map((item, index) => {
                              return (
                                   <option id={index} value={item}>
                                        {item}
                                   </option>
                              );
                         })}
                    </select>
                    <input
                         type="text"
                         style={{ display: this.state.display }}
                    />
                    <button style={{ display: this.state.display }}>
                         Accept
                    </button>
               </form>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <SelectOrType items={['BMW', 'Jaguar', 'Porshe']} />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { SelectOrType, App };
