import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Shop extends Component {
     constructor(props) {
          super(props);

          this.state = {
               things: []
          };
     }

     handleBuy = title => {
          const items = [...this.state.things];
          items.push(title);
          this.setState({
               things: items
          });
     };

     render() {
          return (
               <div>
                    <ShopItem title="skarpetki" handleClick={this.handleBuy} />
                    <ShopItem title="koszula" handleClick={this.handleBuy} />
                    <ShopItem title="pończochy" handleClick={this.handleBuy} />
                    <ul>
                         {this.state.things.map((item, index) => {
                              return <li key={index}>{item}</li>;
                         })}
                    </ul>
               </div>
          );
     }
}

class ShopItem extends Component {
     onBuy = () => {
          this.props.handleClick(this.props.title);
     };

     render() {
          return (
               <>
                    <h1>{this.props.title}</h1>
                    <button onClick={this.onBuy}>Buy</button>
               </>
          );
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <Shop />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, Shop, ShopItem };
