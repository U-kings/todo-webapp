import React from 'react'
import { List } from '../TodoList/TodoListElemet'
import Todo from '../Todo/Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <>
            <List>
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} />
                ))}
            </List>
        </>
    )
}

export default TodoList
