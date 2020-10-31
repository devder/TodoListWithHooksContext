import React, { useContext } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo'
import { TodosContext } from './contexts/todosContext'



export default function TodoList(props) {
    const { todos } = useContext(TodosContext)
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((t, idx) =>
                        <>
                            <Todo {...t} key={t.id} id={t.id} />
                            {idx < todos.length - 1 && <Divider />}
                        </>
                    )}
                </List>
            </Paper>
        )
    return null
}
