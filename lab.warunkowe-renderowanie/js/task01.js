import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class MyButton extends Component {
     constructor(props) {
          super(props);

          this.state = {
               text: false
          };
     }

     handleClick = () => {
          this.setState({
               text: this.state.text ? false : true
          });
     };

     render() {
          return (
               <div>
                    <button onClick={this.handleClick}>
                         {this.state.text ? 'TAK' : 'NIE'}
                    </button>
               </div>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <MyButton />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, MyButton };
