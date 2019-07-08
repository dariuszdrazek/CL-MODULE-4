import React from 'react';
import ReactDOM from 'react-dom';

class ProductTriangle extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               activeButtons: []
          };
     }

     selectButton(i) {
          const tempButtons = [...this.state.activeButtons];

          if (this.state.activeButtons.length > 1) {
               tempButtons.shift();
          }

          tempButtons.push(i);

          this.setState({
               activeButtons: tempButtons
          });
     }

     render() {
          const style = {
               backgroundColor: 'green'
          };

          return (
               <>
                    <button
                         style={
                              this.state.activeButtons.indexOf(1) !== -1
                                   ? style
                                   : null
                         }
                         onClick={() => this.selectButton(1)}>
                         Dobrze
                    </button>
                    <button
                         style={
                              this.state.activeButtons.indexOf(2) !== -1
                                   ? style
                                   : null
                         }
                         onClick={() => this.selectButton(2)}>
                         Szybko
                    </button>
                    <button
                         style={
                              this.state.activeButtons.indexOf(3) !== -1
                                   ? style
                                   : null
                         }
                         onClick={() => this.selectButton(3)}>
                         Tanio
                    </button>
               </>
          );
     }
}

class App extends React.Component {
     render() {
          return <ProductTriangle />;
     }
}

const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
