import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';
import Form from './Form';
import setSate from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:[

        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        
      ]
    }
  }

  handleCompleted = () => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter ( todo => {
        return ( todo.completed === false ) ; 
      })
    });
  }

  handleAdd = ( task ) => {

    const newTodo = {
      name: task ,
      id: Date.now() ,
      completed: false, 
    }
    this.setState({
      ...this.state,
      todos: [ ...this.state.todos, newTodo ]
    })
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map ( todo => {
        if (todo.id === clickedId ) {
          return {...todo,
          completed: !todo.completed
        }
        } 
          return todo ; 
        
      })
    })
  }

  render() {

    return (
      <div>
        <h2>Todos:</h2>

        <TodoList todos = {this.state.todos} handletoggled = {this.handleToggle}  />

        <Form handleAdd = {this.handleAdd} />

        <button onClick = {this.handleCompleted}>Hide Completed</button>

      </div>
    )
  }
}
