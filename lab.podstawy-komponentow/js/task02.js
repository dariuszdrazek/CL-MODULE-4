import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Menu extends Component {
     render() {
          return (
               <ul>
                    <li>
                         <a href="/">Strona Główna</a>
                    </li>
                    <li>
                         <a href="/blog">Blog</a>
                    </li>
                    <li>
                         <a href="/cennik">Cennik</a>
                    </li>
                    <li>
                         <a href="/kontakt">Kontakt</a>
                    </li>
               </ul>
          );
     }
}

ReactDOM.render(<Menu />, document.getElementById('app'));

/**
 * Nie modyfikujcie kodu poniżej
 */
export { Menu };
