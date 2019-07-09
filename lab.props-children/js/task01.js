import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ShowMore extends Component {
     constructor(props) {
          super(props);

          this.state = {
               more: true
          };
     }

     handleClick = e => {
          e.preventDefault();
          this.setState({
               more: false
          });
     };

     render() {
          if (this.state.more) {
               return (
                    <div>
                         <a href="#" onClick={this.handleClick}>
                              Show More
                         </a>
                    </div>
               );
          } else {
               return <>{this.props.children}</>;
          }
     }
}

class More extends Component {
     render() {
          return (
               <>
                    <p>{this.props.p}</p>
               </>
          );
     }
}

ReactDOM.render(
     <ShowMore>
          <More
               p="Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Omnis, tenetur."
          />
     </ShowMore>,
     document.getElementById('app')
);
