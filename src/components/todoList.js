import { useEffect, useState } from "react"
import "./todoList.css"

const TodoListComponent = () => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todos")))
    const [todo, setTodo] = useState("")
    const [itemRemoved, setItemRemoved] = useState(false)
    const [itemAdded, setItemAdded] = useState(false)
    const [error, setError] = useState("")

    const handleTodoChange = e => {
        const todo = e.target.value
        setTodo(todo)
    }

    const handleTodo = () => {
        if(todo === "") {
            setError("Todo item cannot be blank")
            return
        }
        setTodoList(prev => prev.concat(todo))
        setItemAdded(true)
    }

    const handleClear = () => {
        setTodoList([])
        localStorage.setItem("todos", JSON.stringify([]))
        setItemRemoved(true)
    }

    const removeTodo = (index) => {
        todoList.splice(index, 1)
        if(todoList.length === 0) {
            localStorage.setItem("todos", JSON.stringify([]))
            setItemRemoved(true)
        }
        setTodoList(todoList)
        setItemRemoved(true)
    }

    const fetchTodos = () => {
        const items = JSON.parse(localStorage.getItem("todos"))
        if(Boolean(items) !== false && todoList.length === 0) {
            setTodoList(items)
            return true
        } 
        if(items === null) {
            setTodoList([])
        }

        localStorage.setItem("todos", JSON.stringify(todoList))
    }

  
    useEffect(() => {
        fetchTodos()
        setItemRemoved(false)
        setItemAdded(false)
    }, [itemRemoved, itemAdded])

    return (
        <div className="todolist-container">
            <h1>To-Do List</h1>
            <div className="todolist-items">
                {todoList?.length === 0 && <p>Add items to TODO</p>}
                {error && <p>{error}</p>}
                {todoList?.length > 0 && todoList?.map((val, i) => {
                    return (
                        <ul key={i}>
                            <li>{val}</li>
                            <button onClick={() => removeTodo(i)}>Remove</button>
                        </ul>
                    )
                })}
            </div>
            <div className="todolist-form">
                <div >
                    <label>Add to do: </label>
                    <input type="text" placeholder="Add todo here..." value={todo} onChange={handleTodoChange} />
                </div>
                <button onClick={handleTodo}>Add Todo</button>
                <button onClick={handleClear}>Clear Todo</button>
            </div>
        </div>
    )
}

export default TodoListComponent