import { useState } from "react"

// un hooks es una funcion exportable que puede devolver objetos, arreglos, booleanos, etc
// se recomiendas colocarle al inicio use
// la funcion esperaría un valor sino le damos uno propio
export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1)=>{
        setCounter(counter + value)
    };

    const decrement = (value = 1) => {
        // esto significa q al llegar a cero no continuara decrementando
        if (counter === 0) return;
        setCounter(counter - value);
    };

    const reset = () => {
        setCounter(initialValue);
    };
    return {
        counter,
        increment,
        decrement,
        reset

    };
};