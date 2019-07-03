import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class MobileMenu extends Component {
     constructor(props) {
          super(props);

          this.state = {
               display: 'none',
               display2: 'block'
          };
     }
     handleClick = () => {
          this.setState({
               display: this.state.display === 'none' ? 'block' : 'none',
               display2: this.state.display2 === 'none' ? 'block' : 'none'
          });
     };

     render() {
          const style = {
               display: this.state.display
          };
          return (
               <header>
                    <MenuPhoto
                         style2={{ display: this.state.display2 }}
                         handleClick={this.handleClick}
                    />
                    <MenuList style={style} handleClick={this.handleClick} />
               </header>
          );
     }
}

class MenuPhoto extends Component {
     render() {
          return (
               <div onClick={this.props.handleClick} style={this.props.style2}>
                    <img
                         src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
                         alt="Otwórz menu"
                    />
               </div>
          );
     }
}

class MenuList extends Component {
     render() {
          return (
               <nav style={this.props.style}>
                    <ul>
                         <li>Menu 1 ...</li>
                         <li>Menu 2 ...</li>
                         <li>Menu 3 ...</li>
                         <li>Menu 4 ...</li>
                    </ul>
                    <Button handleClick={this.props.handleClick} />
               </nav>
          );
     }
}

class Button extends Component {
     render() {
          return (
               <>
                    <button onClick={this.props.handleClick}>
                         Schowaj Menu
                    </button>
               </>
          );
     }
}

function App() {
     return <MobileMenu />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, MobileMenu };
