import { FC, useState } from 'react'

interface Props{
    addTodo: AddTodo,
    clearTodoList: ClearTodoList
}

export const AddTodoForm: FC<Props> = (props)=>{
    const [text,setText] = useState('');

    return(
        <form>
            <input type="text" 
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
            <button type='submit'
                onClick={(e)=>{
                    e.preventDefault();
                    props.addTodo(text)
                    setText('');
                }}
            >Add Todo</button>
            <button
                onClick={(e)=>{
                    e.preventDefault();
                    props.clearTodoList();
                }}
            >Clear list</button>
        </form>
    )
}