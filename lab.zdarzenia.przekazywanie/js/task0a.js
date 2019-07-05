import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ButtonCounter extends Component {
     constructor(props) {
          super(props);

          this.state = {
               counter: 0
          };
     }

     handleClick = e => {
          // e.preventDefault();
          this.setState({
               counter: this.state.counter + 1
          });
     };

     render() {
          return (
               <div>
                    <h1>{this.state.counter}</h1>
                    <ButtonToClick handleClick={this.handleClick} />
                    <ButtonToClick handleClick={this.handleClick} />
               </div>
          );
     }
}

class ButtonToClick extends Component {
     render() {
          return (
               <>
                    <button onClick={this.props.handleClick}>Klik!</button>
               </>
          );
     }
}

function App() {
     return <ButtonCounter />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, ButtonCounter, ButtonToClick };
