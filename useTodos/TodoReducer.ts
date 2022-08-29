import { Todo } from "./interfacesTodo";



type TodoActionType = 
    | {type: 'addTarea', payload: Todo}
    | {type: 'removeTarea', payload: number}
    | {type: 'toggleTodo', payload: number}

export const estadoInicial : Todo[] = []

export const todoReducer = (initialState = estadoInicial , action: TodoActionType ): Todo[] => {

    switch (action.type) {
        case 'addTarea':
            return [...initialState, action.payload];

        case 'removeTarea':
            return initialState.filter(todo => todo.id !== action.payload)
        case 'toggleTodo':
            return initialState.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo, done :!todo.done
                    }
                }
                return todo;
            });

    
        default:
            return initialState;
    }

}