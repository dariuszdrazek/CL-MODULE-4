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
          return (
               <div>
                    <ClockTimeHour hour={this.props.date.getHours()} />
                    <ClockTimeMinute minute={this.props.date.getMinutes()} />
                    <ClockTimeSecond second={this.props.date.getSeconds()} />
               </div>
          );
     }
}

class ClockTimeHour extends Component {
     render() {
          return <span>{this.props.hour}:</span>;
     }
}
class ClockTimeMinute extends Component {
     render() {
          return <span>{this.props.minute}:</span>;
     }
}
class ClockTimeSecond extends Component {
     render() {
          return <span>{this.props.second}</span>;
     }
}

class ClockDate extends Component {
     render() {
          return (
               <>
                    <CLockDateYear year={this.props.date.getFullYear()} />
                    <CLockDateMonth month={this.props.date.getMonth()} />
                    <CLockDateDay day={this.props.date.getDate()} />
               </>
          );
     }
}

class CLockDateYear extends Component {
     render() {
          return <span>{this.props.year}|</span>;
     }
}

class CLockDateMonth extends Component {
     render() {
          const months = ['sty', 'lut', 'mar', 'kw', 'maj', 'cze', 'lip'];

          return (
               <span>
                    {months.map((item, index) => {
                         if (index === this.props.month) {
                              return item + '|';
                         }
                    })}
               </span>
          );
     }
}

class CLockDateDay extends Component {
     render() {
          return this.props.day < 10 ? (
               <span>{'0' + this.props.day}</span>
          ) : (
               <span>{this.props.day}</span>
          );
     }
}

function App() {
     return <Clock />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, Clock, ClockDate, ClockTime };
