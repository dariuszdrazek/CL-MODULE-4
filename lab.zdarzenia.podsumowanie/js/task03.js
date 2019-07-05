import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class SpeedClickGame extends Component {
     render() {
          return (
               <div>
                    <SpeedClickButton time={2000} />
               </div>
          );
     }
}

class SpeedClickButton extends Component {
     constructor(props) {
          super(props);

          this.state = {
               time: this.props.time,
               disabled: false,
               points: 0
          };
     }

     handleClick = () => {
          this.setState({
               points: this.state.points + 1,
               time: this.state.time - 50
          });
     };

     componentDidMount() {
          this.intervalButton = setInterval(() => {
               if (this.state.time > 0) {
                    this.setState({
                         time: this.state.time - 50
                    });
               } else {
                    this.setState({
                         disabled: true
                    });
               }
          }, 50);
     }

     render() {
          return (
               <div>
                    <button
                         disabled={this.state.disabled}
                         onClick={this.handleClick}>
                         Click Me!
                    </button>
                    <h1>{this.state.time}</h1>
                    <h2>{this.state.points}</h2>
               </div>
          );
     }

     componentWillUnmount() {
          clearInterval(this.intervalButton);
     }
}

function App() {
     return <SpeedClickGame />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { SpeedClickGame, SpeedClickButton, App };
