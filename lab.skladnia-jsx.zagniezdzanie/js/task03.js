import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Invites extends Component {
     constructor(props) {
          super(props);

          this.state = {
               peoples: []
          };
     }

     handleClick() {
          const newPerson = prompt('Podaj Imię i Nazwisko');
          let peoples = [...this.state.peoples];
          if (peoples.indexOf(newPerson) === -1) {
               peoples.unshift(newPerson);
          } else {
               alert('Jesteś już na liście');
          }
          this.setState({
               peoples
          });
     }

     render() {
          return (
               <div>
                    <ul>
                         {this.state.peoples.map((person, index) => {
                              return <li key={index}>{person}</li>;
                         })}
                    </ul>
                    <button onClick={() => this.handleClick()}>
                         Add person
                    </button>
               </div>
          );
     }
}

class App extends Component {
     render() {
          return (
               <div>
                    <Invites />
               </div>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
