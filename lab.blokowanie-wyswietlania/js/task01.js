import React from 'react';
import ReactDOM from 'react-dom';
import fakeAPI from './data/fakeAPI';

class AccountData extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               data2: true,
               styles: {
                    border: '1px solid black'
               }
          };
     }

     componentDidMount() {
          fakeAPI.load().then(data =>
               this.setState({
                    data: data,
                    data2: false
               })
          );
     }

     render() {
          if (this.state.data2) {
               return null;
          } else {
               return (
                    <table style={this.state.styles}>
                         <thead>
                              <tr>
                                   <th style={this.state.styles}>Day</th>
                                   <th style={this.state.styles}>Balance</th>
                                   <th style={this.state.styles}>Money</th>
                              </tr>
                         </thead>
                         <tbody>
                              {this.state.data.map((item, index) => {
                                   return (
                                        <tr key={index}>
                                             <td style={this.state.styles}>
                                                  {item.day}
                                             </td>
                                             <td style={this.state.styles}>
                                                  {item.balance}
                                             </td>
                                             <td style={this.state.styles}>
                                                  {item.change}
                                             </td>
                                        </tr>
                                   );
                              })}
                         </tbody>
                    </table>
               );
          }
     }
}
function App() {
     return <AccountData />;
}

ReactDOM.render(<App />, document.getElementById('app'));

export { App, AccountData };
