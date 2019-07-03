import React from 'react';
import ReactDOM from 'react-dom';

class TextTyper extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               currText: this.props.text[0]
          };
     }

     componentDidMount() {
          let charId = 1;
          let newString = this.state.currText;
          this.interval = setInterval(() => {
               if (charId > this.props.text.length) {
                    clearInterval(this.interval);
               } else {
                    newString = this.props.text.slice(0, charId);
                    this.setState({
                         currText: newString
                    });
                    charId++;
               }
          }, 1000);
     }

     render() {
          return <h1>{this.state.currText}</h1>;
     }

     componentWillUnmount() {
          clearInterval(this.interval);
     }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
     return <TextTyper text="Witaj!" />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, TextTyper };
