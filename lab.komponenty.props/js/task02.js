import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class LikeBox extends Component {
     render() {
          return (
               <>
                    <span>{this.props.likes} likes</span>
                    <input type="submit" value="Lubię to" />
               </>
          );
     }
}

ReactDOM.render(<LikeBox likes={2000} />, document.getElementById('app'));
/**
 * Nie modyfikujcie kodu poniżej
 */
export { LikeBox };
