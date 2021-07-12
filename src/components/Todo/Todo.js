import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { CenterDiv } from '../Form/FormElements';
import { Button, ListItem, TodoContainer } from './TodoElements';

const Todo = ({text, todo, todos, setTodos}) => {
    const [click, setClick] = useState(false);
    const deletHandler = () => {
        setClick(!click)
        setTimeout(() => {
            setTodos(todos.filter((el) => el.id !== todo.id));
        }, 400);
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        })
        );

    };

    return (
        <>
            <TodoContainer  className={`${click ? "delete-item" : ""}`}>
                <CenterDiv>
                <ListItem className={`${todo.completed ? "completed" : ""}`}>{text}</ListItem>
                <Button onClick={completeHandler} className={`green ${todo.completed ? "clicked" : ""}`} >
                    <FontAwesomeIcon icon={["fas", "check"]} />
                </Button>
                <Button onClick={deletHandler} className="red">
                    <FontAwesomeIcon icon={["fas", "trash"]} />
                </Button>
                </CenterDiv>
            </TodoContainer>
        </>
    )
}

export default Todo;