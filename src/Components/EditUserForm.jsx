import React from 'react';
import { useForm } from "react-hook-form"

const EditUserForm = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name',props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data)
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
            <button>Editar usuario</button>
        </form>
    );
}
 
export default EditUserForm;