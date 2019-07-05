import React from 'react';
import ReactDOM from 'react-dom';

class EnterAndLeave extends React.Component {
     constructor(props) {
          super(props);
          this.defaultState = {
               backgroundColor: 'green',
               height: '500px'
          };

          this.state = { ...this.defaultState };
     }

     handleEnter() {
          this.setState({
               backgroundColor: 'blue',
               height: '400px'
          });
     }

     handleLeave() {
          this.setState({
               ...this.defaultState
          });
     }

     render() {
          return (
               <div
                    style={{ ...this.state, width: '100px' }}
                    onMouseEnter={() => this.handleEnter()}
                    onMouseLeave={() => this.handleLeave()}
               />
          );
     }
}

ReactDOM.render(<EnterAndLeave />, document.getElementById('root'));
