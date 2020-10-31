import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TodoList from './TodoList'
import Grid from '@material-ui/core/Grid'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';


export default function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodo => {
        setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }])
    },
        removeTodo = todoId => {
            //filter out removed todo 
            const updatedTodos = todos.filter(todo => todo.id !== todoId)
            //set todos with new todo array
            setTodos(updatedTodos)
        },
        toggleTodo = todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodos)
        },
        editTodo = (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo)
            setTodos(updatedTodos)
        }
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    })
    return (
        <Paper style={{ padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa" }}
            elevation={0}>
            <AppBar color="primary" position="static" style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color="inherit">ToDos with HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} sm={8} md={6} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}
