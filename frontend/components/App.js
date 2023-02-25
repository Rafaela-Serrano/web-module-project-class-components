import React from 'react';
import { useState } from 'react';

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
  render() {
    return (
      <div>
        <h2>Todos:</h2>

        <ul>
          {
            this.state.todos.map( todo => { return (<li>{todo.name} 
            {todo.completed ? <span>  ✔  </span> : <span></span>  } </li>)})
          }
          
        </ul>

        <form>
          <input/>
          <button>Submit</button>
        </form>

        <button>Hide Completed</button>
      </div>
    )
  }
}
