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

const initialList = [
    {
        title: "Clean the car",
        description: "I need to vaccum my car before 5 pm.",
        date: new Date("12/13/2022"),
        id: Math.random().toString()
    },
    {
        title: "Wash the dog",
        description: "I need to give Indy a bath before the end of the day.",
        date: new Date("1/13/2023"),
        id: Math.random().toString()
    },
    {
        title: "Grocery Shopping",
        description: "I need to pickup milk.",
        date: new Date("1/03/2023"),
        id: Math.random().toString()
    },
]
const Home = () => {

    const [todos, setTodos] = useState(initialList)
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newDueDate, setNewDueDate] = useState('')
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
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>To-Do List</h1>
                    <div>
                        <NewTodo onAddTodo={addTodoHandler} />
                        <TodoList list={todos} onRemoveTodo={removeTodo} editClickToOpen={handleClickToOpen} getId={getId}></TodoList>
                    </div>
                    <Dialog open={open} onClose={handleToClose}>
                        <DialogTitle>Edit Item</DialogTitle>
                        <DialogContent>
                            <form onSubmit={submitHandler}>
                                <div>
                                    <DialogContentText>Title</DialogContentText>
                                    <input type="text" value={newTitle} onChange={titleChangeHandler} placeholder={myObject.title}></input>
                                   
                                    <DialogContentText>Description</DialogContentText>
                                    <textarea type="text" value={newDescription} onChange={descriptionChangeHandler} placeholder={myObject.description}></textarea>
    
                                    <DialogContentText>Due Date</DialogContentText>
                                    <textarea type="text" value={newDueDate} onChange={dateChangeHandler} placeholder={myObject.date}></textarea>
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