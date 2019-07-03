import React from 'react';
import ReactDOM from 'react-dom';
// import products from './data/products';

class Button extends React.Component {
     render() {
          return (
               <>
                    <button>{this.props.text}</button>
               </>
          );
     }
}

class Message extends React.Component {
     render() {
          return (
               <>
                    <Button text={this.props.text} />
                    <p>{this.props.messageText}</p>
               </>
          );
     }
}

class App extends React.Component {
     render() {
          return (
               <>
                    <Message text="Zaloguj" messageText="button 1" />
                    <Message text="Zarejestruj" messageText="button 2" />
               </>
          );
     }
}

/**
 * Nie zmieniajcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById('app'));

// export {
//      App,
//      ReceiptFooter,
//      ReceiptItem,
//      ReceiptItems,
//      ReceiptHeader,
//      Receipt
// };
