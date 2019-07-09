import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ParentComponent extends Component {
     render() {
          return (
               <>
                    <ChildComponent text={this.props.text} />
               </>
          );
     }
}

class ChildComponent extends Component {
     render() {
          return (
               <>
                    <GrandchildComponent text={this.props.text} />
               </>
          );
     }
}

class GrandchildComponent extends Component {
     render() {
          return (
               <>
                    <h1>{this.props.text}</h1>
               </>
          );
     }
}

ReactDOM.render(
     <ParentComponent text="To działa" />,
     document.getElementById('app')
);
