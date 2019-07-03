import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class EventsTest extends Component {
     constructor(props) {
          super(props);

          this.state = {
               style: this.props.style
          };
     }

     handleOnClick() {
          this.setState({
               style: { width: '200px', height: '200px', background: 'red' }
          });
          console.log(this.state);
     }
     handleMouseEnter() {
          console.log('najechanie na element');
     }

     handleMouseLeaves() {
          console.log('opuszczenie elementu');
     }

     render() {
          return (
               <div
                    style={this.state.style}
                    onClick={e => this.handleOnClick}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeaves}
               />
          );
     }
}

class App extends Component {
     render() {
          const style = {
               width: '200px',
               height: '200px',
               background: 'black'
          };
          return <EventsTest style={style} />;
     }
}

ReactDOM.render(<App />, document.getElementById('app'));

export { EventsTest, App };
