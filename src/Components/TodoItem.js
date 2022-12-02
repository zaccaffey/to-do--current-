import { Card } from "react-bootstrap"
import React, { useState } from "react"
const TodoItem = (props) => {
    return (
        <Card className="todo-item">
            <div className="todo-item__description">
                <h2>{props.item.title}</h2>
                <p>{props.item.description}</p>
            </div>
        </Card>
    )
}

export default TodoItem