import './NewTodo.css'
import TodoForm from './TodoForm'
const NewTodo = (props) => {

    const saveTodoHandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: Math.random().toString()
        }
        props.onAddTodo(todoData)
    }
    return (
        <div className='new-todo'>
            <TodoForm onSaveTodo={saveTodoHandler} />
        </div>
    )
}

export default NewTodo