import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class Bulb extends Component {
     constructor(props) {
          super(props);

          this.state = {
               backgroundColor: '#fff',
               text: 'On'
          };
     }

     handleOnClick = e => {
          this.setState({
               text: this.state.text === 'On' ? 'Off' : 'On',
               backgroundColor:
                    this.state.backgroundColor === '#fff' ? '#ff0' : '#fff'
          });
     };
     render() {
          const style = {
               backgroundColor: this.state.backgroundColor,
               height: '100px',
               width: '100px'
          };
          return (
               <div style={style}>
                    <button onClick={this.handleOnClick}>
                         {this.state.text}
                    </button>
               </div>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <Bulb />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, Bulb };
