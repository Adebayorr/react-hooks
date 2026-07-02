import { useState } from "react"

function TodoList () {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState("")

    const addTodoItem = (event) => {
        setTodo(event.target.value)
    }

    const UpdateTodoList = () => {
        if (!todo.trim()) return;
        setList([...list, {
            id: crypto.randomUUID(),
            name: todo
        }
    ])
        setTodo('')
    }

    const deleteTodo = (event) => {
        const itemId =event.target.id

        setList( prev => prev.filter(listItem => listItem.id !== itemId ))
        
    }
    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter To-do"
                value={todo}
                onChange={addTodoItem}
            />
            <button 
                onClick={UpdateTodoList}
            >Add To-do</button>
            <ul>
                {list.length === 0 && <p>Todo List is Empty</p>}
                {list.map(item => (
                    <li key={item.id}>
                       <span>{item.name} </span> 
                        <button id={item.id} onClick={deleteTodo}>delete</button>
                    </li>
                    
                ))}
                
            </ul>
            
        </div>
    )
}

export default TodoList