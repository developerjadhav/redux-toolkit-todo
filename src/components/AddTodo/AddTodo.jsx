import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandeler = (e) => {
        e.preventDefault();
        if (!input.trim()) return; // Prevent empty todo
        dispatch(addTodo(input));
        setInput('');
    }

    console.log(input);
    

    return (
        <>
            <div>Add your todos here...</div>

            <Form onSubmit={addTodoHandeler} >
                <Form.Group className="mb-3">
                    <InputGroup>
                        <Form.Control placeholder="Enter your text..." 
    value={input} 
    onChange={(e) => setInput(e.target.value)} />
                        <Button variant="success" type="submit">
                            Add ToDo
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </>
    );
};

export default AddTodo;
