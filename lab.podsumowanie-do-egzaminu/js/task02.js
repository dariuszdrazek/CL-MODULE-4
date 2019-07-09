import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class ToDo extends Component {
     constructor(props) {
          super(props);

          this.state = {
               tasks: [],
               value: '',
               backgroundColor: ''
          };
     }

     handleSubmit = e => {
          e.preventDefault();
          let task = {
               name: this.state.value,
               done: false
          };
          const tasks = [...this.state.tasks, task];

          this.setState({
               tasks: tasks,
               value: ''
          });
     };

     handleChange = e => {
          this.setState({
               value: e.target.value
          });
     };

     handleClick = (e, index) => {
          const tasks = [...this.state.tasks];
          tasks[index].done = false;
          this.setState({
               tasks: tasks
          });
     };
     render() {
          return (
               <div className="todo">
                    <Header
                         handleSubmit={this.handleSubmit}
                         value={this.state.value}
                         handleChange={this.handleChange}
                    />
                    <ToDoList
                         tasks={this.state.tasks}
                         handleClick={this.handleClick}
                         item={this.state.tasks}
                    />
               </div>
          );
     }
}

class Header extends Component {
     render() {
          return (
               <div className="header">
                    <h2>Lista rzeczy do zrobienia</h2>
                    <AddTask
                         handleSubmit={this.props.handleSubmit}
                         value={this.props.value}
                         handleChange={this.props.handleChange}
                    />
               </div>
          );
     }
}

class ToDoList extends Component {
     render() {
          return (
               <div className="toDoList">
                    <ul>
                         {this.props.tasks.map((item, index) => {
                              return (
                                   <li
                                        key={index}
                                        onClick={e =>
                                             this.props.handleClick(e, index)
                                        }
                                        style={{
                                             backgroundColor:
                                                  this.props.item.done == false
                                                       ? 'red'
                                                       : 'green'
                                        }}>
                                        {item.name}
                                   </li>
                              );
                         })}
                    </ul>
               </div>
          );
     }
}

class AddTask extends Component {
     render() {
          return (
               <form action="" onSubmit={this.props.handleSubmit}>
                    <input
                         type="text"
                         value={this.props.value}
                         onChange={this.props.handleChange}
                    />
                    <button className="addBtn">Add Task</button>
               </form>
          );
     }
}

class App extends Component {
     render() {
          return <ToDo />;
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
