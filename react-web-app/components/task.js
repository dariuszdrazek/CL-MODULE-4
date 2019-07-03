import React, { Component } from 'react';

export default class Task extends Component {
     render() {
          return (
               <>
                    {this.props.tasks.map(el => {
                         return <li>{el.title}</li>;
                    })}
               </>
          );
     }
}
