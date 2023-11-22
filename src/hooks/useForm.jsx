import React, { useState } from "react";

export const useForm = (initilaState = {}) =>{
    const [formState, setFormState] = useState(initilaState)

    const onInputChange = (evt) =>{
        const { name, value } = evt.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState (initilaState)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}