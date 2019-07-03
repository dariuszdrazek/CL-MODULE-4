import React, { Component } from 'react';
import SearchBar from './searchbar';
import ToDoList from './todolist';
import AddTask from './addtask';

export default class ToDo extends Component {
     render() {
          return (
               <div className="toDo">
                    <h1>Lista Tasków</h1>
                    <SearchBar />
                    <ToDoList />
                    <AddTask />
               </div>
          );
     }
}
