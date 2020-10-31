import { v4 as uuidv4 } from 'uuid';
import { useLocalStorageState } from "./useLocalStorageState"

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos)
    return {
        todos,
        addTodo: newTodo => {
            setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }])
        },
        removeTodo: todoId => {
            //filter out removed todo 
            const updatedTodos = todos.filter(todo => todo.id !== todoId)
            //set todos with new todo array
            setTodos(updatedTodos)
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodos)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo)
            setTodos(updatedTodos)
        }
    }
}
