import ReactDOM from 'react-dom';

import React, { Component } from 'react';

class SearchClass extends Component {
     render() {
          return (
               <>
                    <input type="text" />
                    <button>Wyszukaj</button>
               </>
          );
     }
}

ReactDOM.render(<SearchClass />, document.getElementById('app'));
