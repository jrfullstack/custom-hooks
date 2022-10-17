export const todoReducer = (initialState = [], action) =>{

    switch (action.type) {
        case "[TODO] Add Todo":
            // para dejar una tarea como pendiente
            // throw new Error('Action.type = ABC no esta implementada');

            return [...initialState, action.payload];

        case "[TODO] Remove Todo":
            // del estado inicial vamos a extraer todos los objetos del arreglo menos el que viene por el payload,
            // lo dejamos fuera para eliminarlo y mandar el nuevo arreglo sin el que se a mandado por id
            return initialState.filter((todo) => todo.id !== action.payload);

        case "[TODO] Toggle Todo":
            return initialState.map(todo => {

                // buscara con map el id que sea igual al que viene en la acción del payload y si lo encuentra va a cambiar la propiedad de done
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                // sino encuentra nada regresara el mismo arreglo
                return todo;
            })

        default:
            return initialState;
    }

}