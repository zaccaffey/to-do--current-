import './TodoForm.css'
import React, { useState } from "react"
const TodoForm = (props) => {
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newDueDate, setNewDueDate] = useState('')
    const [newPriority, setNewPriority] = useState('Low')

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setNewDescription(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setNewDueDate(event.target.value)
    }

    const priorityChangeHandler = (event) => {
        setNewPriority(event.target.value)
        console.log(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newTodo = {
            title: newTitle,
            description: newDescription,
            date: new Date(newDueDate.replace(/-/g, '/').replace(/T.+/, '')),
            priority: newPriority
        }

        props.onSaveTodo(newTodo)
        setNewTitle('')
        setNewDescription('')
        setNewDueDate('')
        setNewPriority('Low')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-todo__controls'>
                <div className='new-todo__control'>
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-todo__control'>
                    <label>Description</label>
                    <input type="text" value={newDescription} onChange={descriptionChangeHandler} />
                </div>
                <div className='new-todo__control'>
                    <label>Due Date</label>
                    <input type="date" value={newDueDate} min="2022-12-05" onChange={dateChangeHandler} />
                </div>
                <div className='new-todo__control'>
                    <label>Priority</label>
                    <select value={newPriority} onChange={priorityChangeHandler}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>
            <div className='new-todo__actions'>
                <button type='submit'>Add Todo</button>
            </div>
        </form>
    )
}

export default TodoForm