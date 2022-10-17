import {useState} from 'react'

export const useForm = (initialForm = {}) => {
  
    // creamos un useState para mantener los valores
    const [formState, setFormState] = useState(initialForm);

    // funcion que se ejecutara cuando se hagan cambios en los inputs
    const onInputChange = ({ target }) => {
        // recogemos los valores de los input y su name
        const { name, value } = target;
        setFormState({
            ...formState,
            // indicamos con[] la propiedad que queremos cambiar
            [name]: value,
        });
    };

    const onRestForm = () => {
        setFormState(initialForm);
    };

    return {
        // desestructuramos para mandar todos los valores
        ...formState,
        formState,
        onInputChange,
        setFormState,
        onRestForm,
    };
}
