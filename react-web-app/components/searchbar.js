import React, { Component } from 'react';

export default class SearchBar extends Component {
     render() {
          return (
               <div className="searchBar">
                    <input type="search" />
                    <label htmlFor="message">
                         <input type="checkbox" />
                         Pokaż wszystkie wykonane taski
                    </label>
               </div>
          );
     }
}
