import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class EnterAndLeave extends Component {
     constructor(props) {
          super(props);

          this.state = {
               width: '400px',
               backgroundColor: '#0f0'
          };
     }

     handleMouseEnter = () => {
          this.setState({
               width: '500px',
               backgroundColor: '#00f'
          });
     };

     handleMouseLeave = () => {
          this.setState({
               width: '400px',
               backgroundColor: '#0f0'
          });
     };

     render() {
          const style = {
               width: this.state.width,
               height: '500px',
               backgroundColor: this.state.backgroundColor
          };

          return (
               <div
                    style={style}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
               />
          );
     }
}

function App() {
     return <EnterAndLeave />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, EnterAndLeave };
