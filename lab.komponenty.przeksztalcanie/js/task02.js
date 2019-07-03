import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// function CurrencyConverter(props) {
//      const { fromCurr, toCurr, fromVal, convRate } = props;
//      const toVal = fromVal * convRate;
//      return (
//           <div>
//                <strong>{fromVal.toFixed(2)}</strong> {fromCurr} =&gt;{' '}
//                <strong>{toVal.toFixed(2)}</strong> {toCurr}
//           </div>
//      );
// }

class CurrencyConverter extends Component {
     render() {
          const { fromCurr, toCurr, fromVal, convRate } = this.props;
          const toVal = fromVal * convRate;
          return (
               <div>
                    <strong>{fromVal.toFixed(2)}</strong> {fromCurr} =&gt;{' '}
                    <strong>{toVal.toFixed(2)}</strong> {toCurr}
               </div>
          );
     }
}

class App extends Component {
     render() {
          const data = [
               {
                    fromCurr: 'PLN',
                    toCurr: 'EUR',
                    fromVal: 250,
                    convRate: 0.25
               },
               {
                    fromCurr: 'PLN',
                    toCurr: 'EUR',
                    fromVal: 250,
                    convRate: 0.25
               },
               {
                    fromCurr: 'PLN',
                    toCurr: 'EUR',
                    fromVal: 250,
                    convRate: 0.25
               },
               {
                    fromCurr: 'PLN',
                    toCurr: 'EUR',
                    fromVal: 250,
                    convRate: 0.5
               }
          ];
          return (
               <>
                    {data.map(item => {
                         return (
                              <CurrencyConverter
                                   fromCurr={item.fromCurr}
                                   toCurr={item.toCurr}
                                   fromVal={item.fromVal}
                                   convRate={item.convRate}
                              />
                         );
                    })}
               </>
          );
     }
}

/**
 * Nie zmieniajcie kodu poniżej
 */
ReactDOM.render(<App />, document.getElementById('app'));

export { CurrencyConverter, App };
