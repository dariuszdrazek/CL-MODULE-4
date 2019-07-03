import ReactDOM from 'react-dom';
import React, { Component } from 'react';

const data = [
     {
          title: 'Mysz komputerowa',
          image:
               'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
     },
     {
          title: 'Klawiatura',
          image:
               'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
     },
     {
          title: 'Laptop programisty',
          image:
               'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
     }
];

class ShopItemHeader extends Component {
     render() {
          return (
               <div>
                    <h1>{this.props.title}</h1>
                    <img src={this.props.image} alt="test" />
               </div>
          );
     }
}

class ShopList extends Component {
     render() {
          return (
               <div>
                    {this.props.backet.map(item => {
                         return (
                              <ShopItemHeader
                                   title={item.title}
                                   image={item.image}
                              />
                         );
                    })}
               </div>
          );
     }
}

class App extends Component {
     render() {
          return (
               <div className="shoplist">
                    <ShopList backet={data} />
               </div>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));

export { ShopItemHeader, ShopList, App };
