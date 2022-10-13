import { useState } from 'react'
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from './components/AddTodoForm'

const initialTodos: Todo[] = [
  {
    text: "walk after breakfast",
    complete: false
  },
  {
    text: "learn typescript",
    complete: true
  }
]



function App() {
  const [todos, setTodos] = useState(initialTodos)
const toggleTodo = (selectedTodo: Todo)=>{
  const newTodos = todos.map((todo)=>{
    if(todo === selectedTodo){
      return{
        ...todo,
        complete: !todo.complete
      }
    }
    return todo
  })
  setTodos(newTodos)
}

const addTodo: AddTodo = (text: string)=>{
  const newTodo = {text, complete: false}
  setTodos([...todos, newTodo])
}

const clearTodoList: ClearTodoList = ()=>{
    setTodos([]);
}

  return (
    <>
      <AddTodoForm addTodo={addTodo} clearTodoList={clearTodoList} />
      <TodoList todos={todos}  toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
