import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class CardName extends Component {
     render() {
          return (
               <>
                    <span>{this.props.name}</span>
               </>
          );
     }
}

class CardSurname extends Component {
     render() {
          return (
               <>
                    <span> {this.props.surname}</span>
               </>
          );
     }
}

class CardGenerator extends Component {
     render() {
          const { name, surname, email, jobTitle, phone } = this.props.data;
          return (
               <>
                    <div className="daneOsobowe">
                         <CardName name={name} />
                         <CardSurname surname={surname} />
                    </div>
                    {/* 
                    <CardJobTitle jobTitle={jobTitle} />
                    <CardEmail email={email} />
                    <CardPhone phone={phone} /> */}
               </>
          );
     }
}

class App extends Component {
     render() {
          const dane = {
               name: 'Dariusz',
               surname: 'Drążek',
               jobTitle: 'teacher',
               email: 'dariuszdrazek88@gmail.com',
               phone: 9999999
          };

          return (
               <div>
                    <CardGenerator data={dane} />
               </div>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
