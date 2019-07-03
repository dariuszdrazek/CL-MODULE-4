import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Modal extends Component {
     constructor(props) {
          super(props);

          this.state = {
               heading: this.props.heading,
               modalOpen: false
          };
     }

     componentDidMount() {
          this.timer = setTimeout(() => {
               this.setState({
                    modalOpen: true
               });
          }, 10000);
     }

     render() {
          return !this.state.modalOpen ? null : <h1>{this.state.heading}</h1>;
     }
}

function App() {
     return (
          <div>
               <h1>Test okna modalnego</h1>
               <Modal heading="Zapisz się do newslettera" />
          </div>
     );
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, Modal };
