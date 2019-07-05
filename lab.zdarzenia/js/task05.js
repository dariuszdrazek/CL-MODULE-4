import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class CrazyDiv extends Component {
     constructor(props) {
          super(props);

          this.state = {
               left: 0,
               top: 0
          };
     }

     randomNumber() {
          return Math.floor(Math.random() * 1001) + 'px';
     }

     handleMouseEnter = e => {
          this.setState({
               left: this.randomNumber(),
               top: this.randomNumber()
          });
     };

     render() {
          const style = {
               height: '100px',
               width: '100px',
               position: 'absolute',
               backgroundColor: 'red',
               ...this.state
          };
          return <div style={style} onMouseEnter={this.handleMouseEnter} />;
     }
}

function App() {
     return <CrazyDiv />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, CrazyDiv };
