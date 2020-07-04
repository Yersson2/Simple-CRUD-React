import React from 'react';
import { useForm } from "react-hook-form"

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
                <input type="text" name="name" ref={register({
                    required:{
                        value: true,
                        message: 'El campo es obligatorio'
                    }
                })}/>
                <div>
                    {errors?.name?.message}
                </div>
            <label>Nombre de usuario</label>
                <input type="text" name="username" ref={register({
                    required:{
                        value: true,
                        message: 'El campo es obligatorio'
                    }
                })}/>
                <div>
                    {errors?.username?.message}
                </div>
            <button>Agregar nuevo usuario</button>
        </form>
    );
}
 
export default AddUserForm;