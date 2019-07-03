import React from 'react';
import ReactDOM from 'react-dom';

function Header(props) {
     const { logo, searchPlaceholder } = props;

     return (
          <header>
               <a href="#">{logo}</a>
               <form>
                    <input placeholder={searchPlaceholder} name="s" />
                    <button>Search</button>
               </form>
          </header>
     );
}

function App(props) {
     return (
          <Header logo="Your company!" searchPlaceholder="Type some words..." />
     );
}

ReactDOM.render(<App />, document.getElementById('app'));

/**
 * Nie modyfikujcie kodu poniżej
 */
export { Header, App };
