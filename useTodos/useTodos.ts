import { useReducer, useEffect } from "react"

import { Todo } from "./interfacesTodo"
import { todoReducer } from "./TodoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('Todos') || '')
  }

  export const estadoInicial : Todo[] = []

 export const useTodos = () => {
    const [todoState, dispatch] = useReducer(todoReducer, estadoInicial, init)

    useEffect(() => {
      localStorage.setItem('Todos', JSON.stringify(todoState)) 
    }, [todoState])
    
    const handleNewTodo = (todo:Todo )=> {
      dispatch({type: 'addTarea', payload : todo})
    }

    const handleRemoveTodo = (id:number) => {
      dispatch({type:'removeTarea', payload:id})
    }
    const handleToggleTodo = (id: number)=>{
      dispatch({type:'toggleTodo', payload:id})
    }

    const pendingCountTodos = ()=> {
        return todoState.filter(todo=> !todo.done).length 
    }
    const countTodos = todoState.length

    return {
        todoState, 
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        pendingCountTodos,
        countTodos

    }
}
