import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Hello extends Component {
     render() {
          const { name, surname } = this.props;
          return (
               <h1>
                    Hello {name} {surname}
               </h1>
          );
     }
}

ReactDOM.render(
     <Hello name="Jan" surname="Kowalski" />,
     document.getElementById('app')
);
