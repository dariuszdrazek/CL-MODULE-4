import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { runInThisContext } from 'vm';

const data = {
     title: 'MacBook Pro',
     image: 'https://bit.ly/2EEtduD',
     description:
          'Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.',
     price: 9999
};

class ShopItemHeader extends Component {
     render() {
          return (
               <div>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.image} alt={this.props.description} />
               </div>
          );
     }
}

class ShopItemDescription extends Component {
     render() {
          return (
               <>
                    <article>{this.props.description}</article>
               </>
          );
     }
}

class ShopItemPricing extends Component {
     render() {
          return (
               <div>
                    Cena: {this.props.price} zł
                    <button>Kup!</button>
               </div>
          );
     }
}

class ShopItem extends Component {
     render() {
          return (
               <>
                    <ShopItemHeader
                         title={this.props.item.title}
                         image={this.props.item.image}
                         description={this.props.item.description}
                    />
                    <ShopItemDescription
                         description={this.props.item.description}
                    />
                    <ShopItemPricing price={this.props.item.price} />
               </>
          );
     }
}

class App extends Component {
     render() {
          return (
               <>
                    <ShopItem item={data} />
               </>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
