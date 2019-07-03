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

     handleMouseEnter = e => {
          let randomNumber = Math.floor(Math.random() * 1001);

          this.setState({
               left: randomNumber,
               top: randomNumber
          });
     };

     render() {
          const style = {
               height: '100px',
               width: '100px',
               position: 'absolute',
               backgroundColor: 'red',
               top: this.state.top,
               left: this.state.left
          };
          return <div style={style} onMouseEnter={this.handleMouseEnter} />;
     }
}

function App() {
     return <CrazyDiv />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, CrazyDiv };
