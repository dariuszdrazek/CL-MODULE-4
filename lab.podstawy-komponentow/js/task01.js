import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class LikeBox extends Component {
     render() {
          return (
               <>
                    <span>100 likes</span>
                    <input type="submit" value="Lubię to" />
               </>
          );
     }
}

ReactDOM.render(<LikeBox />, document.getElementById('app'));

export { LikeBox };
