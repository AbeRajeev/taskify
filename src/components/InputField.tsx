import React from 'react'
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input type='input' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Add a task' className='input__box' />
        <button className='input_submit' type='submit'>Add Task</button>
    </form>
  )
}

export default InputField