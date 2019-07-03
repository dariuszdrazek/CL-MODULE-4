import ReactDOM from 'react-dom';
import React, { Component } from 'react';
class HelloWorld extends Component {
     constructor(props) {
          super(props);
          console.log('constructor');
          this.state = {
               text: 'Hello World'
          };
     }
     componentDidMount() {
          this.timeout = setTimeout(() => {
               this.setState({
                    text: 'Hi , Everyone'
               });
          }, 5000);
          console.log('componentDidMount');
     }

     render() {
          console.log('render');
          return <h1>{this.state.text}</h1>;
     }

     componentDidUpdate(prevProps, prevState) {
          //po setState sie odpala
          console.log('update');
     }

     componentWillUnmount() {
          clearTimeout(this.timeout);
     }
}

function App() {
     return <HelloWorld />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { HelloWorld, App };
