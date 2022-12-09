import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from './Todo/TodoList';
import React, { useEffect, useState } from 'react';
import NewTodo from './NewTodo/NewTodo';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import './NewTodo/TodoForm.css';

const Home = () => {

    const [todos, setTodos] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newDueDate, setNewDueDate] = useState('')
    const [newPriority, setNewPriority] = useState('')
    const [myId, setMyId] = useState('')
    const [myObject, setMyObject] = useState('')

    useEffect(() => {
        load()
    }, []);

    const load = () => fetch('/todos', {
        method: 'GET'
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        setTodos(data)
    })

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
        fetch('/todos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"title": todo.title, "description": todo.description, "date": todo.date, "priority": todo.priority })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            setTodos((prevList) => {
                let temp = [todo, ...prevList]
                return [...temp].sort((a, b) => a.date > b.date ? 1 : -1)
            })
        })
    }

    const removeTodo = (id) => {
        console.log(id)
        fetch('/todos/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(function (data) {
            let newList = [...todos]
            let item = newList.find(element => element.id === id)
            let index = newList.indexOf(item)
            newList.splice(index, 1)
            setTodos(newList)
        })
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
        let id = myId
        console.log("id " + myId)

        fetch('/todos/' + id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"title": newTitle, "description": newDescription, "date": newDueDate, "priority": newPriority })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            load()
            setOpen(false)
            setNewTitle('')
            setNewDescription('')
            setNewDueDate('')
        })
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