import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ProductTraingle extends Component {
     constructor(props) {
          super(props);

          this.state = {
               buttons: ['dobrze', 'szybko', 'tanio'],
               backgroundColor: 'grey'
          };
     }

     handleClick = () => {
          this.setState({
               backgroundColor:
                    this.state.backgroundColor === 'grey' ? 'green' : 'grey'
          });
     };

     render() {
          return (
               <div>
                    {this.state.buttons.map((button, index) => {
                         return (
                              <button
                                   onClick={this.handleClick}
                                   key={index}
                                   style={{
                                        backgroundColor: this.state
                                             .backgroundColor
                                   }}>
                                   {button}
                              </button>
                         );
                    })}
               </div>
          );
     }
}

function App() {
     return <ProductTraingle />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { ProductTraingle, App };
