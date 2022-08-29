import { useState } from "react"

export const useCounter = (initialValue=10) => {

    const [counter, setCounter] = useState(initialValue)

    const incremento = (increment=1)=>{
        setCounter(counter+increment)
    }
    const decremento = (decrement:number) => {
        if(counter-decrement>0) {
            setCounter(counter -decrement )
        }
        else {
            setCounter(0)
        }
    }
    const reset = ()=> {
        setCounter(initialValue)
    }


    return{
        counter,
        incremento, 
        decremento, 
        reset
    }

}


