import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'
import Button from '@material-ui/core/Button';
import { TodosContext } from './contexts/todosContext'



export default function EditTodoForm({ task, id, toggleisEditing }) {
    const { editTodo } = useContext(TodosContext)
    const [value, handleChange, reset] = useInputState(task),
        handleSubmit = evt => {
            evt.preventDefault()
            editTodo(id, value)
            reset()
            toggleisEditing()
        }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ marginLeft: "1rem", width: "75%" }}>
                <TextField value={value} onChange={handleChange} margin="normal"
                    label="Edit Todo" fullWidth autoFocus />
                <Button variant="contained" color="primary" type="submit"
                    size="small" style={{ margin: "0.1rem" }}>
                    Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={toggleisEditing}
                    size="small" style={{ margin: "0.1rem" }}>
                    cancel
                </Button>
            </form>
        </div>
    )
}
