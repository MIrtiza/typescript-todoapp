interface Todo {
    text: string;
    complete:boolean;
}


type ToggleTodo = (seclectedTodo: Todo)=> void;

type AddTodo = (text: string)=> void;

type ClearTodoList = ()=> void;