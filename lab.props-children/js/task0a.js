import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ParentComponent extends Component {
     render() {
          return (
               <>
                    <ChildComponent>{this.props.children}</ChildComponent>
               </>
          );
     }
}

class ChildComponent extends Component {
     render() {
          return (
               <>
                    <GrandchildComponent>
                         {this.props.children}
                    </GrandchildComponent>
               </>
          );
     }
}

class GrandchildComponent extends Component {
     render() {
          return <>{this.props.children}</>;
     }
}

ReactDOM.render(
     <ParentComponent>
          <h1>To działa</h1>
     </ParentComponent>,
     document.getElementById('app')
);
