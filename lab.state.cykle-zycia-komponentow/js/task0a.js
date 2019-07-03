import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class LifeCyclesTester extends Component {
     constructor(props) {
          super(props);
          console.log('constructor');
          this.state = {
               test: 'text'
          };
     }

     componentDidMount() {
          this.setState({
               test: this.state + ' update'
          });
          console.log('komponent został zamontowany');
     }

     componentDidUpdate() {
          console.log('komponent zaktualizowany');
     }

     render() {
          console.log('render');
          return null;
     }

     componentWillUnmount() {
          console.log('komponent odmontowywany');
     }
}

ReactDOM.render(<LifeCyclesTester />, document.getElementById('app'));

export { LifeCyclesTester };
