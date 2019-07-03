import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Clock extends Component {
     constructor(props) {
          super(props);

          this.state = {
               date: new Date()
          };
     }

     componentDidMount() {
          this.interval = setInterval(() => {
               this.setState({
                    date: new Date()
               });
          }, 1000);
     }

     render() {
          return (
               <>
                    <ClockTime date={this.state.date} />
                    <ClockDate date={this.state.date} />
               </>
          );
     }

     componentWillUnmount() {
          clearInterval(this.interval);
     }
}

class ClockTime extends Component {
     render() {
          return <h1>{this.props.date.toLocaleTimeString()}</h1>;
     }
}

class ClockDate extends Component {
     render() {
          return <h1>{this.props.date.toLocaleDateString()}</h1>;
     }
}
function App() {
     return <Clock />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, Clock, ClockDate, ClockTime };
