import React, { Component } from 'react';
import Task from './task';
export default class ToDoList extends Component {
     constructor(props) {
          super(props);

          this.state = {
               tasks: [
                    {
                         id: 1,
                         title: 'Learning React',
                         completed: false
                    },
                    {
                         id: 2,
                         title: 'Make some sandwiches',
                         completed: false
                    }
               ]
          };
     }
     render() {
          return <ul>{<Task tasks={this.state.tasks} />}</ul>;
     }
}
