import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ProductsList extends Component {
     constructor(props) {
          super(props);

          this.state = {
               products: ['banana', 'orange', 'peach']
          };
     }

     render() {
          return (
               <ul>
                    {this.state.products.map(el => {
                         return <li>{el}</li>;
                    })}
               </ul>
          );
     }
}

export default class App extends Component {
     render() {
          return (
               <div>
                    <ProductsList />
               </div>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));

export { ProductsList, App };
