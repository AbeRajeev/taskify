import React from 'react'
import "./styles.css"
import { Todo } from '../models/models'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    //CompletedTodos: Array<Todo>;
    //setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className='todoList'>
            {todos.map((todo) => (
                <li> {todo.todo} </li>
            ))} 
        </div>
    )    
}


export default TodoList