import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const data = [
     {
          url: '/',
          text: 'Strona główna'
     },
     {
          url: '/blog',
          text: 'Blog'
     },
     {
          url: '/cennik',
          text: 'Cennik'
     },
     {
          url: '/kontakt',
          text: 'Kontakt'
     }
];
class Menu extends Component {
     render() {
          return (
               <ul>
                    {this.props.links.map(link => {
                         return (
                              <li>
                                   <a href={link.url}>{link.text}</a>
                              </li>
                         );
                    })}
               </ul>
          );
     }
}

ReactDOM.render(<Menu links={data} />, document.getElementById('app'));

/**
 * Nie modyfikujcie kodu poniżej
 */
export { Menu };
