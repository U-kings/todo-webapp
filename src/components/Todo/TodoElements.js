import styled, { keyframes } from "styled-components";

const slideright = keyframes`
    0%{ transform: translateX(-20px); }
    100%{ transform: translateX(30px); }
`

export const TodoContainer = styled.div`
    display: flex;
    margin: auto;
    padding: .17rem 0;
    opacity:1;
    
    &.delete-item{
        opacity: 0;
        transition: all 300ms ease-in-out;
        /* animation-name: ${slideright}; */
        /* animation-delay: 730ms; */
        transform: translateX(-30px);
    }

`

export const ListItem = styled.li`
    font-size: 1.2rem;
    color: #222;
    padding: .5rem .8rem;
    width: 270px;
    font-weight: 600;
    border-radius: 0px;
    text-decoration: none;
    list-style: none;
    font-family: Raleway;
    background-color: #fff;
    transition: all 500ms ease-in-out;

    &.completed{
        text-decoration: line-through;
        opacity: 0.95;
        color: #777;
    }
`

export const Button = styled.button`
    padding: .8rem 1rem;
    margin: 0 0 0 0rem;
    box-sizing: border-box;
    border: 0px solid;
    color: white;
    opacity: 1;
    transition: all 500ms ease-in-out;

    &:focus{
        outline: none;
    }

    &:last-child{
        margin: 0;
    }

    &.green{
        background-color: greenyellow;

        &.clicked{
            background-color: red;
            opacity: .6;
        }
    }

    &.red{
        background-color: orangered;
    }
`