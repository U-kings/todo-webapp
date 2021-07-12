import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FormContainer,
        InputField,
        Button,
        DropdownContainer,
        SelectOptions,
        CenterDiv} from './FormElements';

const Form = ({
                setInputText,
                todos,
                setTodos,
                inputText,
                setStatus}) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
            setTodos([
                ...todos,
                {text:inputText, completed:false, id:Math.random()*1000},
            ]);
        setInputText("");
    }

    const statusHandler = (e) =>{
        setStatus(e.target.value);
    }

    return (
        <>
            <FormContainer>
                <CenterDiv>
                <InputField value={inputText} onChange={inputTextHandler} />
                <Button onClick={submitTodoHandler} >
                    <FontAwesomeIcon icon={["fas", "plus"]} />
                </Button>

                <DropdownContainer>
                    <SelectOptions onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </SelectOptions>
                </DropdownContainer>
                </CenterDiv>
            </FormContainer>
        </>
    )
}

export  default Form;