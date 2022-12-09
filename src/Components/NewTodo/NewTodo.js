import { useState } from 'react'
import './NewTodo.css'
import TodoForm from './TodoForm'

const NewTodo = (props) => {
    const [count, setCount] = useState(1)

    const saveTodoHandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: count
        }
        let next = count + 1
        setCount(next)
        props.onAddTodo(todoData)
    }
    return (
        <div className='new-todo'>
            <TodoForm onSaveTodo={saveTodoHandler} />
        </div>
    )
}

export default NewTodo