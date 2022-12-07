import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from './Todo/TodoList';
import React, { useState } from 'react';
import NewTodo from './NewTodo/NewTodo';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import './NewTodo/TodoForm.css';

const initialList = []

const Home = () => {

    const [todos, setTodos] = useState(initialList)
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newDueDate, setNewDueDate] = useState('')
    const [newPriority, setNewPriority] = useState('')
    const [myId, setMyId] = useState('')
    const [myObject, setMyObject] = useState('')

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setNewDescription(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setNewDueDate(event.target.value)
        console.log(newDueDate)
    }

    const priorityChangeHandler = (event) => {
        setNewPriority(event.target.value)
    }

    const addTodoHandler = (todo) => {
        setTodos((prevList) => {
            let temp = [todo, ...prevList]
            console.log(typeof todo.date)
            return [...temp].sort((a, b) => a.date > b.date ? 1 : -1)
        })
    }

    const removeTodo = (id) => {
        let newList = [...todos]

        let item = newList.find(element => element.id === id)
        let index = newList.indexOf(item)
        newList.splice(index, 1)
        setTodos(newList)
    }

    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    }

    const handleToClose = () => {
        setOpen(false);
    }

    const submitHandler = (event) => {
        event.preventDefault()

        let newList = [...todos]
        let id = myId
        let item = newList.find(element => element.id === id)
        let index = newList.indexOf(item)

        newList[index].title = newTitle
        newList[index].description = newDescription
        newList[index].date = newDueDate
        newList[index].priority = newPriority
        setTodos(newList)
        console.log(newList)
        setOpen(false)
        setNewTitle('')
        setNewDescription('')
        setNewDueDate('')
    }

    const getId = (id) => {
        let newList = [...todos]
        let item = newList.find(element => element.id === id)
        setMyObject(item)
        setMyId(id)

        setNewTitle(item.title)
        setNewDescription(item.description)
        setNewDueDate(item.date)
        setNewPriority(item.priority)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="new-todo-title">
                        <h1>To-Do List</h1>
                    </div>
                    <div>
                        <NewTodo onAddTodo={addTodoHandler} />
                        <TodoList list={todos} onRemoveTodo={removeTodo} editClickToOpen={handleClickToOpen} getId={getId}></TodoList>
                    </div>
                    <Dialog open={open} onClose={handleToClose}>
                        <div className='new-todo'>
                            <DialogTitle>Edit Item</DialogTitle>
                            <DialogContent>
                                <form onSubmit={submitHandler}>
                                    <DialogTitle>Title</DialogTitle>
                                    <textarea type="text" value={newTitle} onChange={titleChangeHandler} placeholder={myObject.title} on></textarea>

                                    <DialogTitle>Description</DialogTitle>
                                    <textarea type="text" value={newDescription} onChange={descriptionChangeHandler} placeholder={myObject.description}></textarea>

                                    <DialogTitle>Due Date</DialogTitle>
                                    <textarea type="text" value={newDueDate} onChange={dateChangeHandler} placeholder={myObject.date}></textarea>

                                    <DialogTitle>Priority</DialogTitle>
                                    <select value={newPriority} select={myObject.priority} onChange={priorityChangeHandler}>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                    <Row>
                                        <div className='new-todo__actions'>
                                            <button type="submit">Submit</button>
                                        </div>
                                    </Row>
                                </form>
                            </DialogContent>
                        </div>
                    </Dialog>
                </Col>
            </Row>
        </Container>
    )
}

export default Home