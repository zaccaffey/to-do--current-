import { Card } from "react-bootstrap"
import React, { useState } from "react"
import DateWidget from "../DateWidget"
import './TodoItem.css'

const TodoItem = (props) => {

    const deleteHandler = () => {
        props.onRemoveTodo(props.item.id)
    }

    const editClickHandler = () => {
        props.editClickToOpen()
        props.getId(props.item.id)
    }

    return (
        <Card className="card card-3">
            <div className="todo-item__description">
                <h2>{props.item.title}</h2>
                <p>{props.item.description}</p>
                <DateWidget date={props.item.date}></DateWidget>
                <p>Priority: {props.item.priority}</p>
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={editClickHandler}>Edit</button>
            </div>
        </Card>
    )
}

export default TodoItem