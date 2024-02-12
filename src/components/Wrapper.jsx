import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodo from './EditTodo'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const Wrapper = () => {
  const [todos, setTodos] = useState([])

 
  const addTodo = todo => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = id =>{
    setTodos(todos.filter (todo=> todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
 

  return (
    <div className='flex flex-col justify-center sm:w-[50vw] lg:bg-[#001d3d] rounded-xl mt-5 lg:px-10 py-10 '>
      
      <TodoForm addTodo={addTodo} />
      <div class="divide-y divide-[#003566]  divide-solid">
        <h1 className='text-center  text-2xl'>My tasks</h1>
        <div className='my-5'></div>
      </div>
      
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            
          />
        )
      )}

    </div>

  )
}

export default Wrapper