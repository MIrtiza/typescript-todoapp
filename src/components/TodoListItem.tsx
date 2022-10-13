import { FC } from 'react'

interface Props{
    todo: Todo;
    toggleTodo: ToggleTodo
}

export const TodoListItem: FC<Props> = (props)=>{
    return(
        <>
            <li>
                <label
                    style={{textDecoration: props.todo.complete ? 'line-through' : undefined}}
                >
                    <input 
                        type="checkbox"
                        checked={props.todo.complete}
                        onClick={()=>{
                            props.toggleTodo(props.todo)
                        }}
                    />{' '}
                    {props.todo.text}
                </label>
            </li>
        </>
    )
}