import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import people from './data/people';

class PeopeList extends Component {
     constructor(props) {
          super(props);

          this.state = {
               people
          };
     }

     handleClick() {
          this.setState({
               people: this.state.people.reverse()
          });
     }

     render() {
          return (
               <div>
                    <ul>
                         {this.state.people.map((person, index) => {
                              return (
                                   <li key={index}>
                                        {person.name} {person.surname}
                                   </li>
                              );
                         })}
                    </ul>
                    <button onClick={() => this.handleClick()}>reverse</button>
               </div>
          );
     }
}

class App extends Component {
     render() {
          return (
               <div>
                    <PeopeList />
               </div>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
