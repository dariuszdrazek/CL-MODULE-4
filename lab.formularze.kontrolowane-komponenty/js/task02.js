import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class InteractiveDiv extends Component {
     constructor(props) {
          super(props);

          this.state = {
               width: 0
          };
     }

     handleChangeInput = e => {
          this.setState({
               width: e.target.value
          });
     };

     render() {
          const style = {
               height: '100px',
               width: this.state.width + 'px',
               backgroundColor: 'red'
          };
          return (
               <div>
                    <form action="">
                         <input
                              type="number"
                              value={this.state.width}
                              onChange={this.handleChangeInput}
                         />
                         <div style={style} />
                    </form>
               </div>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <InteractiveDiv />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { InteractiveDiv, App };
