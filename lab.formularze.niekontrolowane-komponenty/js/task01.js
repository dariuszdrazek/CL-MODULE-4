import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class GivePassword extends Component {
     constructor(props) {
          super(props);

          this.state = {
               logIn: true
          };
     }

     handleClick = e => {
          e.preventDefault();

          if (this.props.pwd === parseFloat(this.input.value)) {
               this.setState({
                    logIn: false
               });
          }
     };

     render() {
          if (this.state.logIn) {
               return (
                    <form action="" onSubmit={this.handleClick}>
                         <input type="password" ref={el => (this.input = el)} />
                         <button>Click!</button>
                    </form>
               );
          } else {
               return <h1>I'm In</h1>;
          }
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <GivePassword pwd={1234} />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App };
