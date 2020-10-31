import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TodoList from './TodoList'
import Grid from '@material-ui/core/Grid'
import TodoForm from './TodoForm'
import { TodosProvider } from './contexts/todosContext'


export default function TodoApp() {
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
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}
