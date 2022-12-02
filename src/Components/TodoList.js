import TodoItem from "./TodoItem"
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react"
import Col from 'react-bootstrap/Col';
const TodoList = (props) => {

    const [list, setList] = useState(props.list)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

    function handleDelete(title) {
        let newList = [...list]

        let item = newList.find(element => element.title === title)
        let index = newList.indexOf(item)
        newList.splice(index, 1)
        setList(newList)
    }

    function handleAdd() {
        let newList = [...list].concat({ title, description, id: uuidv4() });
        setList(newList);
        setTitle('');
        setDescription('')
        console.log(newList)
        console.log(list)
    }

    function handleChange(event) {
        // track input field's state
        setTitle(event.target.value)
    }

    function handleDescriptionChange(event) {
        // track input field's state
        setDescription(event.target.value)
    }

    return (
        <div>
            <Col>
                <h2>New Item</h2>
                <h3>Title</h3>
                <input type="text" value={title} onChange={handleChange}></input>
                <h3>Description</h3>
                <textarea type="text" value={description} onChange={handleDescriptionChange}></textarea>
                <button type="button" disabled={title.length === 0} onClick={handleAdd}>Add</button>
            </Col>
            <Col>
                {list.map(todo => (
                    <div>
                        <TodoItem item={todo} list={list}></TodoItem>
                        <button onClick={ handleClickToOpen }>Edit</button>
                        <button onClick={() => { handleDelete(todo.title) }}>Delete</button>
                    </div>
                ))}
            </Col>
        </div>
    )
}

export default TodoList