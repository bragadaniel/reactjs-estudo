import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { TodoForm as BBB } from './components/todo/TodoForm';
import { TodoForm , TodoList , Footer } from './components/todo/';
import { addTodo, 
         generateId, 
         findById, 
         toggleTodo, 
         updateTodo,
        removeTodo } from './lib/todoHelpers';
import { pipe, partial } from './lib/utils';

class App extends Component {
  //  constructor(){
    //super();
    //this.handleInputChange = this.handleInputChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
  //}

  state = {
    todos: [
      { id: 1, name: 'Learn JSX', isComplete: true },
      { id: 2, name: 'Build and awesome App!', isComplete: false },
      { id: 3, name: 'Ship It!', isComplete: false }
    ],
    currentTodo: ''
  }
  handleRemove = (id, evt) =>{
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos })
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(
      findById, 
      toggleTodo, 
      partial(updateTodo, this.state.todos)
    );
    //const todo = findById(id, this.state.todos)
    //const toggled = toggleTodo(todo)
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({ todos: updatedTodos })
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = { 
      id: newId,
      name: this.state.currentTodo, 
      isComplete: false 
    };
    const updateTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updateTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (evt) =>{
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply the todo name'
    })
  }

  handleInputChange = (evt) =>{
    this.setState({
      currentTodo: evt.target.value
    });
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && (
            <span className="error">{this.state.errorMessage}</span>
          )}
          <TodoForm 
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          
          <TodoList 
          handleToggle={this.handleToggle} 
          todos={this.state.todos}
          handleRemove={this.handleRemove}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
