import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from './Todo/TodoList';
import React, { useState } from 'react';
import NewTodo from './NewTodo/NewTodo';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import './Todo/TodoItem.css'

const initialList = [
    {
        title: "Clean the car",
        description: "I need to vaccum my car before 5 pm.",
        date: new Date("12/13/2022"),
        id: Math.random().toString(),
        priority: "High"
    },
    {
        title: "Wash the dog",
        description: "I need to give Indy a bath before the end of the day.",
        date: new Date("1/13/2023"),
        id: Math.random().toString(),
        priority: "Medium"
    },
    {
        title: "Grocery Shopping",
        description: "I need to pickup milk.",
        date: new Date("1/03/2023"),
        id: Math.random().toString(),
        priority: "Low"
    },
]
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
            return [todo, ...prevList]
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
                    <h1>To-Do List</h1>
                    <div>
                        <NewTodo onAddTodo={addTodoHandler}/>
                        <TodoList list={todos} onRemoveTodo={removeTodo} editClickToOpen={handleClickToOpen} getId={getId}></TodoList>
                    </div>
                    <Dialog open={open} onClose={handleToClose}>
                        <DialogTitle>Edit Item</DialogTitle>
                        <DialogContent>
                            <form onSubmit={submitHandler}>
                                <div>
                                    <DialogContentText>Title</DialogContentText>
                                    <input type="text" value={newTitle} onChange={titleChangeHandler} placeholder={myObject.title} on></input>
                                   
                                    <DialogContentText>Description</DialogContentText>
                                    <textarea type="text" value={newDescription} onChange={descriptionChangeHandler} placeholder={myObject.description}></textarea>
    
                                    <DialogContentText>Due Date</DialogContentText>
                                    <textarea type="text" value={newDueDate} onChange={dateChangeHandler} placeholder={myObject.date}></textarea>

                                    <DialogContentText>Priority</DialogContentText>
                                    <input type="text" value={newPriority} onChange={priorityChangeHandler} placeholder={myObject.priority}></input>
                                </div>
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </Col>
            </Row>
        </Container>
    )
}

export default Home