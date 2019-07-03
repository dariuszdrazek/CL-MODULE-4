import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Products from './data/products';
import products from './data/products';
class App extends Component {
     render() {
          return <Receipt />;
     }
}

class Receipt extends Component {
     render() {
          return (
               <table className="receipt">
                    <ReceiptHeader />
                    <ReceiptItems products={Products} />
                    <ReceiptFooter products={Products} />
               </table>
          );
     }
}

class ReceiptHeader extends Component {
     render() {
          return (
               <thead>
                    <tr>
                         <th>Nazwa</th>
                         <th>Cena</th>
                         <th>Ilość</th>
                         <th>Łączna cena</th>
                    </tr>
               </thead>
          );
     }
}

class ReceiptItems extends Component {
     render() {
          return (
               <tbody>
                    {this.props.products.map(product => (
                         <ReceiptItem data={product} />
                    ))}
               </tbody>
          );
     }
}

class ReceiptFooter extends Component {
     render() {
          return (
               <tfoot>
                    <tr>
                         <td>RAZEM</td>
                         <td>-</td>
                         <td>-</td>
                         <td>
                              {this.props.products
                                   .reduce(
                                        (prev, curr) =>
                                             prev + curr.count * curr.price,
                                        0
                                   )
                                   .toFixed(2) + 'zł'}
                         </td>
                    </tr>
               </tfoot>
          );
     }
}

class ReceiptItem extends Component {
     render() {
          const { price, count, name } = this.props.data;
          return (
               <tr>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{count}</td>
                    <td>{price * count}zł</td>
               </tr>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));

export {
     App,
     ReceiptFooter,
     ReceiptItem,
     ReceiptItems,
     ReceiptHeader,
     Receipt
};
