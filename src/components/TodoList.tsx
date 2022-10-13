import { FC } from 'react'
import { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo
}

export const TodoList : FC<Props>= (props)=>{
    return(
        <ul>
            {
                props.todos.map((todo)=> (
                    <TodoListItem key={todo.text} todo={todo} toggleTodo={props.toggleTodo} />
                ) )
            }
        </ul>
    )
}