//todos
//all method that interact with todos
import React, { createContext } from 'react'
import useTodosState from '../hooks/useTodosState'

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release ladybugs into the garden", completed: true }
]

const TodosContext = createContext()

function TodosProvider(props) {
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodosState(defaultTodos)
    return (
        <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}>
            {props.children}
        </TodosContext.Provider>
    )
}

export { TodosProvider, TodosContext }
