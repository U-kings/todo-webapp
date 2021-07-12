import styled from 'styled-components'

export const CenterDiv = styled.div`
    display: flex;
    margin: auto;
`
export const FormContainer = styled.form`
    margin: 2rem auto;
    text-align: center;
    display: flex;
    margin-bottom: 3.5rem;
`

export const InputField = styled.input`
    border: 0px solid;
    font-size: 1.2rem;
    height: 2.2rem;
    padding: 0 .8rem;
    border-radius: 50px 0 0 50px;
    width: 150%;
    margin: auto;
    box-sizing: border-box;
    font-family: Raleway;
    font-weight: 500;

    &:focus{
        outline: none
    }
`

export const Button = styled.button`
    border: none;
    color: #fff;
    background-color: blueviolet;
    padding: .58rem 1rem;
    border-radius: 0;
    margin: auto 1rem auto 0;
    font-size: 1rem;

    &:focus{
        outline: none
    }

    &:hover{
        background-color: greenyellow;
    }
`

export const DropdownContainer = styled.div`
    margin: auto;
    width: 100%;
`

export const SelectOptions = styled.select`
    font-size: 1rem;
    border: none;
    height: 2.4rem;
    width: 105%;
    padding: 0 .6rem;
    font-family: Raleway;
    font-weight: 500;

    &:focus{
        outline: none;
    }

`