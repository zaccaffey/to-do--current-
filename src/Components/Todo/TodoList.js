import TodoItem from "./TodoItem"
// import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react"
import Col from 'react-bootstrap/Col';
import './TodoItem.css'
const TodoList = (props) => {

    const removeTodoHandler = (id) => {
        props.onRemoveTodo(id)
        console.log(id)
    }

    const editClickToOpen = () => {
        props.editClickToOpen()
    }

    const getId = (id) => {
        props.getId(id)
        console.log(id)
    }

    return (
        <div className="cards">
            <Col>
                {props.list.map(todo => (
                    <div>
                        <TodoItem item={todo} onRemoveTodo={removeTodoHandler} editClickToOpen={editClickToOpen} getId={getId}></TodoItem>
                    </div>
                ))}
            </Col>
        </div>
    )
}

export default TodoList