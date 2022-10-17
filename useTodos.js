import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// información estática pero luego se guardo en el local Storage

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: "Recolectar la piedra del alma",
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: "Recolectar la piedra del tiempo",
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {

// la funcion todoReducer se lo pasamos al estado como  referencia
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
// funcion para agregar un nuevo item
    const handleNewTodo = ( todo ) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        };

        dispatch(action);
    };

// funcion para borrar un nuevo item
    const handleDeleteTodo = (id) => {
        // console.log({id});
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };

// funcion para aprobar una tarea
    const handleToggleTodo = (id) => {
        // console.log({id});
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    };

    const todosCount = todos.length;       

    const pendingTodosCount = todos.filter((todo) => !todo.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    };

};