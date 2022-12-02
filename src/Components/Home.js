import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from './TodoList';
import React, { useState } from 'react';
const testList = [
    {
        title: "Clean the car",
        description: "I need to vaccum my car before 5 pm."
    },
    {
        title: "Wash the dog",
        description: "I need to give Indy a bath before the end of the day."
    },
    {
        title: "Grocery Shopping",
        description: "I need to pickup milk."
    },
]
const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>To-Do List</h1>
                    <div>
                        <TodoList list={testList}></TodoList>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home