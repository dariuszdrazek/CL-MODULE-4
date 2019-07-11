import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class SelectOrType extends Component {
     constructor(props) {
          super(props);

          this.state = {
               value1: null,
               value2: null,
               text: 'inne'
          };
     }

     handleSelect = e => {
          this.setState({
               [e.target.id]: e.target.value
          });
     };

     handleClick = e => {
          e.preventDefault();
          this.setState({
               text: this.state.value2,
               value1: this.state.value2
          });
     };

     render() {
          console.log(this.state.value1);
          const fields = (
               <>
                    <input
                         type="text"
                         onChange={this.handleSelect}
                         id="value2"
                    />
                    <button onClick={this.handleClick}>Wybierz</button>
               </>
          );

          return (
               <form action="">
                    <select
                         onChange={this.handleSelect}
                         value={this.state.value1}
                         id="value1">
                         {this.props.items.map(car => {
                              return <option>{car}</option>;
                         })}
                         <option>{this.state.text}</option>
                    </select>
                    {this.state.value1 === this.state.text ? fields : null}
               </form>
          );
     }
}

function App() {
     return <SelectOrType items={['BMW', 'Jaguar', 'Porsche']} />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { SelectOrType, App };
